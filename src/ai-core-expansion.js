// Original AI, mathematics and engineering concept studios.
export const aiCoreExpansion={
  "Mathematics for ML:Probability": {
    "objective": "Calculate simple event probabilities and interpret uncertainty.",
    "vocabulary": [
      [
        "outcome",
        "One possible result of an experiment."
      ],
      [
        "event",
        "A set of outcomes of interest."
      ],
      [
        "probability",
        "A number between zero and one expressing chance."
      ]
    ],
    "explanation": "Probability helps describe uncertainty. When outcomes are equally likely, probability of an event equals the number of favorable outcomes divided by the total possible outcomes. A fair six-sided die has six equally likely faces, so the probability of rolling an even number is 3/6=1/2. In real problems, outcomes are not always equally likely; models use estimated distributions and assumptions. Probabilities do not guarantee what will happen on one trial.",
    "worked": [
      [
        "Coin toss",
        "A fair coin has two equally likely outcomes. P(heads)=1/2=0.5."
      ],
      [
        "Two dice faces",
        "A fair die has three even faces: 2,4,6. P(even)=3/6=0.5."
      ]
    ],
    "exercises": [
      [
        "What is P(rolling 6) on a fair die?",
        "1/6."
      ],
      [
        "What is P(not heads) for a fair coin?",
        "1/2."
      ],
      [
        "Can a 70% chance guarantee an event occurs?",
        "No. It describes probability, not certainty."
      ]
    ],
    "misconception": "The equally likely outcomes formula is not valid if the outcomes have different probabilities.",
    "challenge": "List all four equally likely outcomes of two fair coin flips, then calculate the chance of exactly one head."
  },
  "Mathematics for ML:Matrices": {
    "objective": "Interpret a matrix as a table of numeric values with a defined shape.",
    "vocabulary": [
      [
        "matrix",
        "A rectangular arrangement of numbers."
      ],
      [
        "row",
        "A horizontal sequence of entries."
      ],
      [
        "column",
        "A vertical sequence of entries."
      ],
      [
        "shape",
        "The numbers of rows and columns."
      ]
    ],
    "explanation": "A matrix arranges numbers in rows and columns. For example, [[1,2,3],[4,5,6]] has two rows and three columns, so its shape is 2×3. A dataset might store one observation per row and one feature per column. Matrix addition combines same-position entries and requires matching shapes. Matrix multiplication is a different operation that combines rows with columns; its dimensions must be compatible.",
    "worked": [
      [
        "Identify dimensions",
        "The matrix [[1,2],[3,4],[5,6]] has 3 rows and 2 columns."
      ],
      [
        "Add matrices",
        "[[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]]."
      ]
    ],
    "exercises": [
      [
        "What is the shape of [[1,2,3],[4,5,6]]?",
        "2×3."
      ],
      [
        "Can a 2×3 and a 3×2 matrix be added directly?",
        "Not as ordinary matrix addition because their shapes differ."
      ],
      [
        "What could a matrix column represent in a dataset?",
        "A feature measured across observations."
      ]
    ],
    "misconception": "Matrix multiplication is not usually component-by-component multiplication; it follows row-and-column rules.",
    "challenge": "Multiply a 2×2 matrix by a two-element vector by hand and explain the resulting dimensions."
  },
  "Mathematics for ML:Chain rule": {
    "objective": "Differentiate a function built from two simpler functions.",
    "vocabulary": [
      [
        "composition",
        "Applying one function to the output of another."
      ],
      [
        "inner function",
        "The function evaluated first."
      ],
      [
        "outer function",
        "The function applied to the inner result."
      ]
    ],
    "explanation": "The chain rule tells us how to differentiate compositions. If y=g(h(x)), then dy/dx=g′(h(x))×h′(x). For y=(2x+1)², the inner function is h(x)=2x+1 and the outer function is g(u)=u². The outer derivative gives 2u; the inner derivative is 2. Together the derivative is 2(2x+1)×2=4(2x+1). Neural network backpropagation repeatedly applies this rule.",
    "worked": [
      [
        "Differentiate a square",
        "For y=(3x)², derivative=2(3x)×3=18x."
      ],
      [
        "Differentiate a shifted square",
        "For y=(x+5)², derivative=2(x+5)×1=2x+10."
      ]
    ],
    "exercises": [
      [
        "What is the derivative of (2x)²?",
        "8x."
      ],
      [
        "What is the inner function in (x+1)³?",
        "x+1."
      ],
      [
        "Why is the chain rule useful for networks?",
        "A network composes many functions, and gradients must pass through each operation."
      ]
    ],
    "misconception": "Differentiating only the outer function and forgetting the inner derivative gives a wrong result.",
    "challenge": "Differentiate (3x−2)³ and check by expanding the polynomial."
  },
  "Data science:Visualization": {
    "objective": "Choose a useful chart and label it to avoid misleading interpretation.",
    "vocabulary": [
      [
        "scatter plot",
        "A graph comparing pairs of numeric values."
      ],
      [
        "histogram",
        "A graph showing frequencies in numeric bins."
      ],
      [
        "axis",
        "A reference line with values or categories."
      ]
    ],
    "explanation": "Data visualization turns numerical patterns into pictures. A scatter plot can show how two numerical measurements vary together. A histogram groups a single numeric variable into bins and shows frequencies. A bar chart compares categories. Every graph should have a descriptive title, clear units and readable axes. Plot ranges, missing values and unequal category counts can mislead; do not confuse association with causation.",
    "worked": [
      [
        "Choose a plot",
        "To compare study hours with quiz score for each learner, choose a scatter plot."
      ],
      [
        "Choose a distribution chart",
        "To count test scores in ranges 0–10, 10–20 and so on, choose a histogram."
      ]
    ],
    "exercises": [
      [
        "Which chart shows pairs of numeric variables?",
        "A scatter plot."
      ],
      [
        "What does a histogram bin represent?",
        "A range of values whose frequency is counted."
      ],
      [
        "Can a line sloping upward prove causation?",
        "No; association alone is not causal evidence."
      ]
    ],
    "misconception": "More elaborate charts do not necessarily communicate better than a clean, accurately labelled simple plot.",
    "challenge": "Draw two different charts from the same five-row dataset and explain which communicates the intended comparison better."
  },
  "Classical ML:KNN": {
    "objective": "Explain prediction by looking at the nearest labeled examples.",
    "vocabulary": [
      [
        "neighbor",
        "A nearby example under a chosen distance metric."
      ],
      [
        "distance",
        "A measure of difference between feature vectors."
      ],
      [
        "k",
        "The number of nearby examples consulted."
      ]
    ],
    "explanation": "K-nearest neighbors (KNN) predicts using the labels of examples close to the new input. For classification, it commonly chooses the majority label among the k nearest examples. The choice of distance and feature scales matters: a large-range feature can dominate Euclidean distance. KNN stores training examples and may become expensive on large datasets. Evaluate k and preprocessing without looking at the final test set.",
    "worked": [
      [
        "Three neighbors",
        "Among the three nearest labeled points, two are cat and one dog, so majority-vote KNN predicts cat."
      ],
      [
        "Feature scaling",
        "If one feature ranges 0–10000 and another 0–1, raw distance may overemphasize the first."
      ]
    ],
    "exercises": [
      [
        "What does k=5 mean?",
        "Use five nearest training examples."
      ],
      [
        "Which step must be fitted without using test data?",
        "Feature scaling and selection."
      ],
      [
        "Does KNN always perform well when there are many noisy features?",
        "No; distances can become less informative."
      ]
    ],
    "misconception": "Nearest in a chosen numeric distance is not always nearest in real-world meaning.",
    "challenge": "Draw six labeled points on a grid and classify a new point with k=1 and k=3."
  },
  "Classical ML:Decision trees": {
    "objective": "Follow a decision tree from root tests to a prediction.",
    "vocabulary": [
      [
        "node",
        "A point where a decision is made."
      ],
      [
        "split",
        "A rule dividing examples into groups."
      ],
      [
        "leaf",
        "A terminal prediction node."
      ]
    ],
    "explanation": "A decision tree asks a sequence of questions about features. For predicting whether to carry an umbrella, a root may ask whether rain is forecast; further tests might check wind or temperature. Training chooses splits to reduce an impurity or error criterion. Deep trees can memorize training data, so pruning and minimum leaf sizes can help. Trees can be interpretable, but a path description is not necessarily a causal explanation.",
    "worked": [
      [
        "Trace a path",
        "If rain=True leads directly to the 'take umbrella' leaf, the prediction is take umbrella."
      ],
      [
        "Control complexity",
        "Limiting maximum depth can reduce overfitting in a small dataset."
      ]
    ],
    "exercises": [
      [
        "What is a leaf?",
        "A terminal node giving a prediction."
      ],
      [
        "Why limit tree depth?",
        "To reduce complexity and possible overfitting."
      ],
      [
        "Are tree splits automatically causal rules?",
        "No. They describe learned prediction patterns."
      ]
    ],
    "misconception": "A tree that classifies all training examples perfectly may generalize poorly to new examples.",
    "challenge": "Draw a three-level tree for deciding whether to study indoors, then test every possible path."
  },
  "Deep learning:Neurons": {
    "objective": "Calculate a weighted sum followed by an activation.",
    "vocabulary": [
      [
        "weight",
        "A learnable value multiplying an input."
      ],
      [
        "bias",
        "An additional learnable offset."
      ],
      [
        "activation",
        "A function applied to a neuron score."
      ]
    ],
    "explanation": "A simple artificial neuron combines input values using weights and adds a bias. For inputs x1 and x2, its score is z=w1x1+w2x2+b. An activation function transforms z. ReLU, for example, outputs max(0,z). Networks stack many operations of this kind and learn weights from data. A neuron is a mathematical building block and should not be treated as an exact biological brain cell.",
    "worked": [
      [
        "Weighted sum",
        "Inputs [2,3], weights [4,1], bias −2: z=2×4+3×1−2=9."
      ],
      [
        "Apply ReLU",
        "For score −3, ReLU returns 0; for score 9, it returns 9."
      ]
    ],
    "exercises": [
      [
        "What does bias do?",
        "Adds a learnable offset to the weighted sum."
      ],
      [
        "What is ReLU(−5)?",
        "0."
      ],
      [
        "With x=3, w=2 and b=1, what is z?",
        "7."
      ]
    ],
    "misconception": "One neuron computes a limited transformation; complex behavior usually depends on many layers and training.",
    "challenge": "Calculate three simple neurons with different weights and sketch how each transforms the same two inputs."
  },
  "Deep learning:PyTorch tensors": {
    "objective": "Understand tensor dimensions, types and automatic differentiation basics.",
    "vocabulary": [
      [
        "tensor",
        "A multi-dimensional array with a data type."
      ],
      [
        "shape",
        "The size of each tensor axis."
      ],
      [
        "autograd",
        "PyTorch's automatic differentiation system."
      ]
    ],
    "explanation": "PyTorch tensors hold numeric data for machine-learning computations. A vector may have shape (3,), while a batch of four vectors of length three has shape (4,3). Arithmetic operations can run on CPU or supported accelerators. With requires_grad=True, PyTorch can record differentiable operations and compute gradients during backward(). Tensor shapes, dtypes and devices need to be compatible. Gradients are not always available for every operation or type.",
    "worked": [
      [
        "Tensor shape",
        "torch.tensor([[1.,2.],[3.,4.]]) has shape (2,2) and floating-point entries."
      ],
      [
        "Differentiate a square",
        "For x=torch.tensor(3.,requires_grad=True), y=x*x; y.backward() makes x.grad equal 6."
      ]
    ],
    "exercises": [
      [
        "What shape has five vectors each containing three numbers?",
        "(5,3)."
      ],
      [
        "What does backward() calculate?",
        "Gradients for a recorded computation graph."
      ],
      [
        "Why does tensor shape matter?",
        "Incompatible dimensions can cause errors or unintended broadcasting."
      ]
    ],
    "misconception": "Calling backward does not itself change a model's weights; the optimizer step applies parameter updates.",
    "challenge": "Build two small tensors, inspect their shapes, multiply them safely and explain one shape mismatch."
  },
  "Specializations:NLP": {
    "objective": "Identify tokenization, sequence tasks and evaluation in natural language processing.",
    "vocabulary": [
      [
        "token",
        "A text unit such as a word part."
      ],
      [
        "corpus",
        "A collection of text documents."
      ],
      [
        "sequence labeling",
        "Assigning a label to each token or position."
      ]
    ],
    "explanation": "Natural language processing (NLP) studies computational methods for text and speech. Tasks include classification, translation, summarization, question answering and named-entity recognition. Text must be represented numerically, often through tokenization and embeddings. A token can be a full word, word part or punctuation depending on the tokenizer. Models should be evaluated across language varieties, writing styles and populations, with privacy and consent respected.",
    "worked": [
      [
        "Text classification",
        "Input: 'The package arrived early.' Output: a positive customer-service sentiment label in a simple toy task."
      ],
      [
        "Named entities",
        "In 'Aisha visited Dammam', a model might label Aisha as a person and Dammam as a location."
      ]
    ],
    "exercises": [
      [
        "What is a token?",
        "A unit chosen by the tokenizer, often a word part."
      ],
      [
        "Which task assigns labels to spans or words?",
        "Named-entity recognition or sequence labeling."
      ],
      [
        "Are all language varieties guaranteed equal quality?",
        "No; differences in training data can affect model performance."
      ]
    ],
    "misconception": "A model accurately predicting word patterns does not guarantee that it understands factual meaning or intent.",
    "challenge": "Label person, organization and location spans in five short original sentences and list ambiguous cases."
  },
  "Generative AI and agents:Agents": {
    "objective": "Explain a bounded AI agent loop and the role of tool permissions.",
    "vocabulary": [
      [
        "agent",
        "A system that selects actions toward an objective."
      ],
      [
        "tool",
        "An external capability used to read or change data."
      ],
      [
        "observation",
        "Feedback returned after an action."
      ]
    ],
    "explanation": "An AI agent may repeatedly observe a task state, plan a next step, call an available tool and inspect the result. A safe agent does not assume every tool output is correct or authorized. It should use least-privilege tool permissions, validate inputs, keep a record of significant actions and stop or ask for review when consequences are high. A language model's suggestion is not itself confirmation that a tool operation succeeded.",
    "worked": [
      [
        "Research agent",
        "The agent searches a permitted knowledge base, summarizes relevant passages and cites evidence."
      ],
      [
        "Guard a write action",
        "Before deleting a document, the agent checks its authorization, target and whether approval is required."
      ]
    ],
    "exercises": [
      [
        "What is an observation in an agent loop?",
        "Information returned after an action or tool call."
      ],
      [
        "Why restrict tool permissions?",
        "To limit errors and prevent unnecessary or unsafe actions."
      ],
      [
        "Does a model's confident message prove a tool action completed?",
        "No. Verify the tool result."
      ]
    ],
    "misconception": "Autonomy is not the same as unlimited authority; tool permissions and safety boundaries still apply.",
    "challenge": "Draw a three-step agent loop for sorting study notes, including one failed-tool recovery path."
  },
  "AI engineering:Docker": {
    "objective": "Explain why software containers can improve deployment consistency.",
    "vocabulary": [
      [
        "image",
        "A packaged template for a container."
      ],
      [
        "container",
        "A running isolated process environment based on an image."
      ],
      [
        "Dockerfile",
        "Instructions for building an image."
      ]
    ],
    "explanation": "A container packages an application with dependencies so it behaves more consistently across environments. A Docker image is a reusable template; a running container is an instance created from it. A Dockerfile records build steps. Containers share parts of the host operating system and are not a universal security boundary. For reliable deployments, pin base images when appropriate, limit privileges, avoid hardcoding secrets and test the application outside your laptop.",
    "worked": [
      [
        "Image versus container",
        "Build an image for a small Python web app, then run one container from it."
      ],
      [
        "Persist user files",
        "Store important data in a deliberate volume or external service rather than assuming container-local changes will survive recreation."
      ]
    ],
    "exercises": [
      [
        "Is an image the same as a running container?",
        "No, an image is a template."
      ],
      [
        "Should a Dockerfile include private API keys?",
        "No, use secure configuration or secret management."
      ],
      [
        "Do containers automatically provide complete isolation?",
        "No. They use host kernel features and need secure configuration."
      ]
    ],
    "misconception": "A Docker image does not remove the need for testing, monitoring, patching or correct dependency management.",
    "challenge": "Sketch a minimal Dockerfile and explain how to run a simple web app with a health check."
  }
};
