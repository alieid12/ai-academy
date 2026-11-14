export const phases = [
 {name:"Foundations",levels:[
 ["English literacy","Phonics and sounds","Reading words","Reading instructions","Sentence writing","Technical vocabulary","Comprehension","Communication"],
 ["Numeracy","Counting and place value","Addition","Subtraction","Multiplication","Division","Fractions","Decimals","Percentages","Ratios","Negative numbers","Measurement","Coordinates"],
 ["Computer literacy","Hardware and software","Keyboard and mouse","Files and folders","Internet basics","Digital safety","Logic","Algorithms","Development setup"]]},
 {name:"Programming",levels:[
 ["Python","Syntax and printing","Numbers and strings","Variables","Input and output","Conditions","Loops","Lists","Dictionaries","Functions","Text processing","Debugging","Files and JSON","Modules","Classes","Testing","Git","APIs","NumPy"],
 ["Algebra","Expressions","Equations","Inequalities","Functions","Graphs","Linear relationships","Quadratics","Exponentials","Logarithms","Geometry","Trigonometry"],
 ["Computer science","Data structures","Search","Sorting","Recursion","Complexity","Trees","Graphs","Dynamic programming","Software architecture","SQL","Networking"]]},
 {name:"Machine learning",levels:[
 ["Mathematics for ML","Statistics","Probability","Distributions","Statistical inference","Vectors","Matrices","Dot products","Matrix multiplication","Eigenvectors","SVD","Limits","Derivatives","Chain rule","Partial derivatives","Gradients","Integrals","Optimization","Information theory","Numerical stability"],
 ["Data science","Data collection","Data formats","Data cleaning","Exploration","Visualization","Missing values","Outliers","Feature engineering","Data leakage","SQL analytics","Data pipelines"],
 ["Classical ML","ML fundamentals","Train and test splits","Linear regression","Logistic regression","KNN","Naive Bayes","Decision trees","Random forests","Gradient boosting","SVM","K-means","DBSCAN","PCA","Cross-validation","Evaluation metrics","Regularization","Hyperparameter tuning","Error analysis"]]},
 {name:"Modern AI",levels:[
 ["Deep learning","Neurons","Activation functions","Layers","Loss functions","Forward propagation","Backpropagation","Gradient descent","Optimizers","Regularization","Normalization","Initialization","PyTorch tensors","Training loops","CNNs","RNNs","LSTMs","Attention","Transformers","Autoencoders","Diffusion"],
 ["Specializations","Computer vision","Object detection","Segmentation","NLP","Tokenization","Speech AI","Audio processing","Reinforcement learning","Q-learning","Policy gradients","Robotics","SLAM","Graph neural networks","Recommenders","Time series","Causal inference","Multimodal AI"],
 ["Generative AI and agents","Embeddings","Self-attention","Transformer blocks","Language modeling","Pretraining","Instruction tuning","LoRA","Quantization","Preference optimization","Prompting","Structured output","RAG","Vector search","Reranking","Tool calling","Agents","Evaluation","Prompt injection","Safety"]]},
 {name:"Professional mastery",levels:[
 ["AI engineering","FastAPI","Docker","Cloud deployment","Model serving","Experiment tracking","Versioning","CI/CD","Monitoring","Data drift","Logging","Security","Inference optimization","Distributed systems","Cost management","Governance"],
 ["Research and mastery","Statistical learning theory","Advanced optimization","Representation learning","Distributed training","Scaling laws","Reading papers","Literature reviews","Reproducibility","Ablation studies","Scientific writing","Paper reproduction","Original capstone"]]}
];
export const lessons = {
 "English literacy:Reading words":{title:"Reading everyday instructions",intro:"A written instruction tells you what action to take. Read one word at a time. You can listen to the explanation too.",steps:["Read the word OPEN. It means to make something available to use.","Read SAVE. It means to keep your work for later.","Read CLOSE. It means to stop showing something on the screen."],question:"Which word means keep your work for later?",choices:["Close","Save","Open"],answer:1,task:"Write a sentence using the word SAVE."},
 "Numeracy:Addition":{title:"Combining quantities",intro:"Addition means putting quantities together. The symbol + means add.",steps:["Imagine three apples on a table.","Put two more apples on the table.","Count all the apples: 3 + 2 = 5."],question:"What is 4 + 3?",choices:["6","7","8"],answer:1,task:"Find two groups of objects at home. Count each group, then count them together."},
 "Computer literacy:Hardware and software":{title:"What is a computer?",intro:"A computer follows instructions. You give it input, it processes the information, and it shows output.",steps:["A keyboard is hardware: you can touch it.","An app is software: it tells the computer what to do.","Typing a message is input. Seeing it on the screen is output."],question:"Which is software?",choices:["Keyboard","Screen","Text editor app"],answer:2,task:"Open a text editor, type one sentence, and save the file."},
 "Python:Syntax and printing":{title:"Your first Python program",intro:"Python is a language for giving instructions to computers. The print command displays a message.",steps:["Write: print('Hello!')","Run the program.","Change Hello! to your own message and run it again."],code:"print('Hello!')",question:"What does print() do?",choices:["Displays a message","Deletes a file","Turns off the computer"],answer:0,task:"Write two print commands with different messages."},
 "Algebra:Expressions":{title:"What is a variable?",intro:"A variable is a name used to represent a value. In mathematics, x can stand for a number.",steps:["Start with x = 5.","The expression x + 2 means add two to x.","Since x is five, x + 2 equals seven."],question:"If x = 4, what is x + 3?",choices:["6","7","8"],answer:1,task:"Write an equation using a letter to represent a number."}
};

