// Original generative AI, ML systems and research workflow studios.
export const systemsExpansion={
  "Generative AI and agents:Prompting": {
    "objective": "Write testable instructions that make an AI task and output format explicit.",
    "vocabulary": [
      [
        "prompt",
        "Information and instructions supplied to a model."
      ],
      [
        "context",
        "Relevant background provided with a task."
      ],
      [
        "constraint",
        "A rule limiting allowed output or behavior."
      ]
    ],
    "explanation": "Prompt engineering is the practice of defining a task so its inputs, goals and output requirements are clear. A useful prompt names the intended audience, supplies necessary context, requests a suitable format and includes examples when they reduce ambiguity. Because model outputs can vary, test the prompt against representative and difficult cases rather than relying on one attractive answer. Do not put credentials or private information into untrusted tools.",
    "worked": [
      [
        "Vague request",
        "'Explain AI' has no audience or expected depth; it may produce material far beyond a beginner's level."
      ],
      [
        "Specific request",
        "'Explain what a computer program is to an adult beginner, using one analogy, three short steps and a check question' gives actionable constraints."
      ]
    ],
    "exercises": [
      [
        "Why include the intended reader's level?",
        "It helps the model choose appropriate language and prerequisites."
      ],
      [
        "Does one good example prove a prompt is reliable?",
        "No; evaluate across several cases and failures."
      ],
      [
        "Should a public prompt contain private API keys?",
        "No; secrets must remain protected."
      ]
    ],
    "misconception": "A well-written prompt improves task definition but cannot guarantee truth, correct reasoning or compliance.",
    "challenge": "Create three alternative prompts for explaining fractions and compare their factual accuracy and clarity."
  },
  "Generative AI and agents:Self-attention": {
    "objective": "Explain how a token combines information from earlier and nearby tokens.",
    "vocabulary": [
      [
        "query",
        "A vector requesting relevant context."
      ],
      [
        "key",
        "A vector used to measure how well context matches."
      ],
      [
        "value",
        "Information contributed after relevance weighting."
      ]
    ],
    "explanation": "Self-attention compares each token's query with keys from tokens in the same sequence. Scores are commonly scaled by the square root of key dimension and passed through softmax, producing nonnegative weights that sum to one. The output is a weighted sum of values. In causal language modeling, future positions must be masked to prevent information leakage. Multiple attention heads allow different learned projections, but attention values are not a simple proof of why an answer was produced.",
    "worked": [
      [
        "Weighted average",
        "Weights 0.3 and 0.7 over values 4 and 10 give 0.3×4+0.7×10=8.2."
      ],
      [
        "Mask a future token",
        "At position two in a left-to-right decoder, position three cannot contribute to the current prediction."
      ]
    ],
    "exercises": [
      [
        "What do self-attention weights sum to?",
        "Approximately one after softmax."
      ],
      [
        "Can a causal decoder look at future target tokens while predicting?",
        "No; future positions are masked."
      ],
      [
        "What is a value vector used for?",
        "It contributes information to the weighted output."
      ]
    ],
    "misconception": "Self-attention does not automatically track truth or causation, and high weights are not universally reliable explanations.",
    "challenge": "Calculate a three-value attention output using weights 0.2, 0.5 and 0.3 and explain the dominant contribution."
  },
  "Generative AI and agents:Vector search": {
    "objective": "Explain how vector similarity and metadata filtering support retrieval.",
    "vocabulary": [
      [
        "embedding",
        "A numerical representation of a document or query."
      ],
      [
        "similarity",
        "A measure used to rank nearby vectors."
      ],
      [
        "index",
        "A structure used to search stored representations."
      ]
    ],
    "explanation": "Vector search represents documents and queries as embeddings, then ranks stored vectors using a similarity measure. Exact nearest-neighbor search checks all items, while approximate methods can trade some accuracy for speed. Semantic similarity does not guarantee factual relevance. A robust retrieval pipeline may filter metadata, combine keyword and vector ranking, rerank candidates and evaluate whether important passages are consistently retrieved.",
    "worked": [
      [
        "Compare 2D vectors",
        "Vectors [1,0] and [2,0] have cosine similarity 1 because they point in the same direction."
      ],
      [
        "Hybrid retrieval",
        "For an error code, lexical keyword matching can complement vector search to preserve exact strings."
      ]
    ],
    "exercises": [
      [
        "Does cosine similarity of 1 prove two documents are identical?",
        "No; it indicates aligned embeddings, not identical underlying text."
      ],
      [
        "Why keep metadata filters?",
        "They can restrict results by source, date or access permissions."
      ],
      [
        "What is one disadvantage of approximate search?",
        "It may miss a true nearest neighbor."
      ]
    ],
    "misconception": "A vector database is not a fact checker; retrieved evidence still needs evaluation.",
    "challenge": "Design a retrieval test set with exact-code questions and meaning-based paraphrases, and compare two search methods."
  },
  "Generative AI and agents:Tool calling": {
    "objective": "Describe the boundary between suggesting an action and verifying a tool result.",
    "vocabulary": [
      [
        "tool",
        "A callable capability exposed to a model or program."
      ],
      [
        "argument",
        "A value supplied to a tool."
      ],
      [
        "authorization",
        "Permission to carry out an action."
      ]
    ],
    "explanation": "A model can propose a tool call with structured arguments, such as asking a calculator for a result or requesting a weather report. A host application validates the arguments, checks permissions, executes the tool and returns observations. Merely predicting a tool call does not mean the action happened. High-impact changes should use least privilege, confirmation where appropriate and read-back verification to catch errors or partial failures.",
    "worked": [
      [
        "Read-only calculation",
        "The model requests multiplication of two numbers; the host returns a numeric result, which can then be reported."
      ],
      [
        "State-changing request",
        "Before modifying a shared file, validate the exact file, permissions and desired change; verify the result after writing."
      ]
    ],
    "exercises": [
      [
        "Is a generated tool-call message proof of execution?",
        "No; inspect the actual tool result."
      ],
      [
        "Who should validate tool arguments and permissions?",
        "The executing application or host."
      ],
      [
        "What is least privilege?",
        "Granting only the permissions necessary for the requested task."
      ]
    ],
    "misconception": "Tool calling is not the same as giving a model unrestricted access to a computer or account.",
    "challenge": "Draw a safe tool-use flow with argument validation, authorization, execution, verification and error recovery."
  },
  "Generative AI and agents:Evaluation": {
    "objective": "Design an evidence-based evaluation for generated answers and retrieval.",
    "vocabulary": [
      [
        "evaluation set",
        "A collection of representative cases used to measure quality."
      ],
      [
        "groundedness",
        "Whether claims are supported by available evidence."
      ],
      [
        "failure mode",
        "A way a system can produce an unacceptable result."
      ]
    ],
    "explanation": "Generative systems require tests beyond whether outputs look fluent. Define representative tasks and desired criteria before testing, including factual accuracy, evidence support, refusal when sources are insufficient, latency and cost. For retrieval systems, test both whether correct passages were found and whether final answers cite them appropriately. Human review is often needed for ambiguous outcomes. Keep tuning cases separate from final evaluation examples to avoid overfitting to a benchmark.",
    "worked": [
      [
        "Answerability test",
        "Include questions explicitly answerable from a handbook and questions for which the handbook contains no answer."
      ],
      [
        "Score a citation",
        "Verify that a cited paragraph actually supports the specific claim, not merely that a citation link exists."
      ]
    ],
    "exercises": [
      [
        "Does fluent writing prove correctness?",
        "No; generated text may still be wrong."
      ],
      [
        "Why include unanswerable questions?",
        "To check whether the system invents unsupported answers."
      ],
      [
        "Why hold out evaluation cases?",
        "To reduce overfitting evaluations to prompts already used for tuning."
      ]
    ],
    "misconception": "One aggregate score can conceal critical safety or subgroup failures; inspect error categories.",
    "challenge": "Create a ten-question evaluation rubric for a study assistant, covering accuracy, sources and uncertainty."
  },
  "Generative AI and agents:Safety": {
    "objective": "Identify risks and practical controls for an AI system before deployment.",
    "vocabulary": [
      [
        "risk",
        "Possible harm with likelihood and severity."
      ],
      [
        "mitigation",
        "A control intended to reduce a risk."
      ],
      [
        "red team",
        "Adversarial evaluation of weaknesses and misuse paths."
      ]
    ],
    "explanation": "Responsible generative AI development considers privacy, harmful advice, unsafe tool access, misleading content and unequal performance across groups. Begin with a realistic threat and impact assessment. Implement access restrictions, sensitive-data minimization, source checking, monitoring, incident response and adversarial tests appropriate to the use case. Guardrails are layers of risk reduction, not guarantees; humans remain responsible for consequential decisions.",
    "worked": [
      [
        "Sensitive data",
        "A study tutor should not log learners' private notes unnecessarily; store only needed data with appropriate control."
      ],
      [
        "Untrusted instructions",
        "If a retrieved webpage tells an assistant to reveal secrets, treat it as untrusted text rather than authority."
      ]
    ],
    "exercises": [
      [
        "Can one safety prompt eliminate every AI risk?",
        "No; architecture, permissions and testing also matter."
      ],
      [
        "Why minimize sensitive data collection?",
        "To reduce the impact of unintended exposure and misuse."
      ],
      [
        "What is a red-team test?",
        "A deliberate attempt to expose weak or unsafe behavior."
      ]
    ],
    "misconception": "Safety is not a feature that can be certified by one checklist without ongoing monitoring and evaluation.",
    "challenge": "Build a risk register for a student tutoring bot with likelihood, impact, controls and owners."
  },
  "AI engineering:CI/CD": {
    "objective": "Describe an automated pipeline that tests code before deployment.",
    "vocabulary": [
      [
        "continuous integration",
        "Automatically checking changes when code is integrated."
      ],
      [
        "deployment",
        "Delivering a build to a running environment."
      ],
      [
        "rollback",
        "Returning to an earlier working release."
      ]
    ],
    "explanation": "Continuous integration runs automated checks when code changes. A basic pipeline installs dependencies, validates source, runs unit tests and creates a production build. Continuous delivery or deployment adds release steps subject to project controls. A successful build is not proof that the site functions for every user; smoke checks, monitoring and rollback planning remain important. Keep credentials in secure secret stores, pin trusted dependencies when appropriate and limit workflow permissions.",
    "worked": [
      [
        "Simple pipeline",
        "On each main-branch push: install packages, run tests, build assets, then publish only if earlier steps pass."
      ],
      [
        "Recover a failure",
        "If a new release breaks the login page, stop rollout or return to a known-good version while diagnosing the cause."
      ]
    ],
    "exercises": [
      [
        "What should happen if unit tests fail?",
        "Block the normal release until the issue is resolved."
      ],
      [
        "Is a successful compile equal to a usable app?",
        "No; runtime and UX checks are still needed."
      ],
      [
        "Why use limited workflow permissions?",
        "To reduce the impact of compromised tools or configuration."
      ]
    ],
    "misconception": "CI/CD does not replace code review, dependency security or testing in a real browser.",
    "challenge": "Write a four-stage release workflow for a small static learning website, including a recovery step."
  },
  "AI engineering:Data drift": {
    "objective": "Distinguish changing inputs from changing model performance.",
    "vocabulary": [
      [
        "data drift",
        "Change in the distribution of model inputs."
      ],
      [
        "concept drift",
        "Change in the relationship between inputs and outcomes."
      ],
      [
        "monitoring",
        "Repeated measurements that detect important changes."
      ]
    ],
    "explanation": "A deployed machine-learning model faces data different from its training distribution. Data drift refers to changes in input distributions, such as a camera receiving different lighting patterns. Concept drift refers to changes in how inputs relate to targets, such as a shift in consumer behavior. Not every input change causes accuracy loss, and output-quality decline can occur without simple detectable drift. Monitor multiple signals and investigate root causes before retraining.",
    "worked": [
      [
        "Input drift",
        "A defect detector trained on bright factory images is later fed nighttime images. Image brightness shifts."
      ],
      [
        "Concept change",
        "Customers start buying for different reasons even when recorded demographic features look similar."
      ]
    ],
    "exercises": [
      [
        "Is drift identical to model failure?",
        "No; it is a change that may or may not affect quality."
      ],
      [
        "What is concept drift?",
        "A change in the relationship between inputs and targets."
      ],
      [
        "Should a model retrain automatically on every drift alert?",
        "No; assess quality, safety and data validity first."
      ]
    ],
    "misconception": "Detecting drift does not by itself identify its cause or prove that a model should be retrained.",
    "challenge": "Propose two monitored signals for an image classifier and a threshold that would trigger investigation."
  },
  "AI engineering:Security": {
    "objective": "Apply least privilege, secret management and safe input handling to AI services.",
    "vocabulary": [
      [
        "least privilege",
        "Providing only necessary permissions."
      ],
      [
        "secret",
        "Sensitive credential such as an API key."
      ],
      [
        "input validation",
        "Checking data types, ranges and expected structure."
      ]
    ],
    "explanation": "AI services have conventional software-security risks as well as model-specific ones. Protect credentials using environment or secret management, validate user-supplied input, restrict file and network access, and enforce authorization on the server for sensitive operations. Guard against prompt injection at the boundary of retrieved content and tool execution. Avoid logging raw private prompts unless necessary, and plan updates, monitoring and incident response.",
    "worked": [
      [
        "Protect a key",
        "Load an API key from a secure secret store instead of committing it to a public repository."
      ],
      [
        "Validate a request",
        "Before processing a document upload, check its size, expected type and authorization independently of model output."
      ]
    ],
    "exercises": [
      [
        "Should permissions be decided only by an LLM-generated sentence?",
        "No; enforce them in trusted application code."
      ],
      [
        "Where should private API keys be kept?",
        "In an appropriate secure configuration or secret store."
      ],
      [
        "Why validate uploads?",
        "Unexpected content or size can harm reliability and security."
      ]
    ],
    "misconception": "An AI model's safety training does not eliminate standard software vulnerabilities or permission errors.",
    "challenge": "Draw a threat model showing data flow from learner input to retrieval, model, tool and output."
  },
  "Research and mastery:Reading papers": {
    "objective": "Extract research questions, methodology, evidence and limitations from a paper.",
    "vocabulary": [
      [
        "abstract",
        "A short summary of a research work."
      ],
      [
        "methodology",
        "Procedures used to generate evidence."
      ],
      [
        "baseline",
        "A reference technique used for comparison."
      ],
      [
        "limitation",
        "A condition restricting how results should be interpreted."
      ]
    ],
    "explanation": "Reading research papers means asking what the authors claim and what evidence supports it. Start with the title, abstract and problem statement, then locate the dataset or experimental setting, baselines, evaluation metrics and results. Read figures and tables carefully, including uncertainty and sample sizes. Distinguish findings from speculation, check whether code and data are available, and note possible confounding and generalization limits.",
    "worked": [
      [
        "Paper question",
        "Identify the main research question and rewrite it in one plain sentence without exaggerating claims."
      ],
      [
        "Evaluate results",
        "Compare a proposed model to a baseline and ask whether the difference is consistent across repeated runs."
      ]
    ],
    "exercises": [
      [
        "Does an impressive title prove a contribution?",
        "No; examine the method, comparisons and evidence."
      ],
      [
        "What is a baseline?",
        "A reference method for comparison."
      ],
      [
        "Why read limitations?",
        "They explain where the reported findings may not apply."
      ]
    ],
    "misconception": "Peer review and publication do not make every result correct or universally applicable.",
    "challenge": "Create a one-page paper review with question, method, evidence, reproducibility details and one proposed follow-up."
  }
};
