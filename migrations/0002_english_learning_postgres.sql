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

CREATE INDEX IF NOT EXISTS idx_english_vocab_created_at
ON english_vocabulary (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_english_vocab_word_type_tense
ON english_vocabulary (word_type, tense);
