// Original deep-learning course studios with worked calculations and practical safeguards.
export const neuralExpansion={
  "Deep learning:Activation functions": {
    "objective": "Compare activation functions and calculate simple neuron outputs.",
    "vocabulary": [
      [
        "activation function",
        "A transformation applied after a weighted sum."
      ],
      [
        "ReLU",
        "The function max(0,z)."
      ],
      [
        "sigmoid",
        "A function mapping scores into (0,1)."
      ]
    ],
    "explanation": "Without nonlinear activations, stacking linear layers remains equivalent to one linear transformation, limiting the patterns a network can represent. ReLU outputs zero for negative scores and leaves positive scores unchanged. Sigmoid converts scores into values between zero and one. ReLU is common in hidden layers; sigmoid can be useful for a binary output but may saturate, producing small gradients for extreme scores. The best choice depends on the task and architecture.",
    "worked": [
      [
        "Apply ReLU",
        "For scores [-2,0,3], ReLU produces [0,0,3]."
      ],
      [
        "Evaluate sigmoid at zero",
        "sigmoid(0) = 1/(1+e^0) = 1/2 = 0.5."
      ]
    ],
    "exercises": [
      [
        "What is ReLU(-7)?",
        "0."
      ],
      [
        "What is ReLU(4)?",
        "4."
      ],
      [
        "Why add nonlinear activations between layers?",
        "To represent relationships more complex than a single linear mapping."
      ]
    ],
    "misconception": "Not every activation returns a probability: ReLU can output any positive number.",
    "challenge": "Sketch ReLU and sigmoid, then compare where their derivatives become small."
  },
  "Deep learning:Loss functions": {
    "objective": "Compute prediction loss and choose an appropriate training objective.",
    "vocabulary": [
      [
        "loss",
        "A numeric objective indicating prediction error."
      ],
      [
        "mean squared error",
        "Average squared difference between predictions and targets."
      ],
      [
        "cross-entropy",
        "A loss commonly used for probabilistic classification."
      ]
    ],
    "explanation": "A neural network learns by reducing a numerical loss. For a regression task, mean squared error (MSE) averages squared prediction errors. For classification with probability predictions, cross-entropy penalizes assigning low probability to the correct label. Loss selection depends on the target type, label representation and assumptions. A low training loss alone is not evidence of good performance on unseen data; evaluate held-out results and relevant real-world metrics.",
    "worked": [
      [
        "One regression example",
        "Target 4 and prediction 2 give squared error (4−2)²=4."
      ],
      [
        "Average two squared errors",
        "If errors are 2 and -1, MSE=(2²+(-1)²)/2=2.5."
      ]
    ],
    "exercises": [
      [
        "What is squared error for target 5 and prediction 3?",
        "4."
      ],
      [
        "Does zero training loss guarantee generalization?",
        "No; a model can memorize training examples."
      ],
      [
        "Which loss is commonly used for probabilistic multi-class classification?",
        "Cross-entropy."
      ]
    ],
    "misconception": "Loss is a training objective, not necessarily the metric a real user cares about most.",
    "challenge": "Compare MAE and MSE for predictions [1,2,8] against targets [1,3,4] and discuss which penalizes outliers more."
  },
  "Deep learning:Forward propagation": {
    "objective": "Trace inputs through weighted operations and activations to a prediction.",
    "vocabulary": [
      [
        "forward pass",
        "Computing outputs from given inputs and parameters."
      ],
      [
        "hidden layer",
        "An intermediate learned transformation."
      ],
      [
        "logit",
        "A model score before probability conversion."
      ]
    ],
    "explanation": "Forward propagation means computing a network's output from its current weights. Start with input features, apply a matrix of weights and biases, pass the result through an activation, then continue through later layers. For a single neuron, z=wx+b and output=ReLU(z). A forward pass uses parameters as they are; learning happens separately when gradients and an optimizer update those parameters.",
    "worked": [
      [
        "One neuron",
        "Input x=2, weight w=3, bias b=-1 gives z=5 and ReLU(z)=5."
      ],
      [
        "Two-layer toy",
        "First layer computes h=ReLU(2×2−3)=1. Second layer computes y=4×h+1=5."
      ]
    ],
    "exercises": [
      [
        "What is z for x=4, w=2, b=-3?",
        "5."
      ],
      [
        "Does a forward pass alone update model parameters?",
        "No; training requires gradients and an optimizer step."
      ],
      [
        "What happens when ReLU receives a score of -2?",
        "It outputs zero."
      ]
    ],
    "misconception": "Forward propagation and backpropagation serve different purposes: one produces outputs, the other calculates gradients.",
    "challenge": "Draw a two-layer network and show every intermediate score for one numeric input."
  },
  "Deep learning:Optimizers": {
    "objective": "Explain how SGD and momentum-style methods update weights.",
    "vocabulary": [
      [
        "optimizer",
        "An algorithm that updates model parameters."
      ],
      [
        "SGD",
        "Stochastic gradient descent using a sample or mini-batch estimate."
      ],
      [
        "momentum",
        "A running history of update directions."
      ],
      [
        "learning rate",
        "A scale controlling update size."
      ]
    ],
    "explanation": "After backpropagation calculates gradients, an optimizer updates parameters. Basic stochastic gradient descent subtracts learning rate times an estimated gradient. Momentum combines current and recent gradients to reduce zigzagging in some conditions. Adam adapts update scales using estimates of gradient first and second moments. No optimizer guarantees the best result for every task; learning rate, data scale, batch size and validation behavior matter.",
    "worked": [
      [
        "SGD update",
        "Weight=3, gradient=2, learning rate=0.1 gives new weight 3−0.2=2.8."
      ],
      [
        "Compare rates",
        "With gradient=2, rate 0.5 changes weight by 1 while rate 0.01 changes it by 0.02."
      ]
    ],
    "exercises": [
      [
        "What does an optimizer need for a gradient-based update?",
        "Parameter gradients and its update rules."
      ],
      [
        "Which hyperparameter controls basic SGD step size?",
        "Learning rate."
      ],
      [
        "Does Adam guarantee the best model on every dataset?",
        "No; choice and tuning depend on the problem."
      ]
    ],
    "misconception": "An optimizer is not the same as the loss function: one specifies how to update, the other measures an objective.",
    "challenge": "Perform four SGD updates by hand on loss L(w)=(w−1)², starting at w=3 and rate=0.1."
  },
  "Deep learning:Regularization": {
    "objective": "Explain techniques that discourage overfitting and compare their effects.",
    "vocabulary": [
      [
        "overfitting",
        "Learning patterns that do not generalize well."
      ],
      [
        "L2 penalty",
        "A loss term proportional to squared weight magnitudes."
      ],
      [
        "dropout",
        "Randomly zeroing selected activations during training."
      ]
    ],
    "explanation": "A model with too much flexibility can fit training data and perform worse on unseen examples. Regularization aims to improve generalization. L2 regularization adds a penalty for large weights. Dropout randomly removes selected activations during training, but is disabled or adjusted during evaluation. Data augmentation and early stopping can also help. Always compare validation results; a stronger penalty is not automatically better.",
    "worked": [
      [
        "Add an L2 penalty",
        "If task loss=2 and λ=0.1 and sum of squared weights=5, combined loss=2+0.1×5=2.5."
      ],
      [
        "Remember dropout modes",
        "In PyTorch, model.train() enables dropout behavior; model.eval() disables random dropout."
      ]
    ],
    "exercises": [
      [
        "Does dropout usually behave the same in training and evaluation?",
        "No; training applies randomized dropout and evaluation does not."
      ],
      [
        "Can excessive regularization underfit?",
        "Yes; it can restrict learning too strongly."
      ],
      [
        "Which dataset should help choose regularization settings?",
        "Validation data, not the final test set."
      ]
    ],
    "misconception": "Higher training accuracy is not always the desired outcome if performance on new examples declines.",
    "challenge": "Sketch training and validation loss curves illustrating both underfitting and overfitting."
  },
  "Deep learning:Normalization": {
    "objective": "Recognize how normalization affects network training and evaluation.",
    "vocabulary": [
      [
        "normalization",
        "Rescaling or centering numeric values."
      ],
      [
        "batch normalization",
        "A layer using batch statistics during training."
      ],
      [
        "layer normalization",
        "A layer normalizing features within an example."
      ]
    ],
    "explanation": "Normalization can make numerical optimization easier by controlling scales. Input standardization may subtract a training-set mean and divide by a training-set standard deviation. Batch normalization uses mini-batch statistics during training and typically running statistics at evaluation, while layer normalization uses feature statistics within each example. Their behavior and suitability depend on architecture, batch size and task. Never calculate preprocessing parameters using held-out test data.",
    "worked": [
      [
        "Standardize a value",
        "If training mean=10 and standard deviation=2, then x=14 standardizes to (14−10)/2=2."
      ],
      [
        "Avoid leakage",
        "Fit input statistics on training observations and reuse them unchanged on validation and test observations."
      ]
    ],
    "exercises": [
      [
        "What is (9−5)/2?",
        "2."
      ],
      [
        "Should test labels influence training normalization?",
        "No."
      ],
      [
        "Do batch and layer normalization use identical statistics?",
        "No, they normalize over different dimensions and have different behavior."
      ]
    ],
    "misconception": "Normalization is not a universal cure for unstable training; check learning rate, data quality and numeric precision too.",
    "challenge": "Explain how standardizing by a tiny standard deviation can cause numerical problems and propose a safe check."
  },
  "Deep learning:Training loops": {
    "objective": "Describe a correct train-validate cycle with gradients and checkpoints.",
    "vocabulary": [
      [
        "epoch",
        "One pass through the training dataset."
      ],
      [
        "batch",
        "A subset used for one training update."
      ],
      [
        "optimizer step",
        "Applying calculated gradients to parameters."
      ]
    ],
    "explanation": "A typical PyTorch training loop sets the model to training mode, iterates over batches, computes predictions and loss, clears old gradients, calls backward() and then optimizer.step(). Validation uses evaluation mode and usually disables gradient recording to save resources. Track training and validation metrics across epochs, use early stopping when appropriate and save enough configuration to reproduce your result. Split data before fitting transformations.",
    "worked": [
      [
        "One training batch",
        "optimizer.zero_grad(); loss=model_loss(batch); loss.backward(); optimizer.step() performs one update."
      ],
      [
        "Evaluate correctly",
        "Call model.eval() and use torch.no_grad() for validation inference; return to model.train() before more training."
      ]
    ],
    "exercises": [
      [
        "What happens before computing new gradients?",
        "Clear or reset previous accumulated gradients as intended."
      ],
      [
        "Does model.eval() by itself disable all gradient recording?",
        "No; torch.no_grad() is a separate context manager."
      ],
      [
        "What is one epoch?",
        "One pass through the training dataset."
      ]
    ],
    "misconception": "Forgetting to reset gradients can unintentionally accumulate them across training batches.",
    "challenge": "Write pseudocode for a three-epoch train-and-validation loop and list three numbers to log."
  },
  "Deep learning:CNNs": {
    "objective": "Explain local filters and feature maps in convolutional neural networks.",
    "vocabulary": [
      [
        "filter",
        "A small learned set of weights applied across positions."
      ],
      [
        "feature map",
        "An output grid of filter responses."
      ],
      [
        "stride",
        "How far a filter moves each step."
      ]
    ],
    "explanation": "Convolutional neural networks apply small shared filters across images or other grid-like data. A filter examines a local neighborhood; its repeated responses create a feature map. Sharing weights reduces parameter count compared with independently connecting every input pixel to every output location. Padding controls borders, and stride affects output size. Modern image models also use attention and other operations; convolution remains a useful building block.",
    "worked": [
      [
        "One-dimensional toy",
        "For input [1,2,3] and kernel [1,-1], valid correlation-style responses are 1−2=-1 and 2−3=-1."
      ],
      [
        "Stride two",
        "A filter with stride 2 visits every second input position, yielding fewer output positions than stride 1."
      ]
    ],
    "exercises": [
      [
        "What is weight sharing in a CNN?",
        "The same filter weights are reused at many positions."
      ],
      [
        "What does increasing stride often do?",
        "Reduces the number of output positions."
      ],
      [
        "Why does padding matter?",
        "It influences how borders are handled and the size of the feature map."
      ]
    ],
    "misconception": "Many deep-learning libraries implement cross-correlation when describing their operation as convolution; kernel flipping conventions should be checked.",
    "challenge": "Trace a length-two filter across a five-value vector with strides 1 and 2 and compare output lengths."
  },
  "Deep learning:Autoencoders": {
    "objective": "Identify encoder, latent representation and decoder in an autoencoder.",
    "vocabulary": [
      [
        "encoder",
        "Maps input into a learned representation."
      ],
      [
        "latent space",
        "An intermediate feature representation."
      ],
      [
        "decoder",
        "Maps latent features back toward an output."
      ]
    ],
    "explanation": "An autoencoder learns to reconstruct inputs through an encoder and decoder. The encoder creates a latent representation, and the decoder tries to reproduce the input. A bottleneck can encourage compact representations, but an autoencoder may also learn to copy inputs without extracting useful features if its architecture and objective allow it. Reconstruction errors can help flag anomalies, but must be calibrated against realistic data and can fail on unusual inputs.",
    "worked": [
      [
        "Compression sketch",
        "An encoder maps 20 input measurements into 5 latent values; a decoder reconstructs 20 values."
      ],
      [
        "Reconstruction loss",
        "If original=3 and reconstructed=2, squared reconstruction error for that value is 1."
      ]
    ],
    "exercises": [
      [
        "What does a decoder do?",
        "Maps a representation back toward a reconstructed output."
      ],
      [
        "Does low reconstruction error prove that a representation is meaningful?",
        "No; the model may memorize or copy details."
      ],
      [
        "What is a bottleneck?",
        "A constrained intermediate representation."
      ]
    ],
    "misconception": "Autoencoders are not automatically reliable anomaly detectors; their errors can be misleading.",
    "challenge": "Draw an encoder-bottleneck-decoder diagram and describe how you would evaluate reconstruction quality."
  },
  "Deep learning:Diffusion": {
    "objective": "Describe noise addition and denoising in generative diffusion models.",
    "vocabulary": [
      [
        "forward noising",
        "Gradually adding noise to data."
      ],
      [
        "denoising model",
        "A network trained to reverse or estimate noise effects."
      ],
      [
        "sampling",
        "Generating an output through a sequence of steps."
      ]
    ],
    "explanation": "Diffusion generative models learn to produce data by reversing a gradual noising process. During training, an example can be perturbed with a known amount of noise, and a neural network learns to estimate the added noise or an equivalent prediction target. During sampling, the model starts from noise and repeatedly applies learned denoising steps. The exact sampling algorithm and model architecture vary; training and generation should be evaluated for quality, diversity, memorization and misuse risks.",
    "worked": [
      [
        "Forward-noise idea",
        "Start with a clear image, add a small amount of Gaussian noise, and repeat to make the image less recognizable."
      ],
      [
        "Reverse-sampling idea",
        "Start from random noise and iteratively predict a cleaner sample under the model's learned parameters."
      ]
    ],
    "exercises": [
      [
        "What is the basic direction of the forward diffusion process?",
        "It adds noise."
      ],
      [
        "What does a denoising model learn?",
        "To estimate noise or a related target useful for reversing corruption."
      ],
      [
        "Does every diffusion system use exactly the same sampler?",
        "No; schedulers and prediction targets differ."
      ]
    ],
    "misconception": "Diffusion models do not generate by literally retrieving and cleaning a particular stored training image.",
    "challenge": "Sketch a four-step noise schedule and explain two ways to evaluate generated outputs responsibly."
  }
};
