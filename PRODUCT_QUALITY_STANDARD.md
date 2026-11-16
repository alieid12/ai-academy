# AI Academy — Product and Learning Quality Standard

## Mission
Make high-quality AI education accessible to an adult starting with limited reading, writing and mathematics skills, while preserving a credible path toward independent engineering and research. No course can guarantee universal mastery; the product must demonstrate observable learning outcomes.

## Non-negotiable principles
1. **Clarity before decoration:** one clear primary action per screen, readable typography, plain-language explanations.
2. **Accessibility by default:** keyboard navigation, visible focus, semantic headings, adjustable text, screen-reader support, reduced motion, audio narration with accessible alternatives.
3. **Honest progress:** a single introductory quiz does not certify mastery. Distinguish exposure, practice, proficiency and independently assessed competence.
4. **Active learning:** every substantial concept needs a worked example, practice with feedback, transfer task and a realistic application.
5. **Reproducibility:** executable examples should specify versions, inputs, expected outputs, tests and environment requirements.
6. **Responsible AI:** evaluation, security, privacy, bias, limitations and misuse prevention must be taught throughout the program.
7. **Academic integrity:** link and attribute university resources; write original explanations and assignments.

## Audit findings (2026-11-16)
- The site is a client-side Vite app deployed on GitHub Pages with progress stored in localStorage.
- Fourteen curriculum levels and many topics exist, but most topic lessons are generated starter explanations with nearly identical three-option quizzes.
- Some hand-authored worked examples and university-aligned exercises exist.
- Level guides include goals, prerequisites, suggested timelines, projects, deliverables and checkpoints.
- No authenticated teacher accounts, server-side grade records, code execution sandbox, robust assessments or independent skill verification currently exist.
- The current completion mechanism validates only one multiple-choice question. Treat this as activity completion, not proof of mastery.

## Release stages
### Stage 1 — reliability and navigation
- Keep the Pages deployment functional, test all curriculum mappings, preserve existing saved progress.
- Provide a continue-learning action and collapsible level guides.
- Make progress persistence resilient and keyboard focus visible.
- Add automated curriculum regression checks.

### Stage 2 — substantive curriculum
- Replace generic lessons systematically, beginning with literacy, numeracy and Python.
- Each lesson: measurable objective, prerequisite check, concise explanation, worked examples, common misconceptions, two or more practice tasks, feedback, and an independent exit task.
- Provide at least three difficulty levels where appropriate; avoid repetition disguised as depth.
- Each level: cumulative review, portfolio project and transparent scoring rubric.

### Stage 3 — interactive learning
- Add code editor with safe execution or a verified external environment, guided debugging and unit tests.
- Add interactive math manipulatives, diagrams, dataset exploration and AI experiment notebooks.
- Implement adaptive practice based on demonstrated errors; do not make unsupported claims about personalized AI tutoring.

### Stage 4 — assessment and evidence
- Separate **Viewed**, **Practiced**, **Passed checkpoint** and **Project verified**.
- Add item banks, randomized variants, spaced recall and explanations for wrong answers.
- Evaluate code and projects with published rubrics; use human review for subjective outcomes.
- Provide exportable learner records and accessible progress reports.

### Stage 5 — advanced engineering and research
- Reproducible ML and deep learning labs with baselines, held-out metrics and experiment logs.
- Advanced LLM, RAG, agent, multimodal, robotics and reinforcement learning projects.
- Safety evaluation, adversarial testing, cost/latency monitoring and deployment runbooks.
- Paper reproductions, ablations, uncertainty reporting and original research proposals.

## Quality gates
- CI tests and build pass.
- Production site opens and all core navigation works on mobile and desktop.
- Keyboard-only and screen-reader walkthroughs pass.
- New lessons have subject-matter review and assessment validation.
- Performance budgets and security checks are documented.
- No feature is described as implemented until verified.

## Current release note
Stage 1 reliability improvements are implemented and have passed automated CI release checks; manual accessibility and browser QA remain incomplete. Stage 2 now includes 92 original detailed studios out of 198 mapped topics, plus 33 checkpoint questions and portfolio review rubrics for all 14 levels. Stage 3 includes six self-contained numerical demonstrations and a local spaced-recall aid; these do not provide a Python execution environment. Stage 4 contains preliminary practice checks but no independent mastery verification. Stage 5 remains largely future work. These are progress descriptions, not 10/10 quality ratings.
