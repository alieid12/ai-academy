// Original advanced subject learning studios.
export const advancedStudios = {
  "Classical ML:Logistic regression": {
    "objective": "Convert a linear score into a binary-class probability.",
    "vocabulary": [
      [
        "sigmoid",
        "Function mapping real numbers to (0,1)."
      ],
      [
        "logit",
        "A score before probability conversion."
      ],
      [
        "threshold",
        "Cutoff used to choose a class label."
      ]
    ],
    "explanation": "Logistic regression is a classification model despite its name. It calculates z=w·x+b, then uses sigmoid(z)=1/(1+e^(−z)). This converts the numeric score into a value between zero and one. A threshold such as 0.5 makes a predicted label, but it may need adjustment to account for the costs of false positives and false negatives.",
    "worked": [
      [
        "Score zero",
        "When z=0, sigmoid(0)=1/(1+1)=0.5."
      ],
      [
        "Threshold decision",
        "Probability 0.8 is classified positive at threshold 0.5."
      ]
    ],
    "exercises": [
      [
        "What is sigmoid(0)?",
        "0.5."
      ],
      [
        "Does logistic regression usually predict a continuous unbounded response?",
        "No; sigmoid maps scores into a probability interval."
      ],
      [
        "Can changing the threshold change recall?",
        "Yes, different items may become positive predictions."
      ]
    ],
    "misconception": "A predicted probability is not a guarantee of an outcome; calibration needs evaluation.",
    "challenge": "Sketch the sigmoid curve and explain its behavior for very large positive and negative scores."
  },
  "Classical ML:Cross-validation": {
    "objective": "Plan an evaluation that rotates held-out validation folds.",
    "vocabulary": [
      [
        "fold",
        "A partition of a dataset."
      ],
      [
        "validation",
        "Evaluation used during model selection."
      ],
      [
        "data leakage",
        "Improper flow of evaluation information into fitting."
      ]
    ],
    "explanation": "One validation split can give an unusually optimistic or pessimistic score. In k-fold cross-validation, divide development data into k groups. Train on k−1 groups and validate on the remaining group, repeating until each group has been held out once. Fit preprocessing independently within each training fold, and use group-aware or time-aware folds when the data require them.",
    "worked": [
      [
        "Five folds",
        "One hundred examples can be divided into five groups of twenty; each group becomes validation once."
      ],
      [
        "Average results",
        "Three scores 0.7, 0.8 and 0.9 have an average of 0.8."
      ]
    ],
    "exercises": [
      [
        "How many fitting rounds in 5-fold cross-validation?",
        "Five."
      ],
      [
        "Can a scaler be fit on all data before folds?",
        "No; that can leak validation information."
      ],
      [
        "Should time-series folds randomly mix future and past?",
        "Usually not; preserve the intended time order."
      ]
    ],
    "misconception": "Cross-validation does not automatically remove all leakage or eliminate the need for a final held-out test.",
    "challenge": "Design grouped folds when the same patient has multiple records."
  },
  "Deep learning:Attention": {
    "objective": "Calculate weighted values and describe queries, keys and masking.",
    "vocabulary": [
      [
        "query",
        "Representation of information a position seeks."
      ],
      [
        "key",
        "Representation used to score relevance."
      ],
      [
        "value",
        "Information that attention combines."
      ]
    ],
    "explanation": "Attention allows a token to combine information from other positions. Queries and keys produce compatibility scores; softmax converts them into nonnegative weights summing to one. The output is a weighted sum of value vectors. In scaled dot-product attention, scores are divided by the square root of key dimension before softmax. A causal mask prevents a prediction position from attending to future tokens.",
    "worked": [
      [
        "Weighted result",
        "Values 10 and 20 with weights 0.25 and 0.75 give 17.5."
      ],
      [
        "Causal mask",
        "When predicting token three, mask token four before computing attention weights."
      ]
    ],
    "exercises": [
      [
        "What do attention weights sum to?",
        "Approximately one."
      ],
      [
        "What gets compared with keys?",
        "A query."
      ],
      [
        "Why mask future positions?",
        "To prevent leaking future information during autoregressive prediction."
      ]
    ],
    "misconception": "Attention weights are not necessarily trustworthy explanations of model decisions.",
    "challenge": "Calculate a weighted sum of three values using weights 0.2, 0.3 and 0.5."
  },
  "Specializations:Computer vision": {
    "objective": "Distinguish classification, object detection and segmentation.",
    "vocabulary": [
      [
        "pixel",
        "A small image element."
      ],
      [
        "detection",
        "Locating objects, usually with bounding boxes."
      ],
      [
        "segmentation",
        "Assigning labels to pixels or regions."
      ]
    ],
    "explanation": "A digital image is commonly represented by a grid of pixel values. Image classification predicts a label for the picture. Object detection identifies objects and locations; segmentation assigns labels to individual pixels or regions. Useful vision models must be tested across lighting conditions, camera types, occlusion and representative populations, not only on familiar training images.",
    "worked": [
      [
        "Classify",
        "A model answers whether an image shows a bicycle."
      ],
      [
        "Detect or segment",
        "A detector draws a box around each bicycle, while a segmenter identifies bicycle pixels."
      ]
    ],
    "exercises": [
      [
        "Which task uses bounding boxes?",
        "Object detection."
      ],
      [
        "Which task labels individual pixels?",
        "Segmentation."
      ],
      [
        "Why vary lighting during evaluation?",
        "Model behavior can change when visual conditions change."
      ]
    ],
    "misconception": "A high score on a benchmark does not automatically prove reliability in new physical environments.",
    "challenge": "Design a ten-image test plan comparing two very different lighting conditions."
  },
  "Generative AI and agents:Embeddings": {
    "objective": "Explain semantic similarity using vector representations.",
    "vocabulary": [
      [
        "embedding",
        "A learned numerical representation."
      ],
      [
        "cosine similarity",
        "Angle-based measure of vector similarity."
      ],
      [
        "retrieval",
        "Finding relevant material from stored data."
      ]
    ],
    "explanation": "An embedding model maps text or other inputs to vectors. A semantic search system can embed a question and document passages, then rank passages using vector similarity. Cosine similarity compares vector directions rather than raw magnitudes. These scores are approximations of relatedness, not guarantees that a passage answers a question or contains a correct claim.",
    "worked": [
      [
        "Same direction",
        "Vectors [1,0] and [2,0] have cosine similarity 1."
      ],
      [
        "Different directions",
        "Vectors [1,0] and [0,1] have cosine similarity 0."
      ]
    ],
    "exercises": [
      [
        "What does an embedding model output?",
        "A vector."
      ],
      [
        "Is a high similarity score proof of truth?",
        "No."
      ],
      [
        "Why preserve the original passage reference?",
        "So a human can verify the evidence."
      ]
    ],
    "misconception": "An embedding is not a lossless copy of all document facts.",
    "challenge": "Compare keyword-based and embedding-based search when a query contains synonyms."
  },
  "Research and mastery:Ablation studies": {
    "objective": "Isolate the contribution of one component in an AI experiment.",
    "vocabulary": [
      [
        "ablation",
        "Removing or changing a component for comparison."
      ],
      [
        "baseline",
        "A reference system used for comparison."
      ],
      [
        "confounder",
        "An uncontrolled factor that complicates interpretation."
      ]
    ],
    "explanation": "Ablation studies ask what a component actually contributes. Compare a complete system with a version that omits one feature while keeping other conditions as similar as possible. Repeat experiments when training varies with random seeds, and report uncertainty rather than only the best run. Changing multiple components at once makes the reason for a performance gap harder to identify.",
    "worked": [
      [
        "Remove augmentation",
        "Full model accuracy is 78%; without augmentation it is 73%, a difference of five percentage points in this setup."
      ],
      [
        "Control conditions",
        "Keep the dataset split and evaluation metric fixed while changing one component."
      ]
    ],
    "exercises": [
      [
        "What is an ablation?",
        "A controlled modification or removal of a component."
      ],
      [
        "Why keep the test split fixed?",
        "Otherwise different examples could explain score changes."
      ],
      [
        "Does one measured gap prove a universal benefit?",
        "No; results may vary across runs and datasets."
      ]
    ],
    "misconception": "An ablation changing several settings simultaneously cannot cleanly attribute an improvement to one of them.",
    "challenge": "Plan an ablation matrix for a system with three optional components."
  }
};
