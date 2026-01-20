/*// User selects: [1] Load PDF
→ Calls pdf-reader.js to extract text
→ Calls chunker.js to split text
→ Calls embeddings.js to create vectors
→ Saves to data/

// User selects: [2] Ask question
→ Calls embeddings.js for question
→ Calls search.js to find similar chunks
→ Calls chat.js to get LLM answer
→ Shows answer to user
```
*/