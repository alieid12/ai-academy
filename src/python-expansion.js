// Original practical Python and device-basics deep dives.
export const pythonExpansion={
  "Computer literacy:Hardware and software": {
    "objective": "Distinguish physical computer parts, programs, input and output.",
    "vocabulary": [
      [
        "hardware",
        "Physical parts of a device."
      ],
      [
        "software",
        "Instructions a device executes."
      ],
      [
        "processor",
        "Hardware that carries out program operations."
      ],
      [
        "memory",
        "Hardware holding information used while programs run."
      ]
    ],
    "explanation": "A computer system combines hardware and software. Hardware includes a keyboard, screen, processor, storage drive and memory. Software includes an operating system, a web browser and other applications. When you type a message, the keyboard sends input; a program processes the text, and the screen provides visual output. Storage keeps saved files when a device is turned off, while typical RAM is used for temporary working information. You do not need to open a device to learn these ideas.",
    "worked": [
      [
        "Follow an action",
        "You press a keyboard key (hardware input), the text editor (software) handles it, and the screen (hardware output) shows the letter."
      ],
      [
        "Compare storage and RAM",
        "A saved document stays on the storage drive after shutdown, while working data in ordinary RAM does not."
      ]
    ],
    "exercises": [
      [
        "Is a web browser hardware or software?",
        "Software; it is a program."
      ],
      [
        "What is an example of computer input?",
        "A keyboard press or a touch-screen tap."
      ],
      [
        "Why save a document to storage?",
        "To keep it for later after closing the program or switching the device off."
      ]
    ],
    "misconception": "A screen can be part of an input device when it supports touch, but displaying an image remains an output role.",
    "challenge": "Create a labelled diagram showing three hardware parts, two programs and the flow of information."
  },
  "Python:Numbers and strings": {
    "objective": "Tell numeric values from text values in Python.",
    "vocabulary": [
      [
        "integer",
        "A whole-number value."
      ],
      [
        "float",
        "A number that can contain a fractional part."
      ],
      [
        "string",
        "Text between quotation marks."
      ]
    ],
    "explanation": "Python represents different kinds of values. 5 is a number, while '5' is a string containing the digit character. Adding numbers calculates arithmetic: 2+3 evaluates to 5. Adding strings joins text: '2'+'3' becomes '23'. A float such as 2.5 represents a number that can contain a decimal part. Use type() to inspect the kind of a value when behavior is confusing.",
    "worked": [
      [
        "Compare addition",
        "print(2+3) prints 5, but print('2'+'3') prints 23."
      ],
      [
        "Inspect types",
        "type(4) is int; type('4') is str; type(4.0) is float."
      ]
    ],
    "exercises": [
      [
        "Is '12' a string or a number?",
        "A string, because it is in quotation marks."
      ],
      [
        "What does 4 * 3 evaluate to?",
        "12."
      ],
      [
        "What is 'hi' + '!'?",
        "'hi!' because string addition concatenates text."
      ]
    ],
    "misconception": "Quotes change the value's type: '10' and 10 are not interchangeable without conversion.",
    "challenge": "Write a program printing your name as a string, age as an integer and a decimal measurement."
  },
  "Python:Input and output": {
    "objective": "Ask for user input, convert it safely and display a useful result.",
    "vocabulary": [
      [
        "input",
        "Information entered into a program."
      ],
      [
        "conversion",
        "Changing a value from one type to another."
      ],
      [
        "output",
        "Information the program displays or produces."
      ]
    ],
    "explanation": "The built-in input() function waits for a person to type something and returns a string, even when the text looks like a number. To calculate with the text, convert it, for example using int() for whole numbers. Invalid text can cause a conversion error, so user-facing programs should explain what a valid entry looks like. Printing a clear label alongside results makes output easier to understand.",
    "worked": [
      [
        "Read a name",
        "name = input('Your name? '); print('Hello, ' + name) prints a greeting."
      ],
      [
        "Read a number",
        "minutes = int(input('Minutes: ')); print(minutes * 60) converts a valid whole-number input to seconds."
      ]
    ],
    "exercises": [
      [
        "What type does input() return?",
        "A string."
      ],
      [
        "What happens when int('8') is evaluated?",
        "It returns the integer 8."
      ],
      [
        "What could happen with int('eight')?",
        "It raises ValueError because the text is not a valid integer."
      ]
    ],
    "misconception": "input() does not automatically produce a numeric value. Conversion and validation are separate steps.",
    "challenge": "Design a beginner-friendly age prompt that handles non-numeric input without crashing."
  },
  "Python:Text processing": {
    "objective": "Clean, compare and inspect simple text in Python.",
    "vocabulary": [
      [
        "method",
        "An operation used with a value."
      ],
      [
        "strip",
        "Remove surrounding whitespace."
      ],
      [
        "lower",
        "Convert letters to lowercase."
      ],
      [
        "length",
        "The number of items in a sequence."
      ]
    ],
    "explanation": "Programs often work with text from people and files. Python strings provide methods such as strip() to remove whitespace at both ends, lower() to normalize case, and split() to divide text into parts. len(text) counts characters. These operations are useful for comparing answers consistently, but they do not solve every international language challenge or spelling variation.",
    "worked": [
      [
        "Normalize a response",
        "answer = ' YES '; answer.strip().lower() produces 'yes'."
      ],
      [
        "Count characters",
        "len('hello') is 5; 'hello'.split('l') gives ['he', '', 'o']."
      ]
    ],
    "exercises": [
      [
        "What does ' Hi '.strip() return?",
        "'Hi'."
      ],
      [
        "What does 'AI'.lower() return?",
        "'ai'."
      ],
      [
        "What does len('cat') return?",
        "3."
      ]
    ],
    "misconception": "strip() removes surrounding whitespace, not every space inside a sentence.",
    "challenge": "Write a tiny survey program that normalizes yes/no responses and reports invalid entries."
  },
  "Python:Modules": {
    "objective": "Use Python modules to organize and reuse code.",
    "vocabulary": [
      [
        "module",
        "A Python file or library providing reusable names."
      ],
      [
        "import",
        "A statement giving access to module contents."
      ],
      [
        "namespace",
        "A way of grouping names and preventing collisions."
      ]
    ],
    "explanation": "As a program grows, it becomes easier to manage when related functions live in separate modules. Python's standard library includes math, random, json and many other tools. An import statement makes a module available; for example, import math allows math.sqrt(9) to return 3.0. You can also create a module by saving your functions in a .py file and importing it from another file in the same project.",
    "worked": [
      [
        "Use math",
        "import math; print(math.sqrt(16)) displays 4.0."
      ],
      [
        "Reuse your function",
        "Save def double(x): return x*2 in helpers.py, then from helpers import double in another script."
      ]
    ],
    "exercises": [
      [
        "What does import do?",
        "Makes another module's available names usable in your program."
      ],
      [
        "Which standard module includes sqrt()?",
        "math."
      ],
      [
        "Why split large programs into modules?",
        "To organize reusable functions and clarify responsibilities."
      ]
    ],
    "misconception": "Importing a module does not mean every external package is installed; the standard library and third-party packages differ.",
    "challenge": "Create two small Python files, one providing a function and one importing and testing it."
  },
  "Python:Classes": {
    "objective": "Group data and behavior into simple Python objects.",
    "vocabulary": [
      [
        "class",
        "A definition for a kind of object."
      ],
      [
        "object",
        "A particular instance holding state and behavior."
      ],
      [
        "attribute",
        "A value associated with an object."
      ],
      [
        "method",
        "A function associated with an object."
      ]
    ],
    "explanation": "A class defines how a kind of object behaves. An instance is a particular object created from that class. For a study task, attributes might include the title and a completed flag; a method might mark the task complete. In Python, the __init__ method often sets initial attributes, and self refers to the particular instance being used. Classes are useful when related data and actions belong together, but small programs can work perfectly well without them.",
    "worked": [
      [
        "Create a simple object",
        "Write \"class Task:\" followed by an indented \"pass\" statement on the next line. Then \"task = Task()\" creates an instance."
      ],
      [
        "Store and update state",
        "A Task might set self.done = False in __init__, then mark_done() changes it to True."
      ]
    ],
    "exercises": [
      [
        "What is an instance?",
        "A specific object created from a class."
      ],
      [
        "What does self refer to in an instance method?",
        "The instance receiving the method call."
      ],
      [
        "Must every Python program use classes?",
        "No; functions and built-in data structures are often enough."
      ]
    ],
    "misconception": "A class definition describes possible objects; it is not the same thing as one object instance.",
    "challenge": "Write a Task class with title, done and a mark_done method; create and test two instances."
  },
  "Python:Git": {
    "objective": "Record snapshots of a coding project using Git safely.",
    "vocabulary": [
      [
        "repository",
        "A collection of tracked files and version history."
      ],
      [
        "commit",
        "A saved record of selected changes."
      ],
      [
        "branch",
        "An independent line of development history."
      ]
    ],
    "explanation": "Git is a version-control tool that tracks changes to files. A typical local workflow is to check git status, stage intentional files with git add, and create a descriptive commit with git commit. A branch lets you experiment without immediately changing the main branch. GitHub and other hosting services can store copies of repositories online, but Git also works locally. Check for private keys, passwords and personal files before sharing code.",
    "worked": [
      [
        "Save a change",
        "Edit hello.py, run git status, stage hello.py and commit with a message explaining the change."
      ],
      [
        "Work safely",
        "Create a feature branch for a small experiment, then review the difference before merging."
      ]
    ],
    "exercises": [
      [
        "What does git status show?",
        "The current working tree and staging state."
      ],
      [
        "What is a commit?",
        "A recorded snapshot of selected changes with a message."
      ],
      [
        "Should you commit secret API keys?",
        "No. Keep secrets out of commits and repository history."
      ]
    ],
    "misconception": "Git and GitHub are not identical: Git is version-control software; GitHub is a hosting service.",
    "challenge": "Create a local practice repository, make two documented commits and inspect the changes between them."
  },
  "Python:APIs": {
    "objective": "Understand requests, responses and safe API integration.",
    "vocabulary": [
      [
        "API",
        "A defined interface for communicating with a service or library."
      ],
      [
        "request",
        "Information sent to an API."
      ],
      [
        "response",
        "Information returned by an API."
      ],
      [
        "status code",
        "A code indicating the result of an HTTP request."
      ]
    ],
    "explanation": "An application programming interface defines how one program can interact with another. Many web APIs use HTTP requests and return JSON data. A GET request often reads information, while POST often submits data; specific API behavior depends on its documentation. Responses may contain error status codes or unexpected fields. A reliable client validates results, handles timeouts and respects privacy, rate limits and authentication requirements.",
    "worked": [
      [
        "Understand a response",
        "An HTTP API might return the JSON object {\"temperature\":25}. Validate the field and its numeric type before displaying it."
      ],
      [
        "Handle a failure",
        "If a request returns HTTP 404, explain the resource was not found instead of assuming the response contains the requested data."
      ]
    ],
    "exercises": [
      [
        "What does an API define?",
        "How software components interact."
      ],
      [
        "What data format is common in web API responses?",
        "JSON."
      ],
      [
        "Why check status codes and returned fields?",
        "Requests can fail or return different data than expected."
      ]
    ],
    "misconception": "An API call does not guarantee a successful result or unlimited access; network and service failures are normal.",
    "challenge": "Design a small app that fetches public data, validates it and displays a friendly error when unavailable."
  },
  "Python:NumPy": {
    "objective": "Describe arrays and vectorized numeric operations in NumPy.",
    "vocabulary": [
      [
        "array",
        "A structured collection of values."
      ],
      [
        "shape",
        "The dimensions and lengths of an array."
      ],
      [
        "vectorization",
        "Applying operations across arrays without writing explicit Python element loops."
      ]
    ],
    "explanation": "NumPy is a widely used Python library for numeric computing. Arrays store values in regular shapes and support efficient operations, such as adding every element in two arrays. In a one-dimensional array, shape describes its length; a matrix-like array has rows and columns. NumPy must be installed in the Python environment before importing. Broadcasting can make compatible shapes work together, but shapes should be checked to avoid silent mistakes.",
    "worked": [
      [
        "Element-wise addition",
        "np.array([1,2,3]) + np.array([4,5,6]) produces [5,7,9]."
      ],
      [
        "Check shape",
        "An array containing two rows and three columns has shape (2,3)."
      ]
    ],
    "exercises": [
      [
        "What does shape (3,2) describe?",
        "Three rows and two columns for a two-dimensional array."
      ],
      [
        "What is [1,2] + [3,4] when used as two NumPy arrays?",
        "Element-wise sum [4,6], not Python list concatenation."
      ],
      [
        "What must you do before importing an unavailable third-party package?",
        "Install it in the active Python environment."
      ]
    ],
    "misconception": "Ordinary Python lists and NumPy arrays do not perform all operators in the same way.",
    "challenge": "Create two small arrays, add them and compare their shapes with the resulting array."
  }
};
