// User selects: [1] Load PDF
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

**Phase:** Phase 8 (Day 8)

---

## 🎯 **SIMPLE ANALOGY:**

Think of ChatPDF like a restaurant:

| File | Restaurant Equivalent |
|------|----------------------|
| **index.js** | 👨‍💼 Manager (coordinates everything) |
| **pdf-reader.js** | 📦 Delivery person (gets ingredients) |
| **chunker.js** | 🔪 Prep cook (cuts ingredients) |
| **embeddings.js** | 🧂 Seasoning expert (adds flavor/meaning) |
| **search.js** | 🔍 Server (finds what you ordered) |
| **chat.js** | 👨‍🍳 Chef (cooks the final dish/answer) |

**You (user)** → Order food (ask question) → Get delicious meal (answer)!

---

## 📊 **HOW THEY WORK TOGETHER:**
```
USER UPLOADS PDF:
index.js → pdf-reader.js → chunker.js → embeddings.js → save to data/

USER ASKS QUESTION:
index.js → embeddings.js (for question) → search.js (find chunks) → chat.js (ask LLM) → show answer
```

---

## 💡 **WHY SEPARATE FILES?**

**Good practice in programming:**
- ✅ Each file has ONE job
- ✅ Easy to test individually
- ✅ Easy to fix bugs (know which file to check)
- ✅ Can reuse functions in other projects
- ✅ Easier to understand and maintain

**Bad practice:** Everything in one huge file (messy!)

---

## 🎯 **YOU'LL BUILD THEM IN ORDER:**
```
Day 2: pdf-reader.js (extract text)
Day 3: chunker.js (split text)
Day 4: embeddings.js (create vectors)
Day 5: (just save to JSON - no new file)
Day 6: search.js (find similar)
Day 7: chat.js (talk to LLM)
Day 8: index.js (put it all together!)