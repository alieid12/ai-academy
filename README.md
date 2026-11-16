# AI Academy

An independent, beginner-first artificial intelligence learning platform. Designed for an adult starting with limited formal education, reading confidence, arithmetic, or computer experience.

**Open the academy:** https://alieid12.github.io/ai-academy/

## What works today

- **Curriculum:** 5 phases, 14 levels, 198 mapped topic lessons, level prerequisites, outcomes, portfolios, and checkpoints.
- **Detailed teaching:** 72 original deep-dive studios. Each includes an objective, vocabulary, a substantial explanation, 2 worked examples, 3 guided practice questions with answers, a common misconception, and a challenge.
- **Additional content:** 18 expanded lessons, 10 topic-specific worked examples, and 7 guided lab extensions. Most other mapped topics are still introductory overviews.
- **Assessment:** 33 original three-question formative checkpoint items across 11 topics, with choice-specific explanations, retryable answers and local checkpoints. Transparent portfolio project rubrics for all 14 levels.
- **Learning interactions:** quizzes with explanatory feedback, learner notes, active-recall practice, device-local spaced review, and 4 interactive numerical labs (countable tens/ones, equal-part fractions, discounts, and gradient descent).
- **Access:** responsive desktop/mobile design, keyboard focus indicators, expandable answers, read-aloud speech synthesis where supported, light and dark appearance, adjustable type size, and reduced-motion styles.
- **Private local progress:** completions, quiz answers, notes, review schedule and preferences stored in browser localStorage; progress JSON export and validated import. Visible warnings explain failed local saving or unreadable stored progress.

**Not implemented:** a sandboxed Python runtime, authenticated learner or teacher accounts, cross-device sync, backend grading, extensive research labs, or independent certification of mastery. Completed lessons and self-checkpoints record practice activity. They do **not** establish independently examined mastery or professional competence.

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
npm run check
npm run preview
```

`npm run check` runs the content coverage audit, all Node unit tests, then a production Vite build. Use `npm run audit:content` to inspect each level's deep-lesson coverage and checkpoint count. The deployment workflow on pushes to `main` runs the content audit, tests and build before deploying the generated `dist` folder through GitHub Pages.

Deployment runs: https://github.com/alieid12/ai-academy/actions

## Architecture

- Vite + native JavaScript modules, semantic HTML and responsive CSS.
- Static hosting on GitHub Pages at the `/ai-academy/` base path.
- Original lesson data stored separately in `src/` modules.
- No hosted database, secrets, paid APIs, remote progress tracking, or required learner login.
- `src/review-scheduler.js` uses deterministic, testable spaced review intervals. It is a learning aid, not an automated proficiency assessment.
- `src/interactive-labs.js` runs basic calculations entirely on the device, without executing user-submitted code.

## Content integrity and next priorities

Mapped topic coverage is **not** the same as full educational depth: 72 of 198 topics currently have a dedicated deep-dive studio. All 45 topics in English literacy, numeracy, computer literacy and Python now have detailed studios; advanced levels remain less complete. Many additional topics have improved extended content, but introductory topics still need substantial lessons, varied assessments and feedback. The original university reference links are pointers to external material, not copies of copyrighted lectures.

Priority work includes fully developed mathematics and digital literacy pathways, Python debugging and assessment projects, deeper AI labs, browser-based accessibility audits, responsive device testing, robust data recovery and mastery rubrics.

See [Development log](DEVELOPMENT_LOG.md) and [Quality standard](PRODUCT_QUALITY_STANDARD.md).

## Privacy and backup

Progress remains in localStorage for the current browser profile. It does not sync to another device or browser. Clearing site data may remove your progress, so **export a JSON backup** periodically. Importing a backup merges recognized lesson records and retains existing notes and answers on the current device.

Avoid entering private or sensitive information into exercise notes. AI Academy is an independent learning project and is not affiliated with the universities linked as resources.
