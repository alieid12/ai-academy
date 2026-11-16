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

## Content and UI development batch — 2026-11-16
- Added `src/learning-studios.js`: six original in-depth learning studios (place value, multiplication, division, decimals, first Python program, ML train/test splits). Each contains an objective, terminology, detailed concept explanation, two worked examples, three exercises with answers, a misconception and a stretch challenge.
- Integrated studios into existing lessons without replacing prior content, quizzes, notes or local progress identifiers.
- Added a dashboard continuation button that opens the next incomplete lesson.
- Added responsive studio design with semantic definition lists, accessible expandable exercises, high-contrast panels and mobile layout rules.
- Added `test/learning-studios.test.js` validating studio schema and lesson integration.
- Commits: dcd074f, e895913, c666b26, ce5589e.
- Tests and deployment are NOT verified in this execution environment. GitHub connector accepted the commits; browser/build execution was unavailable.
- Highest priority next: execute `npm run check` in GitHub Actions or a development environment, fix any failing tests, inspect GitHub Pages in a real browser, then expand deep studios to every foundational topic.


## Curriculum, assessment and portfolio milestone — November 16, 2026

- **Curriculum:** expanded original subject-specific studios from 40 to **61 of 198 topics**. All **45 topics** across English literacy, numeracy, computer literacy and Python now have detailed studio scaffolds (objectives, definitions, examples, practice, misconception, transfer challenge). Advanced topics still require more substantial instruction and assessment.
- **Formative assessment:** added `src/assessment-bank.js` with 33 answer-specific checkpoint questions across 11 topics. Scoring and imported answers are schema-validated and unit-tested. Checkpoint data are stored separately from existing lesson completions; no progress keys were reset. A score is **practice feedback**, not proof of independent mastery.
- **Portfolio:** added 14 level-specific evidence rubrics, integrated into each learning guide. These are self-review criteria, not remote instructor grading.
- **UI:** new responsive checkpoint cards, rubric disclosures, dashboard learning metrics, foundation cards opening the correct level, and accessible current navigation indicators.
- **Accuracy:** corrected an inconsistent phonics question and clarified two ambiguous checkpoint prompts.
- **Automated QA:** added tests for checkpoints, full foundation/Python coverage, and fourteen project rubrics. GitHub Actions caught two actual content-quality failures (short checkpoint prompts, rubric evidence), then passed after corrections. The latest confirmed successful deploy workflow during this batch was commit `b0aacd64` (GitHub Actions); newer doc commits may trigger additional runs.
- **Technical limitations:** no complete manual keyboard/screen-reader/device/browser walkthrough has yet been verified. Production CI passing does not substitute for real-world accessibility testing.
- **Next:** test student workflows in a graphical browser, improve mathematical derivations, increase deep studio coverage beyond 61 of 198 topics, add portfolio evidence capture and teacher-reviewed assessment if a backend is later approved. Preserve offline-friendly, no-fee architecture.


## Continued development: advanced content, visual math, recovery and CI audit — November 16, 2026

- Added **11 original intermediate and advanced studios** (probability, matrices, chain rule, data visualization, KNN, decision trees, neurons, PyTorch tensors, NLP, agents and Docker), increasing coverage from 61 to **72 of 198** mapped topics. Existing learner identifiers and completions were preserved.
- Reworked the fraction interactive explorer to draw the actual denominator count of equal segments, highlighting the selected numerator. Replaced anonymous tens/ones characters with labelled countable blocks.
- Added dependency-free simulated DOM regression tests for fraction partition counts and place-value units; a first test failed on a malformed regex and was corrected.
- Added explicit visible progress saving failure warnings, differentiated unreadable stored data from failed writes, and made notes save confirmation accessible. Notes input now has a 20,000-character cap.
- Created `scripts/audit-content.js` and `npm run audit:content`, included in the local `npm run check` and the GitHub Pages deployment gate. Reports detailed-studio coverage, checkpoint questions and project-rubric integrity per level, without claiming introductory material equals mastery.
- **Verified CI:** GitHub Actions commit `98d34466` passed the content audit, all unit tests, production Vite build and Pages deployment. Subsequent changes require their own deployment verification.
- **Remaining educational gaps:** 126 mapped topics do not yet have a dedicated deep-dive studio; many advanced subjects need multi-session instruction, diversified projects, rigorous derivations and independent assessment. No external evaluator has certified the course.
- **Remaining QA gaps:** manual browser screen-reader, keyboard, small-screen and real-device tests are not yet verified. The static local-first architecture remains in place.


## Continued curriculum and interactive ML milestone — November 16, 2026

- Added ten original `src/neural-expansion.js` studios: activations, losses, forward propagation, optimizers, regularization, normalization, training loops, CNNs, autoencoders and diffusion.
- Added ten original `src/systems-expansion.js` studios: prompting, self-attention, vector search, tool calling, generative AI evaluation/safety, CI/CD, data drift, engineering security and research-paper reading.
- Deep-dive coverage now totals **92 of 198 topics**; all content retains original objective, vocabulary, worked examples, three practice exercises with answers, common misconception and stretch challenge. **106 mapped topics remain without that depth.** Quality targets are still aspirational.
- Added an interactive single-neuron weighted-sum/ReLU demonstration and fixed-dataset one-dimensional KNN classifier, expanding from four to **six** on-device numerical learning labs.
- Added unit tests validating neuron outputs, KNN nearest-neighbor voting, and accessible explanatory lab markup.
- Continued zero-cost static GitHub Pages architecture, no accounts or paid AI API required.
- The most recent confirmed successful production build and Pages deployment prior to this documentation update was commit `8277ad7d`, including all ten neural studios. Verify the current head workflow for the systems expansion and documentation.
- Next work: independent beginner diagnostic and mastery rubrics, additional 106 detailed studios, browser-based QA, text and screen-reader support for interactive lessons, and stronger project assessment.


## Learner evidence and UI follow-up — November 16, 2026

- Replaced the user-facing **Teacher dashboard** with an honest **Learning record**; no remote teacher access or account authentication is implied.
- The record now reports locally completed lesson activities, attempted checkpoints, currently all-correct checkpoints, notes, due reviews and deep-dive availability; per-level progress bars and a completed-activity list support orientation.
- Added responsive dark/light presentation and screen-reader-labelled progress elements for this record.
- The 92-studio release prior to this change successfully passed GitHub Actions at commit `f81d2baf`. The current UI commit must be verified independently.
- **Open issues:** some mapped lesson content remains introductory, checkpoints can be retried after seeing explanations, and no external competency assessment or graphical browser test has been completed.
