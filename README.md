# Argus FlipLearn Replica

A self-contained, browser-only replica of the EuroSchool Argus dashboard with an added **FlipLearn** PDF study mode and **Q-Bank** flashcard revision page.

> This is a front-end demo/prototype. All study content is static data derived from *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* (2nd Edition) by Aurélien Géron.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Single-file app containing HTML, CSS, JavaScript, PDF.js integration, and embedded static study data. |
| `ml-data.js` | Source copy of the static Hands-On ML dataset (also embedded inside `index.html`). |
| `README.md` | This file. |

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
  - Click any sentence in the PDF to highlight the whole sentence and see an explanation.
  - Right-panel study tools: Summary, Mindmap, Formulas, Mnemonics, Flashcards.
- **Flashcards** — 95 interactive cards covering all 19 chapters of Hands-On ML.
  - Type your answer and press Enter.
  - Card flips to reveal the correct answer and key terms.
- **Q-Bank** — select one or more chapters and start a focused flashcard revision session.

## Static data

Study content (flashcards, mindmap, formulas, mnemonics, summary) is pre-built static data based on the table of contents and key concepts from *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow, 2nd Edition*.

There is no backend or API dependency — everything runs in the browser.

## Browser notes

- Modern Chrome, Edge, Safari, or Firefox recommended.
- PDF rendering uses PDF.js loaded from CDN, so an internet connection is needed on first load.
- The Q-Bank folder picker uses `webkitdirectory`, which is supported in Chromium-based browsers and Safari; behaviour may vary in Firefox.
