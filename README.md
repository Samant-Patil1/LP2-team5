# Argus FlipLearn Replica

A self-contained, browser-only replica of the EuroSchool Argus dashboard with an added **FlipLearn** PDF study mode, **Q-Bank** flashcard revision page, and an **OpenRouter-powered AI study assistant**.

> This is a front-end demo/prototype. Study content can be AI-generated on demand using OpenRouter, or fall back to static data derived from *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* (2nd Edition) by Aurélien Géron.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-file app containing HTML, CSS, JavaScript, PDF.js integration, OpenRouter API calls, and embedded study data. |
| `ml-data.js` | Source copy of the static Hands-On ML dataset (also embedded inside `index.html`). |
| `config.example.js` | Template for your OpenRouter API key. Copy to `config.js` and add your real key. |
| `config.js` | Your real OpenRouter API key. **This file is gitignored and must never be committed.** |
| `README.md` | This file. |

## Setup

1. **Get an OpenRouter API key** from [https://openrouter.ai/keys](https://openrouter.ai/keys).
2. **Copy the config template:**
   ```bash
   cp config.example.js config.js
   ```
3. **Paste your key** into `config.js`:
   ```js
   window.OPENROUTER_KEY = 'sk-or-v1-YOUR_KEY_HERE';
   ```
4. The app will warn you with a top banner if the key is missing.

## Run locally

No build step or server-side code is required. Any static file server works.

```bash
cd argus-fliplearn
python3 -m http.server 8080
```

Open `http://localhost:8080` in a browser.

## Features

- **Dashboard** — EuroSchool-style home page with navigation, Learning Journey, Message Center, and feature cards.
- **FlipLearn** — upload any PDF and flip through pages rendered with PDF.js.
  - Click any sentence in the PDF to highlight the exact sentence and get an AI explanation.
  - Right-panel AI Study Tools:
    - **AI Notes** — auto-generated concise study notes.
    - **Flashcards** — auto-generated question/answer cards.
    - **Key Points** — auto-generated bullet points.
    - **Mindmap** — auto-generated visual mind map.
  - Click **Generate for this chapter** to populate all study tools from the current PDF or static chapter text.
  - Use the **Ask / PYQ practice chatbot** at the bottom to ask anything about the chapter, generate MCQs/PYQs, get explanations, or request similar examples.
- **Flashcards** — interactive cards covering course material.
  - Type your answer and press Enter.
  - Card flips to reveal the correct answer and key terms.
- **Q-Bank** — select one or more chapters and start a focused flashcard revision session.
  - **Previous Year Papers (PYQs)** — browse 209 ICSE previous-year papers by subject and year. Click any paper to open it (copy PDFs into `assets/pyqs/` first).
- **FlipLearn Chatbot** — ask questions about the current chapter, generate MCQs/PYQs, or request explanations. The chatbot uses the chapter context and relevant PYQ paper info to answer via OpenRouter.

## PYQ Database

- `pyq-database.json` is generated from the PDFs in `~/sam/ICSE` by running:
  ```bash
  python3 scripts/build_pyq_db.py
  ```
- It contains metadata (subject, year, paper code, title, filename) for every PDF found.
- To make the PDFs open in the app, copy or symlink them into `assets/pyqs/<subject>/` matching the `assetPath` field.

## AI integration

Study tools are powered by **OpenRouter** using `openai/gpt-4o`.

- `generateForChapter()` sends the chapter text and asks for notes, key points, flashcards, mindmap, and formulas in JSON.
- `explainText()` sends a clicked sentence and asks for a simple explanation.
- `generatePracticeQuestions()` sends a topic/sub-topic and asks for practice questions.

All AI calls include `max_tokens` to stay within the OpenRouter free-tier budget. If the API fails or is not configured, the app falls back to static data.

## Deployment

Because `config.js` contains your API key and is **gitignored**, it will not be included in a plain Git push.

- **GitHub Pages:** either upload `config.js` manually to the Pages branch, or use a GitHub Action that writes it from a repository secret.
- **Vercel / Netlify:** create a serverless function to hide the key, or add `config.js` during the build step from an environment variable.

## Browser notes

- Modern Chrome, Edge, Safari, or Firefox recommended.
- PDF rendering uses PDF.js loaded from CDN, so an internet connection is needed on first load.
- The Q-Bank folder picker uses `webkitdirectory`, which is supported in Chromium-based browsers and Safari; behaviour may vary in Firefox.
