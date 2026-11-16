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
