// Original portfolio review criteria for each curricular level.
// These are transparent self-review rubrics, not automated grading.
export const projectRubrics={
  "English literacy": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Accurate reading",
        "evidence": "Read ten unfamiliar but grade-appropriate computing instructions aloud or with assistive speech and explain each in your own words."
      },
      {
        "name": "Clear writing",
        "evidence": "Write five unambiguous action instructions with complete sentences and correct order."
      },
      {
        "name": "Proof of understanding",
        "evidence": "Demonstrate an instruction on a real device, explain the result, and record how you checked your understanding."
      }
    ]
  },
  "Numeracy": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Arithmetic with explanations",
        "evidence": "Show at least eight worked operations including fractions, decimals, percentage discounts and checks."
      },
      {
        "name": "Realistic budget",
        "evidence": "Create a table of items, quantities, prices, totals and a budget limit, with units."
      },
      {
        "name": "Independent verification",
        "evidence": "Estimate totals, recheck at least two calculations by an independent method, and explain any differences."
      }
    ]
  },
  "Computer literacy": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Organized workspace",
        "evidence": "Create a named folder system, use consistent filenames and locate a saved document."
      },
      {
        "name": "Safe workflow",
        "evidence": "Demonstrate password safety, reliable downloads, handling suspicious links and reversible file operations."
      },
      {
        "name": "Backup evidence",
        "evidence": "Make and restore a copy of a non-sensitive practice file, and document how you verified the backup."
      }
    ]
  },
  "Python": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Working program",
        "evidence": "Build a small useful command-line project with clear prompts, validation, functions and local persistence."
      },
      {
        "name": "Tests and debugging",
        "evidence": "Include tests for normal, boundary and invalid inputs, and document one fixed bug."
      },
      {
        "name": "Readable source",
        "evidence": "Use descriptive names, a simple structure, a README and instructions for running and testing the project."
      }
    ]
  },
  "Algebra": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Model from words",
        "evidence": "Translate three practical word problems into formulas and name each variable and its units."
      },
      {
        "name": "Correct solution",
        "evidence": "Show valid equation manipulations, verify answers by substitution in the original equation, and explain each step in plain English."
      },
      {
        "name": "Graph interpretation",
        "evidence": "Create a clearly labelled graph or value table and explain its trends, units and one limitation."
      }
    ]
  },
  "Computer science": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Correct algorithm",
        "evidence": "Implement or trace two algorithms and demonstrate outputs on representative inputs."
      },
      {
        "name": "Reasoned complexity",
        "evidence": "Explain worst-case runtime using inputs of different sizes, without claiming unsupported precision."
      },
      {
        "name": "Data and tests",
        "evidence": "Choose appropriate data structures, include boundary cases, and compare results with a simple baseline."
      }
    ]
  },
  "Mathematics for ML": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Worked mathematics",
        "evidence": "Show correct derivations or computed examples for vectors, derivatives and basic probability."
      },
      {
        "name": "Interpretation",
        "evidence": "Interpret each mathematical result by explaining its quantities, physical units, assumptions and practical meaning."
      },
      {
        "name": "Independent checks",
        "evidence": "Verify selected answers numerically or visually and explain approximations and potential errors."
      }
    ]
  },
  "Data science": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Reproducible dataset",
        "evidence": "Document the source, permission to use it, schema, missing values and transformations."
      },
      {
        "name": "Honest analysis",
        "evidence": "Produce charts with labels and at least three insights supported by observations."
      },
      {
        "name": "Risk and limitations",
        "evidence": "Describe dataset bias, confounding, outliers, privacy risks and important cleaning decisions."
      }
    ]
  },
  "Classical ML": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Leakage-free evaluation",
        "evidence": "Document a train/validation/test or appropriate cross-validation protocol with correct preprocessing."
      },
      {
        "name": "Meaningful baseline",
        "evidence": "Compare against a non-ML or simple ML baseline using task-appropriate metrics, documenting how each was evaluated."
      },
      {
        "name": "Error analysis",
        "evidence": "Inspect representative false predictions and explain uncertainty, error patterns and possible limitations."
      }
    ]
  },
  "Deep learning": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Correct training loop",
        "evidence": "Demonstrate forward pass, loss, backward gradients and optimizer updates with tracked hyperparameters."
      },
      {
        "name": "Reproducible experiment",
        "evidence": "Record data splits, seeds, software versions, model shape and learning curves."
      },
      {
        "name": "Comparison and safety",
        "evidence": "Compare a baseline or controlled ablation and report overfitting, failed runs and deployment risks."
      }
    ]
  },
  "Specializations": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Defined applied problem",
        "evidence": "Describe the chosen computer vision, robotics, NLP or reinforcement-learning task and constraints."
      },
      {
        "name": "Working prototype",
        "evidence": "Create an appropriately scoped simulation or experiment with measurable outputs."
      },
      {
        "name": "Safety and robustness",
        "evidence": "Evaluate relevant distribution shifts, failure cases and physical or social harms in the chosen application."
      }
    ]
  },
  "Generative AI and agents": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Grounded architecture",
        "evidence": "Document prompts, retrieval or tool interfaces, sources, and trust boundaries."
      },
      {
        "name": "Measurable evaluation",
        "evidence": "Test supported tasks and missing-evidence or incorrect-answer cases; keep an evaluation record."
      },
      {
        "name": "Security and limitations",
        "evidence": "Test prompt-injection boundaries, remove unneeded permissions, and disclose uncertainty and unsupported claims."
      }
    ]
  },
  "AI engineering": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Deployable artifact",
        "evidence": "Provide an executable local or cloud prototype with configuration and release instructions."
      },
      {
        "name": "Operational checks",
        "evidence": "Include automated tests, structured logs, safe failure handling and monitoring for latency and error rates."
      },
      {
        "name": "Privacy and cost",
        "evidence": "Explain data storage, secret handling, access boundaries, resource requirements and expected operating costs."
      }
    ]
  },
  "Research and mastery": {
    "intro": "Review your artifact against each criterion before sharing it. These are self-checks, not a credential or external grade.",
    "criteria": [
      {
        "name": "Explicit research question",
        "evidence": "State a hypothesis, dataset or benchmark, assumptions and a falsifiable metric."
      },
      {
        "name": "Credible experiment",
        "evidence": "Reproduce a baseline, document protocol, rerun with variation estimates, and perform at least one controlled ablation."
      },
      {
        "name": "Responsible reporting",
        "evidence": "Present both positive and negative findings, reproducibility details, limitations, citations and next steps."
      }
    ]
  }
};
