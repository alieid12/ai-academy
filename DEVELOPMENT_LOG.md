# Development log — 2026-11-16

## Repository audit
- Vite 6, vanilla JavaScript, GitHub Pages deployment on main.
- Browser localStorage holds lesson answers, notes, completion, and text scaling.
- Existing lessons, level guides, and external university references are separate modules.
- No backend required for the current single-device learning workflow.
- Deployment workflow uses Node 22, npm install, node tests, Vite build, and GitHub Pages artifact deployment.

## Changes committed
- Exposed a progress JSON export button using the existing export handler.
- Corrected dashboard completion percentage to count available lessons.
- Added searchable level metadata so live curriculum filtering can match level and module text.

## Verification limitations
- Source changes were committed through the GitHub connector.
- No build or browser test has been executed in this session: local container cannot reach github.com, and the GitHub connector does not provide a shell.
- Commit status returned no checks; pull-request workflow lookup returned no runs. GitHub Pages deployment remains unverified.

## Priority backlog
1. Verify GitHub Pages workflow and deployed page in a browser.
2. Add automated tests for live search, backup export, and local persistence.
3. Implement safe JSON progress import with schema validation and merge behavior.
4. Add quiz explanations, multiple attempts, and mastery-based assessment.
5. Expand foundational literacy and numeracy lessons before advanced subjects.
6. Conduct keyboard, screen-reader, responsive, and reduced-motion audits.
7. Add explicit lesson content schema validation and curriculum coverage reports.

## Design principles
- Never represent a planned module as fully taught.
- Preserve existing learner data and maintain offline-friendly GitHub Pages hosting.
- Avoid paid infrastructure and unverified claims of deployment success.

## Second implementation batch — 2026-11-16
- Added import of progress JSON backups, with format/version validation, 2 MB input limit, filtering of lesson IDs and quiz answers, bounded notes, and merge behavior that preserves existing notes and answers.
- Added accessible import status announcements and a visible import control.
- Added quiz feedback identifying the correct choice and a lesson-specific explanation or teaching step.
- Added keyboard focus styles, search visibility rules and reduced-motion CSS.
- Added Node test suite `test/curriculum-integrity.test.js` checking curriculum topic coverage, answer indices, learning guides and HTTPS resource links.
- Commits: d9a4c9c, 28629d6, 8b08be9.
- Verification: GitHub connector confirmed commits, but no executable test/build results or successful Pages deployment could be obtained in this environment. New test suite is committed but not yet observed running. Do not treat commits as deployment verification.
- Next: check workflow test results, fix any failures, inspect mobile browser behavior, then deepen numeracy and literacy instruction.
