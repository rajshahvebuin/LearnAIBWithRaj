# AIB-C01 Strategist Prep

Self-study site for the **AWS Certified AI Business Strategist (AIB-C01)** exam, built from the official exam guide.
Static HTML + JavaScript, no build step, no server. Progress is saved in the browser per user name.

## What is inside

| Folder / file | Purpose |
|---|---|
| `index.html` | The whole app (roadmap, lessons, quizzes, timed practice exams, flashcards, reference) |
| `data/domain1-4.js` | 58 lessons (one per exam-guide skill) and four 25-question domain quizzes |
| `data/quiz-extra-d1-4.js` | 15 extra quiz questions per domain (40 per domain in total) |
| `data/exam1.js` … `exam5.js` | Five full-length 65-question practice papers (130 min, domain weights 16/18/16/15) |
| `data/reference.js` | Exam facts, AWS services cheat sheet, official resource links, glossary |
| `ai-business-strategist-01.pdf` | The official exam guide the content maps to |

## Host on GitHub Pages

1. Create a new GitHub repository (public or private with Pages enabled) and push this folder:
   ```bash
   git init
   git add .
   git commit -m "AIB-C01 learning site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<repo>.git
   git push -u origin main
   ```
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main`, **Folder** to `/ (root)`. Save.
4. After a minute the site is live at `https://<your-user>.github.io/<repo>/`.

The site also runs locally: open `index.html` directly in a browser.

## How progress works

- On every visit the site asks for your name. Each name gets its own progress record (lessons done, quiz and exam history, roadmap ticks, flashcard marks, exam attempt in progress).
- Progress is stored in that browser's `localStorage`. It stays on the device; GitHub Pages has no server to sync it.
- Use **Export progress** in the sidebar to download a JSON backup, and **Import** on another browser or device to restore it.
- **Reset this profile** clears one name's progress only.

## Updating content

Each file in `data/` is plain JavaScript that assigns into `window.AIB_DATA`. Edit a lesson, add a quiz question, or add a third exam by following the shape of the existing objects. Every quiz or exam question needs a `skill` ID that matches a lesson ID (for example `2.2.3`) so the Weak-skills page can link back to it.
