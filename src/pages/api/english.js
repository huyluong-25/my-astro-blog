import sql, { hasDatabaseUrl } from '../../lib/db.js';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

const WORD_TYPES = ['noun', 'verb', 'adjective', 'adverb', 'phrase', 'idiom'];
const TENSES = [
  'present_simple',
  'present_continuous',
  'present_perfect',
  'past_simple',
  'past_continuous',
  'past_perfect',
  'future_simple',
  'future_continuous',
  'future_perfect'
];

let schemaReadyPromise;

function buildInsights(total, byTense, byType, matrix) {
  if (!total) {
    return [
      'No data yet. Add your first 3-5 words to activate smart suggestions.',
      'Tip: add at least 1 verb and 1 noun per study session to keep balanced progress.'
    ];
  }

  const topTense = byTense[0];
  const topType = byType[0];
  const underrepresented = [];

  for (const tense of TENSES) {
    for (const wordType of WORD_TYPES) {
      const found = matrix.find((item) => item.tense === tense && item.word_type === wordType);
      if (!found || found.total === 0) {
        underrepresented.push({ tense, wordType, total: 0 });
      }
    }
  }

  const insights = [];

  if (topTense) {
    const ratio = Math.round((topTense.total / total) * 100);
    insights.push(`Strongest tense right now: ${topTense.tense} (${ratio}% of all words).`);
  }

  if (topType) {
    const ratio = Math.round((topType.total / total) * 100);
    insights.push(`Most studied word type: ${topType.word_type} (${ratio}% of all words).`);
  }

  if (underrepresented.length > 0) {
    const sample = underrepresented.slice(0, 3).map((item) => `${item.wordType} + ${item.tense}`);
    insights.push(`Coverage gaps detected: ${sample.join(', ')}. Prioritize these combinations next.`);
  }

  return insights;
}

function ensureEnglishSchema() {
  if (!hasDatabaseUrl || !sql) {
    throw new Error('DATABASE_URL is missing. Please set DATABASE_URL in your environment.');
  }

  if (!schemaReadyPromise) {
    schemaReadyPromise = (async () => {
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

      await sql`
        CREATE INDEX IF NOT EXISTS idx_english_vocab_created_at
        ON english_vocabulary (created_at DESC);
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS idx_english_vocab_word_type_tense
        ON english_vocabulary (word_type, tense);
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
        SELECT id, word, meaning, word_type, tense, example_sentence, notes, created_at
        FROM english_vocabulary
        WHERE word ILIKE ${keyword}
          OR meaning ILIKE ${keyword}
          OR notes ILIKE ${keyword}
        ORDER BY created_at DESC
        LIMIT ${limit}
      `;
    } else {
      vocabulary = await sql`
        SELECT id, word, meaning, word_type, tense, example_sentence, notes, created_at
        FROM english_vocabulary
        ORDER BY created_at DESC
        LIMIT ${limit}
      `;
    }

    const byTense = await sql`
      SELECT tense, COUNT(*)::INT AS total
      FROM english_vocabulary
      GROUP BY tense
      ORDER BY total DESC, tense ASC
    `;

    const byType = await sql`
      SELECT word_type, COUNT(*)::INT AS total
      FROM english_vocabulary
      GROUP BY word_type
      ORDER BY total DESC, word_type ASC
    `;

    const matrix = await sql`
      SELECT tense, word_type, COUNT(*)::INT AS total
      FROM english_vocabulary
      GROUP BY tense, word_type
      ORDER BY tense ASC, word_type ASC
    `;

    const total = Number(vocabulary.length);
    const insights = buildInsights(total, byTense, byType, matrix);

    return json({
      vocabulary,
      stats: {
        total,
        byTense,
        byType,
        matrix,
        insights,
        dictionary: {
          wordTypes: WORD_TYPES,
          tenses: TENSES
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
    const tense = String(payload?.tense || '').trim().toLowerCase();
    const exampleSentence = String(payload?.exampleSentence || '').trim();
    const notes = String(payload?.notes || '').trim();

    if (!word || !meaning || !wordType || !tense) {
      return json({ error: 'word, meaning, wordType, tense are required' }, 400);
    }

    if (!WORD_TYPES.includes(wordType)) {
      return json({ error: `Invalid wordType. Allowed: ${WORD_TYPES.join(', ')}` }, 400);
    }

    if (!TENSES.includes(tense)) {
      return json({ error: `Invalid tense. Allowed: ${TENSES.join(', ')}` }, 400);
    }

    if (word.length > 120 || meaning.length > 500 || exampleSentence.length > 600 || notes.length > 800) {
      return json({ error: 'Input too long' }, 400);
    }

    const inserted = await sql`
      INSERT INTO english_vocabulary (word, meaning, word_type, tense, example_sentence, notes)
      VALUES (${word}, ${meaning}, ${wordType}, ${tense}, ${exampleSentence || null}, ${notes || null})
      RETURNING id, word, meaning, word_type, tense, example_sentence, notes, created_at
    `;

    return json({ success: true, item: inserted[0] }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown server error';
    return json({ error: `Server error: ${message}` }, 500);
  }
}
