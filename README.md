# AI Academy

An accessible, English-language AI learning platform designed for an adult starting with limited reading, writing, numeracy, and computer skills.

## Current implementation

- Five curriculum phases, 14 levels, and dynamically counted modules.
- Searchable curriculum and clear distinction between planned and authored lessons.
- Five authored introductory interactive lessons (reading, addition, computers, Python, algebra).
- Quizzes with feedback, independent exercises, notes, browser speech synthesis, adjustable text size.
- Browser-local completion and instructor overview; no accounts or server database yet.
- Responsive layout with keyboard focus indicators.

**Important:** Curriculum module titles are outlines, not completed instructional materials. A full AI degree-equivalent curriculum, presentation library, production backend, and AI tutor are not yet implemented.

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
npm run build
```

## Deployment

GitHub Actions workflow builds and deploys the Vite site to GitHub Pages. In repository Settings → Pages, set **Build and deployment** to **GitHub Actions**. The intended URL is https://alieid12.github.io/ai-academy/ after a successful workflow.

## Next milestones

1. Author full foundational literacy and numeracy lessons, with accessible worksheets and slide decks.
2. Add diagnostic placement, mastery checks, spaced repetition and more interactive labs.
3. Add secure authentication, database-backed progress, teacher roles, and server-side grading.
4. Add tests, continuous accessibility checks, content quality review, and localization support.
5. Develop advanced AI courses, research assignments, and portfolio projects.

## Privacy

Learner notes and progress currently stay in browser localStorage on the same device and browser. They are not synced. Do not enter sensitive personal information. Clearing browser storage will remove progress.
