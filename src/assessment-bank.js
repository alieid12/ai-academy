// Original formative checkpoint bank: separate from introductory completion.
// A 3-question check is evidence of retrieval practice, never certification.
export const assessmentBank = {
  "Numeracy:Counting and place value": [
    {
      "question": "What does the 6 mean in 64?",
      "choices": [
        "Six ones",
        "Six tens",
        "Six hundreds"
      ],
      "answer": 1,
      "explanation": "The 6 occupies the tens position, so it represents 60."
    },
    {
      "question": "Which expression names 58?",
      "choices": [
        "5 + 8",
        "50 + 8",
        "500 + 8"
      ],
      "answer": 1,
      "explanation": "Five tens are 50; adding eight ones gives 58."
    },
    {
      "question": "Which number is larger?",
      "choices": [
        "39",
        "93",
        "They are equal"
      ],
      "answer": 1,
      "explanation": "93 has nine tens, while 39 has only three tens."
    }
  ],
  "Numeracy:Fractions": [
    {
      "question": "A cake is cut into eight equal slices. Three are eaten. What fraction was eaten?",
      "choices": [
        "3/8",
        "8/3",
        "5/8"
      ],
      "answer": 0,
      "explanation": "The denominator counts all eight equal parts and the numerator counts the three eaten."
    },
    {
      "question": "What fraction equals two quarters?",
      "choices": [
        "1/2",
        "1/3",
        "3/4"
      ],
      "answer": 0,
      "explanation": "Two out of four equal parts reduce to one out of two."
    },
    {
      "question": "What is one quarter of twenty?",
      "choices": [
        "4",
        "5",
        "10"
      ],
      "answer": 1,
      "explanation": "Divide 20 into four equal groups; each contains 5."
    }
  ],
  "Numeracy:Percentages": [
    {
      "question": "What is 10% of 90?",
      "choices": [
        "9",
        "19",
        "90"
      ],
      "answer": 0,
      "explanation": "Ten percent means one tenth. 90 divided by 10 equals 9."
    },
    {
      "question": "A price of 80 is discounted by 25%. How much do you save?",
      "choices": [
        "10",
        "20",
        "60"
      ],
      "answer": 1,
      "explanation": "Twenty-five percent is one quarter, and a quarter of 80 is 20."
    },
    {
      "question": "For that price of 80, what is the price after the 25% discount?",
      "choices": [
        "20",
        "55",
        "60"
      ],
      "answer": 2,
      "explanation": "Subtract the saving of 20 from the original price of 80."
    }
  ],
  "Python:Variables": [
    {
      "question": "After count = 4 and count = count + 3, what does print(count) display?",
      "choices": [
        "4",
        "7",
        "43"
      ],
      "answer": 1,
      "explanation": "The second assignment updates count from 4 to 7."
    },
    {
      "question": "Which statement compares two numbers for equality in Python?",
      "choices": [
        "a = b",
        "a == b",
        "a => b"
      ],
      "answer": 1,
      "explanation": "The operator == tests equality; = assigns a value."
    },
    {
      "question": "Why are descriptive names like total_price helpful?",
      "choices": [
        "They increase CPU speed",
        "They make code easier to understand",
        "They turn text into a number"
      ],
      "answer": 1,
      "explanation": "Meaningful names help people understand the program and reduce mistakes."
    }
  ],
  "Python:Conditions": [
    {
      "question": "For age = 18, is age >= 18 true?",
      "choices": [
        "Yes",
        "No",
        "Only if age is a string"
      ],
      "answer": 0,
      "explanation": "The >= operator includes the boundary value of 18."
    },
    {
      "question": "In Python, what belongs beneath an if statement?",
      "choices": [
        "An indented block",
        "A comment only",
        "Any code without indentation"
      ],
      "answer": 0,
      "explanation": "Python uses indentation to group instructions controlled by a condition."
    },
    {
      "question": "If a condition is false and there is an else branch, what happens?",
      "choices": [
        "Both branches run",
        "The else branch runs",
        "The program must crash"
      ],
      "answer": 1,
      "explanation": "The else branch provides behavior when the if condition is false."
    }
  ],
  "Python:Loops": [
    {
      "question": "What values does range(3) produce?",
      "choices": [
        "1, 2, 3",
        "0, 1, 2",
        "0, 1, 2, 3"
      ],
      "answer": 1,
      "explanation": "Python includes the start at zero and excludes the stop at three."
    },
    {
      "question": "How many times does for i in range(5) run?",
      "choices": [
        "4",
        "5",
        "6"
      ],
      "answer": 1,
      "explanation": "The values are 0, 1, 2, 3 and 4: five iterations."
    },
    {
      "question": "What is a risk of a while loop with a condition that never becomes false?",
      "choices": [
        "It repeats indefinitely",
        "It runs once",
        "It cannot access variables"
      ],
      "answer": 0,
      "explanation": "A while loop can continue without stopping if its condition remains true."
    }
  ],
  "Python:Functions": [
    {
      "question": "What does double(4) return if double(x) is defined as x * 2?",
      "choices": [
        "2",
        "6",
        "8"
      ],
      "answer": 2,
      "explanation": "Replace x with 4 and multiply by 2."
    },
    {
      "question": "Which keyword gives a value back to the caller?",
      "choices": [
        "print",
        "return",
        "def"
      ],
      "answer": 1,
      "explanation": "return ends the function and supplies a result to the calling expression."
    },
    {
      "question": "What is one difference between print(value) and return value?",
      "choices": [
        "They are always identical",
        "print displays text, return supplies a reusable value",
        "return always creates a file"
      ],
      "answer": 1,
      "explanation": "Printing displays output while returning allows other code to use a value."
    }
  ],
  "Classical ML:Train and test splits": [
    {
      "question": "Which split should be kept untouched during model tuning?",
      "choices": [
        "Training",
        "Final test",
        "Training and test together"
      ],
      "answer": 1,
      "explanation": "Use the final test split only after model and preprocessing decisions are settled."
    },
    {
      "question": "Where should preprocessing such as scaling learn its parameters?",
      "choices": [
        "Full dataset",
        "Training data only",
        "Test data only"
      ],
      "answer": 1,
      "explanation": "Fit on the training portion, then apply the learned transform to held-out data."
    },
    {
      "question": "How should repeat measurements from one patient be split?",
      "choices": [
        "Random rows regardless of identity",
        "Group by patient",
        "Always put all records in test"
      ],
      "answer": 1,
      "explanation": "Group-aware splitting prevents the same patient from appearing in training and test."
    }
  ],
  "Classical ML:Evaluation metrics": [
    {
      "question": "A model gets 8 of 10 predictions correct. What is accuracy?",
      "choices": [
        "8%",
        "80%",
        "90%"
      ],
      "answer": 1,
      "explanation": "Accuracy equals correct predictions divided by total predictions: 8/10=80%."
    },
    {
      "question": "Why can 95% accuracy be misleading when 95% of cases are negative?",
      "choices": [
        "Class imbalance",
        "It means all cases were positive",
        "The dataset is necessarily too large"
      ],
      "answer": 0,
      "explanation": "A model predicting only negative would reach 95% accuracy but miss every positive."
    },
    {
      "question": "Recall asks what fraction of which cases were detected?",
      "choices": [
        "Predicted positives",
        "Actual positives",
        "All cases"
      ],
      "answer": 1,
      "explanation": "Recall is true positives divided by all actual positives."
    }
  ],
  "Deep learning:Gradient descent": [
    {
      "question": "With weight 4, gradient 2 and learning rate 0.1, what is the next weight?",
      "choices": [
        "4.2",
        "3.8",
        "2.0"
      ],
      "answer": 1,
      "explanation": "Subtract rate times gradient: 4−0.1×2 = 3.8."
    },
    {
      "question": "What can happen if the learning rate is too large?",
      "choices": [
        "Updates can overshoot",
        "Training becomes mathematically exact",
        "Loss is always zero"
      ],
      "answer": 0,
      "explanation": "Large steps may overshoot low-loss regions, causing oscillation or divergence."
    },
    {
      "question": "Which information does a gradient supply?",
      "choices": [
        "Local change in loss",
        "A guaranteed best possible weight",
        "The number of training examples"
      ],
      "answer": 0,
      "explanation": "A gradient describes local sensitivity, not a guaranteed global optimum."
    }
  ],
  "Generative AI and agents:RAG": [
    {
      "question": "What does a simple RAG system do before generating an answer?",
      "choices": [
        "Retrieve relevant passages",
        "Train a brand-new LLM",
        "Delete all documents"
      ],
      "answer": 0,
      "explanation": "RAG retrieves evidence and supplies it as context for generation."
    },
    {
      "question": "Does retrieval guarantee the generated answer is correct?",
      "choices": [
        "Yes",
        "No",
        "Only for long documents"
      ],
      "answer": 1,
      "explanation": "Retrieval and generation can both make errors; answers need verification."
    },
    {
      "question": "If retrieved documents do not support the answer, what should a system do?",
      "choices": [
        "Invent plausible facts",
        "Acknowledge missing evidence",
        "Repeat the question"
      ],
      "answer": 1,
      "explanation": "Reliable systems signal uncertainty and do not invent support."
    }
  ]
};

export function checkpointScore(items, answers){
 if(!Array.isArray(items)||!Array.isArray(answers))return {correct:0,total:items?.length||0,answered:0,passed:false};
 const correct=items.reduce((n,item,i)=>n+(answers[i]===item.answer?1:0),0);
 const answered=items.reduce((n,item,i)=>n+(Number.isInteger(answers[i])&&answers[i]>=0&&answers[i]<item.choices.length?1:0),0);
 return {correct,total:items.length,answered,passed:answered===items.length&&correct===items.length};
}
export function validatedCheckpoints(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return {};
 const valid={};
 for(const [id,answers] of Object.entries(raw)){
  const questions=assessmentBank[id];
  if(!questions||!Array.isArray(answers)||answers.length>questions.length)continue;
  valid[id]=answers.map((a,i)=>Number.isInteger(a)&&a>=0&&a<questions[i]?.choices.length?a:null);
 }
 return valid;
}
