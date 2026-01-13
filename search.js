/*
findSimilarChunks(questionEmbedding, allChunks)
  → Takes: Question embedding + all stored chunks
  → Returns: Top 3 most relevant chunks
```

**How?** Compares embedding numbers using cosine similarity math

**Example:**
```
Question: "What is JavaScript?"
Stored chunks:
  - Chunk 1: "JavaScript is a language" (95% match) ✅
  - Chunk 2: "Python is popular" (20% match) ❌
  - Chunk 3: "JavaScript for web dev" (87% match) ✅

Returns: Chunk 1 and Chunk 3*/