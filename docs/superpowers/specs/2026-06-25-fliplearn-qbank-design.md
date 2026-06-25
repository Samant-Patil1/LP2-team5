# FlipLearn AI Tools + Q-Bank Database Design

## Goal
Make the FlipLearn right-side AI Study Tools analyse uploaded PDFs in the browser and produce useful study outputs, and add a Q-Bank database page that loads PDFs from a user-selected folder.

## In scope
1. PDF text extraction (PDF.js) into a global `pdfText` string.
2. Dynamic AI Study Tools tabs:
   - **Keywords**: term-definition cards extracted from capitalised phrases, repeated technical words, and heading-like lines.
   - **Mindmap**: hierarchical SVG/CSS map built from keyword co-occurrence and sentence proximity.
   - **Summary**: concise paragraph generated from frequent terms + first/last sentences of sections.
   - **Formulas** (new tab): math expressions detected via operator/unit/greek patterns with surrounding context.
3. Q-Bank database page:
   - Folder picker (`webkitdirectory`) to load multiple PDFs.
   - Parse and store text + metadata in `localStorage`.
   - Extract candidate questions from lines ending with `?`, numbered lists, option patterns (`a)`, `b)`, `c)`, `d)`), and PYQ markers.
   - Search/filter by subject/source.
4. Wire Q-Bank into FlipLearn chatbot so it can answer from loaded PDF content.

## Out of scope
- Server-side processing.
- LLM API integration (will be added later when an API key is provided).
- Perfect extraction accuracy; outputs are heuristic-based.

## Architecture
Single-file `index.html` with new modules:
- `PdfTextExtractor`: extracts full text from a PDF file using PDF.js.
- `StudyAnalyzer`: heuristic functions for keywords, formulas, summary, mindmap data.
- `MindmapRenderer`: renders SVG tree from mindmap data.
- `QBankStore`: loads/saves Q-Bank entries to `localStorage`.
- `QuestionExtractor`: extracts candidate questions from text.
- `QBankPage`: renders the Q-Bank UI.

## Data flow
1. User uploads PDF in FlipLearn -> `PdfTextExtractor` populates `pdfText` and renders viewer.
2. User clicks AI Study Tools tab -> `StudyAnalyzer` processes `pdfText` and renders output.
3. User selects folder in Q-Bank -> each PDF is parsed, metadata stored, questions extracted -> saved to `localStorage`.
4. FlipLearn chatbot queries `QBankStore` and `pdfText` for answers.

## Error handling
- If PDF parsing fails, show "Could not read PDF" with file name.
- If text is too short for analysis, show "Upload a longer PDF to generate notes".
- `localStorage` quota exceeded: show warning and offer to clear old Q-Bank data.

## Testing
- Upload a multi-page PDF and verify all four tabs populate.
- Load a folder of PDFs in Q-Bank and verify search/filter works.
- Ask chatbot a question related to loaded content and verify it references Q-Bank.

## Future API integration
When an API key is provided, the `StudyAnalyzer` can send `pdfText` to an LLM with structured prompts for higher-quality notes, mindmaps, and formulas, falling back to heuristics on failure.