/**
 * Curriculum-wide introductory lessons. The five hand-authored lessons above
 * remain unchanged. These are structured entry lessons, not full courses.
 */
const foundations = {
"English literacy":"Read the term aloud, explain it in your own words, then write one short example sentence.",
"Numeracy":"Use small groups of real objects or numbers to demonstrate the idea. Write each calculation step.",
"Computer literacy":"Find a safe example on your device, identify what it does, and explain the steps to another learner.",
"Python":"Write a tiny Python example, run it, change one input, and describe the changed output.",
"Algebra":"Start with a simple numeric example, write the relationship with symbols, and check the result.",
"Computer science":"Draw a small input-process-output diagram, then trace one example by hand.",
"Mathematics for ML":"Define the quantities and units, work through a small numerical example, and interpret the result.",
"Data science":"Use a tiny example dataset, identify the inputs, and explain what the output means.",
"Classical ML":"Describe the training data, prediction target, evaluation method, and one possible failure.",
"Deep learning":"Sketch the inputs, layers or operations, outputs, and how learning would change the result.",
"Specializations":"Identify a real application, its inputs and outputs, and a practical limitation or risk.",
"Generative AI and agents":"Describe the prompt or input, model operation, output, and how to check reliability.",
"AI engineering":"Sketch the system components, test one small part, and identify an operational risk.",
"Research and mastery":"Formulate a testable question, propose a baseline, and specify what evidence would support the claim."
};
const explain = {
"Phonics and sounds":"Letters and letter combinations represent speech sounds. Blending sounds helps decode unfamiliar words.",
"Reading instructions":"Instructions describe actions in a sequence; words such as first, next and finally indicate order.",
"Counting and place value":"A digit's value depends on its position: in 42, the 4 means four tens.",
"Subtraction":"Subtraction finds what remains or the difference between two quantities.",
"Multiplication":"Multiplication combines equal groups; 3 × 4 is three groups of four.",
"Division":"Division splits a quantity into equal groups or finds how many groups fit.",
"Fractions":"A fraction describes parts of a whole, such as 1/2 for one of two equal parts.",
"Decimals":"Decimal places represent tenths, hundredths and smaller parts of one.",
"Percentages":"Percent means per hundred; 25% means 25 out of 100.",
"Ratios":"A ratio compares quantities, such as 2:3 for two parts to three parts.",
"Negative numbers":"Negative values are less than zero and can represent debt or temperatures below zero.",
"Coordinates":"Coordinates locate points using ordered positions such as (x, y).",
"Variables":"Variables store values in programs or represent unknown quantities in mathematics.",
"Conditions":"A condition chooses between actions based on whether a test is true.",
"Loops":"A loop repeats instructions while a condition holds or over a sequence.",
"Lists":"A list stores an ordered collection of items.",
"Dictionaries":"A dictionary stores values associated with keys.",
"Functions":"A function groups reusable instructions and may accept inputs and return outputs.",
"Debugging":"Debugging means finding the cause of incorrect behavior and testing a correction.",
"Git":"Git records versions of files and supports collaborative change tracking.",
"APIs":"An API defines how software components request and exchange information.",
"Equations":"An equation states that two expressions have equal values.",
"Functions":"A function maps each allowed input to one output.",
"Graphs":"Graphs represent relationships using points and connections or plotted coordinates.",
"Search":"Searching finds an item in a collection using a chosen strategy.",
"Sorting":"Sorting arranges items according to an order.",
"Recursion":"Recursion solves a problem by calling the same procedure on smaller cases.",
"Complexity":"Algorithmic complexity describes how resource use grows with input size.",
"Probability":"Probability describes how likely an event is, from 0 to 1.",
"Statistics":"Statistics summarizes and reasons about variation in data.",
"Vectors":"A vector is an ordered set of numbers, often used for positions or features.",
"Matrices":"A matrix is a rectangular array of values.",
"Derivatives":"A derivative measures how quickly a quantity changes.",
"Gradients":"A gradient collects partial derivatives and points toward steepest increase.",
"Optimization":"Optimization searches for parameter values that improve an objective.",
"Data cleaning":"Data cleaning corrects or handles errors, duplicates and inconsistent records.",
"Missing values":"Missing values are absent observations that need careful handling.",
"Data leakage":"Data leakage happens when training uses information unavailable at prediction time.",
"Train and test splits":"Training data fits a model; held-out test data estimates performance on unseen examples.",
"Linear regression":"Linear regression predicts a numeric target using a weighted combination of inputs.",
"Logistic regression":"Logistic regression estimates class probabilities using a logistic transformation.",
"KNN":"K-nearest neighbors predicts using nearby labeled examples.",
"Decision trees":"A decision tree repeatedly splits data using feature-based rules.",
"Random forests":"A random forest combines predictions from multiple decision trees.",
"Cross-validation":"Cross-validation evaluates a method over several train-validation partitions.",
"Evaluation metrics":"Metrics quantify prediction quality, such as accuracy, precision or mean absolute error.",
"Regularization":"Regularization discourages overly complex models to improve generalization.",
"Neurons":"An artificial neuron combines weighted inputs, adds a bias and applies an activation.",
"Activation functions":"An activation function transforms a neuron's input and introduces nonlinearity.",
"Layers":"A layer transforms a set of values into another representation.",
"Loss functions":"A loss function measures disagreement between predictions and targets.",
"Backpropagation":"Backpropagation applies the chain rule to calculate gradients through a network.",
"Gradient descent":"Gradient descent updates parameters in the direction that reduces a loss locally.",
"CNNs":"Convolutional neural networks use shared filters to learn spatial patterns.",
"RNNs":"Recurrent neural networks process sequences using a changing hidden state.",
"LSTMs":"Long short-term memory networks use gates to manage information across sequence steps.",
"Attention":"Attention weights relevant information when producing a representation.",
"Transformers":"Transformers combine attention and feed-forward layers to process token representations.",
"Diffusion":"Diffusion models learn to reverse a noise-adding process to generate samples.",
"Computer vision":"Computer vision extracts information from images and video.",
"NLP":"Natural language processing studies computational methods for human language.",
"Tokenization":"Tokenization converts text into smaller units that models can process.",
"Reinforcement learning":"Reinforcement learning studies decisions learned from rewards and interactions.",
"Robotics":"Robotics combines sensing, control and actuation to interact with the physical world.",
"Embeddings":"Embeddings map items to numerical vectors that encode useful relationships.",
"Pretraining":"Pretraining learns general patterns from broad datasets before task-specific adaptation.",
"LoRA":"Low-rank adaptation trains small parameter updates instead of changing all model weights.",
"Quantization":"Quantization represents model values with fewer bits to reduce memory or computation.",
"RAG":"Retrieval-augmented generation supplies retrieved evidence to a generative model.",
"Vector search":"Vector search retrieves items whose embeddings are similar under a chosen metric.",
"Tool calling":"Tool calling lets a model request operations from external software interfaces.",
"Agents":"An AI agent combines planning, tool use and feedback to pursue a task.",
"Prompt injection":"Prompt injection is an attempt to make untrusted content override an assistant's intended instructions.",
"FastAPI":"FastAPI is a Python framework for building HTTP APIs.",
"Docker":"Docker packages applications and dependencies into portable containers.",
"CI/CD":"Continuous integration and delivery automate checks and release steps.",
"Monitoring":"Monitoring tracks system behavior, performance and failures.",
"Data drift":"Data drift is a change in input distributions over time.",
"Security":"Security protects systems and information from unauthorized access and harm.",
"Reading papers":"Reading research papers involves identifying the question, method, evidence and limitations.",
"Reproducibility":"Reproducibility requires enough detail to repeat methods and assess findings.",
"Ablation studies":"An ablation study removes or changes components to measure their contribution."
};
const prompts = {
"English literacy":"Read the key word slowly, identify its sounds, and use it in a sentence.",
"Numeracy":"Try a small example with numbers 2, 3 and 5 and explain each step.",
"Python":"Write and run a short program illustrating the concept, then change one line.",
"Algebra":"Use x = 3 as a starting point and show a worked example.",
"Data science":"Create a table with five observations and show where this concept matters.",
"Classical ML":"Draw a miniature dataset and explain how the method would learn or be evaluated.",
"Deep learning":"Draw a simple neural-network diagram and label where this concept applies."
};
for (const phase of phases) for (const level of phase.levels) {
  const [levelName, ...topics] = level;
  for (const topic of topics) {
    const id = levelName + ':' + topic;
    if (lessons[id]) continue;
    const definition = explain[topic] || (topic + ' is a subject in ' + levelName.toLowerCase() + '. Start by identifying its purpose, inputs, outputs, and one concrete example before studying advanced details.');
    const activity = prompts[levelName] || foundations[levelName];
    lessons[id] = {
      title: topic,
      intro: definition,
      steps: [
        'Read the core idea: ' + definition,
        'Connect it to the broader subject of ' + levelName + '. Ask what problem it helps solve.',
        'Work through one small example. ' + activity,
        'Explain the idea in your own words and identify one situation where it might not work.'
      ],
      task: 'Independent practice: ' + activity + ' Save a short explanation and one question you still have in your notes.',
      question: 'Which activity best helps you begin learning ' + topic + '?',
      choices: ['Memorize the title without examples', 'Explain the idea and test it with a small example', 'Skip practice and assume you understand'],
      answer: 1,
      scope: 'introductory'
    };
  }
}

export const inventory=()=>({phases:phases.length,levels:phases.reduce((n,p)=>n+p.levels.length,0),modules:phases.reduce((n,p)=>n+p.levels.reduce((s,l)=>s+l.length-1,0),0),authored:Object.keys(lessons).length});
