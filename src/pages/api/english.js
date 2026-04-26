import sql, { hasDatabaseUrl } from '../../lib/db.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

const WORD_TYPES = ['noun', 'verb', 'adjective', 'adverb', 'phrase', 'idiom'];

let schemaReadyPromise;

function buildInsights(total, byLabel, byType, matrix) {
  if (!total) {
    return [
      'No data yet. Add your first 3-5 words to activate smart suggestions.',
      'Tip: add at least 1 verb and 1 noun per study session to keep balanced progress.'
    ];
  }

  const topLabel = byLabel[0];
  const topType = byType[0];

  const insights = [];

  if (topLabel) {
    const ratio = Math.round((topLabel.total / total) * 100);
    insights.push(`Strongest topic right now: ${topLabel.label} (${ratio}% of all words).`);
  }

  if (topType) {
    const ratio = Math.round((topType.total / total) * 100);
    insights.push(`Most studied word type: ${topType.word_type} (${ratio}% of all words).`);
  }

  return insights;
}

function ensureEnglishSchema() {
  if (!hasDatabaseUrl || !sql) {
    throw new Error('DATABASE_URL is missing. Please set DATABASE_URL in your environment.');
  }

  if (!schemaReadyPromise) {
    schemaReadyPromise = (async () => {
      // Bảng cũ vẫn giữ nguyên, không drop
      await sql`
        CREATE TABLE IF NOT EXISTS english_vocabulary (
          id BIGSERIAL PRIMARY KEY,
          word TEXT NOT NULL,
          meaning TEXT NOT NULL,
          word_type TEXT NOT NULL,
          tense TEXT NOT NULL,
          example_sentence TEXT,
          notes TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `;

      // Thêm các cột mới (tùy chọn IF NOT EXISTS theo Postgres >= 9.6)
      await sql`ALTER TABLE english_vocabulary ADD COLUMN IF NOT EXISTS label TEXT DEFAULT 'General';`;
      await sql`ALTER TABLE english_vocabulary ADD COLUMN IF NOT EXISTS pronunciation TEXT;`;
      await sql`ALTER TABLE english_vocabulary ADD COLUMN IF NOT EXISTS word_form TEXT;`;
      await sql`ALTER TABLE english_vocabulary ADD COLUMN IF NOT EXISTS synonym TEXT;`;

      await sql`
        CREATE INDEX IF NOT EXISTS idx_english_vocab_created_at
        ON english_vocabulary (created_at DESC);
      `;
    })();
  }

  return schemaReadyPromise;
}

export async function GET({ request }) {
  if (!hasDatabaseUrl) {
    return json({ error: 'DATABASE_URL is missing. Please set DATABASE_URL in your environment.' }, 503);
  }

  try {
    await ensureEnglishSchema();

    const url = new URL(request.url);
    const q = String(url.searchParams.get('q') || '').trim();
    const limitRaw = Number(url.searchParams.get('limit') || 100);
    const limit = Number.isFinite(limitRaw) ? Math.max(1, Math.min(200, Math.floor(limitRaw))) : 100;

    let vocabulary;

    if (q) {
      const keyword = `%${q}%`;
      vocabulary = await sql`
        SELECT id, word, meaning, word_type, label, pronunciation, word_form, synonym, notes, created_at
        FROM english_vocabulary
        WHERE word ILIKE ${keyword}
           OR meaning ILIKE ${keyword}
           OR notes ILIKE ${keyword}
           OR label ILIKE ${keyword}
        ORDER BY created_at ASC
        LIMIT ${limit}
      `;
    } else {
      vocabulary = await sql`
        SELECT id, word, meaning, word_type, label, pronunciation, word_form, synonym, notes, created_at
        FROM english_vocabulary
        ORDER BY id ASC
        LIMIT ${limit}
      `;
    }

    const byLabel = await sql`
      SELECT label, COUNT(*)::INT AS total
      FROM english_vocabulary
      GROUP BY label
      ORDER BY total DESC, label ASC
    `;

    const byType = await sql`
      SELECT word_type, COUNT(*)::INT AS total
      FROM english_vocabulary
      GROUP BY word_type
      ORDER BY total DESC, word_type ASC
    `;

    const matrix = await sql`
      SELECT label, word_type, COUNT(*)::INT AS total
      FROM english_vocabulary
      GROUP BY label, word_type
      ORDER BY label ASC, word_type ASC
    `;

    const labels = byLabel.map((i) => i.label);
    const total = Number(vocabulary.length);
    const insights = buildInsights(total, byLabel, byType, matrix);

    return json({
      vocabulary,
      stats: {
        total,
        byLabel,
        byType,
        matrix,
        insights,
        dictionary: {
          wordTypes: WORD_TYPES,
          labels
        }
      }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}

export async function POST({ request }) {
  if (!hasDatabaseUrl) {
    return json({ error: 'DATABASE_URL is missing. Please set DATABASE_URL in your environment.' }, 503);
  }

  try {
    await ensureEnglishSchema();

    const payload = await request.json();
    const word = String(payload?.word || '').trim();
    const meaning = String(payload?.meaning || '').trim();
    const wordType = String(payload?.wordType || '').trim().toLowerCase();
    
    // Field mới
    const label = String(payload?.label || 'Contract').trim();
    const pronunciation = String(payload?.pronunciation || '').trim();
    const wordForm = String(payload?.wordForm || '').trim();
    const synonym = String(payload?.synonym || '').trim();
    const notes = String(payload?.notes || '').trim();

    if (!word || !meaning || !wordType) {
      return json({ error: 'word, meaning, wordType are required' }, 400);
    }

    if (!WORD_TYPES.includes(wordType)) {
      return json({ error: `Invalid wordType. Allowed: ${WORD_TYPES.join(', ')}` }, 400);
    }

    if (word.length > 255 || meaning.length > 500) {
      return json({ error: 'Input too long' }, 400);
    }

    // "tense" bắt buộc theo schema cũ, lưu tạm một giá trị tĩnh để không đổi DDL
    const inserted = await sql`
      INSERT INTO english_vocabulary (word, meaning, word_type, label, pronunciation, word_form, synonym, notes, tense)
      VALUES (${word}, ${meaning}, ${wordType}, ${label}, ${pronunciation}, ${wordForm}, ${synonym}, ${notes}, 'none')
      RETURNING id, word, meaning, word_type, label, pronunciation, word_form, synonym, notes, created_at
    `;

    return json({ success: true, item: inserted[0] }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}
