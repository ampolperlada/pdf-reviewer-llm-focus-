/*
chunkText(text, chunkSize)
  → Takes: "Long text string..."
  → Returns: ["Chunk 1", "Chunk 2", "Chunk 3"]
```

**Why?** LLMs have token limits. Can't send entire PDF at once!

**Example:**
```
Input: "JavaScript is a programming language. It is used for web development. Node.js runs on servers."

Output: 
[
  "JavaScript is a programming language. It is used for web development.",
  "Node.js runs on servers."
]*/