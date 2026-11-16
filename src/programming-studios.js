// Original programming, data and machine-learning investigations.
// These examples can be reasoned through without an account or paid platform.
export const programmingStudios={
'Python:Variables':{
 objective:'Store values in Python variables and trace how they change.',
 vocabulary:[['variable','A name referring to a value.'],['assignment','Binding a value to a name with =.'],['expression','Code that produces a value.']],
 explanation:'A variable lets your program remember information. The statement age = 27 gives the name age the number 27. Later, age = age + 1 evaluates the expression on the right using the old value, then stores 28. This is assignment, not the same meaning as equality in mathematics. Clear names such as total_cost make code easier to understand.',
 worked:[['Trace a change','count = 2; count = count + 3; print(count) prints 5.'],['Combine values','price = 4; quantity = 3; total = price * quantity gives 12.']],
 exercises:[['After x = 5; x = x + 2, what is x?','7. The second assignment replaces the earlier value.'],['What does print("x") show?','The letter x, because quotation marks make a string.'],['What does print(x) show after x = 10?','10, because x refers to the number.']],
 misconception:'In Python, = assigns a value; == compares values for equality.',
 challenge:'Create a small grocery bill using three variables and print its total.'
},
'Python:Conditions':{
 objective:'Use if and else to choose actions based on true or false conditions.',
 vocabulary:[['condition','An expression evaluating to true or false.'],['Boolean','A value True or False.'],['indentation','Leading spaces showing which statements belong in a block.']],
 explanation:'Programs often need to decide what to do. An if statement tests a condition. If that condition is true, its indented block runs; otherwise an optional else block runs. For example, if age >= 18 chooses the adult branch for an age of 18 or more. Python uses consistent indentation to group statements, so spacing is part of the syntax.',
 worked:[['Pass or retry','score = 60; if score >= 50: the pass branch runs.'],['Check equality','status = "open"; status == "open" is True, but status == "closed" is False.']],
 exercises:[['Is 7 > 9 true?','False. Seven is not greater than nine.'],['For age=18, is age >= 18 true?','True; >= includes equality.'],['Which symbol compares values, = or ==?','== compares, while = assigns.']],
 misconception:'Writing an if statement does not automatically execute every branch: only the matching branch runs.',
 challenge:'Write pseudocode that gives a learner different advice for quiz scores below 50, from 50 to 79, and 80 or above.'
},
'Python:Loops':{
 objective:'Repeat Python instructions and predict how many times a loop runs.',
 vocabulary:[['loop','Instructions repeated over a sequence or while a condition holds.'],['iteration','One repetition of a loop.'],['range','A Python function producing a sequence of integers.']],
 explanation:'A loop avoids copying the same instruction many times. In for n in range(3), Python gives n the values 0, 1 and 2. The number 3 is the stopping boundary and is excluded. To count from 1 through 5, use range(1, 6). A while loop repeats while its condition remains true; the program must eventually change the condition or intentionally stop.',
 worked:[['Count iterations','for x in range(4): print(x) displays 0, 1, 2, 3.'],['Accumulate a sum','total = 0; for n in [2,3,4]: total += n gives 9.']],
 exercises:[['How many iterations does range(5) produce?','5: values 0 through 4.'],['What is list(range(2,5))?','[2, 3, 4].'],['Why can a while loop hang?','Its condition may stay True forever.']],
 misconception:'range(5) does not include 5, and indentation controls what repeats.',
 challenge:'Trace a loop summing 1 through 10, writing total after every iteration.'
},
'Python:Lists':{
 objective:'Create and inspect ordered Python collections using indexes.',
 vocabulary:[['list','An ordered, mutable collection of values.'],['index','The position of an item, starting at zero.'],['append','Add an item to the end of a list.']],
 explanation:'A list groups related items, such as scores = [8, 5, 9]. Python starts counting indexes at zero: scores[0] is 8 and scores[2] is 9. len(scores) is 3. You can append another score and loop over the list. Be careful: requesting an index outside the available range raises IndexError.',
 worked:[['Find the first item','animals = ["cat","dog"]; animals[0] is "cat".'],['Add and count','scores = [5,6]; scores.append(7); len(scores) becomes 3.']],
 exercises:[['What is [10,20,30][1]?','20, because indexing starts at zero.'],['How many elements are in [3,6,9,12]?','4.'],['What does append do?','Adds one item to the end of a list.']],
 misconception:'An index is a position, not an item number: the first item has index 0, not 1.',
 challenge:'Write a program that stores five study times and prints their sum and average.'
},
'Python:Dictionaries':{
 objective:'Find values by meaningful keys using Python dictionaries.',
 vocabulary:[['dictionary','A mapping from keys to values.'],['key','A unique lookup identifier.'],['value','The information associated with a key.']],
 explanation:'Lists use numbered positions, but dictionaries use keys. learner = {"name":"Maya","score":80} lets you read learner["score"] to get 80. Keys must be hashable. Asking for a missing key with square brackets raises KeyError; the get method can return a default. Dictionaries are useful for representing a record with named fields.',
 worked:[['Look up a value','person = {"age":27}; person["age"] returns 27.'],['Update a record','record = {"done":False}; record["done"] = True changes the stored status.']],
 exercises:[['What is {"x":3}["x"]?','3.'],['What happens for a missing key with brackets?','KeyError.'],['How can get help?','data.get("missing", 0) returns a default instead of raising KeyError.']],
 misconception:'A dictionary is not accessed by list position; its entries are selected by keys.',
 challenge:'Represent three study tasks as dictionaries with title, minutes, and completed fields.'
},
'Python:Functions':{
 objective:'Write reusable functions with parameters and return values.',
 vocabulary:[['function','Named reusable instructions.'],['parameter','A name for an input used inside a function.'],['return','Send a result back to the calling code.']],
 explanation:'Functions help break a large problem into small parts. A function definition starts with def, names its parameters in parentheses, and uses an indented body. return gives a value to whoever called the function. print shows output to a person but does not return that value. Small functions are easier to test and explain.',
 worked:[['Double a number','def double(n): return n * 2. Then double(4) is 8.'],['Compute area','def area(w,h): return w*h. Then area(3,5) is 15.']],
 exercises:[['What does double(7) return?','14.'],['What does a parameter represent?','An input name the function uses.'],['Does print(5) return the integer 5?','No. It displays 5 and returns None.']],
 misconception:'Printing a result is not the same as returning it for use by other code.',
 challenge:'Write a function that computes a discounted price and test it on three inputs.'
},
'Python:Debugging':{
 objective:'Diagnose a Python error by reproducing and isolating the problem.',
 vocabulary:[['bug','A defect causing incorrect behavior.'],['traceback','Python information showing where an error occurred.'],['test case','A specific input and expected result.']],
 explanation:'Debugging is a careful investigation, not random guessing. First reproduce the error. Read the last part of the traceback to learn the error type and location. Check values just before the problem. Change one thing at a time, run the program again, and add a test so the bug does not return. Syntax errors, runtime errors and wrong answers require different approaches.',
 worked:[['Fix a NameError','print(total) fails when total was never assigned. Define total before printing it.'],['Fix wrong arithmetic','A program says 2 + 3 = 6. Test the expression and inspect whether * was used instead of +.']],
 exercises:[['What does a traceback help locate?','The error type and relevant code location.'],['Should you change five things at once?','No; small changes make causes easier to find.'],['Why write a regression test?','To detect if a fixed bug returns later.']],
 misconception:'A program that runs without crashing can still be wrong. Check outputs against expected answers.',
 challenge:'Write a tiny Python function with one deliberate bug, explain it, fix it and record a test.'
},
'Python:Files and JSON':{
 objective:'Save structured data and load it again safely.',
 vocabulary:[['file path','Where a file is stored.'],['JSON','A text format for exchanging structured data.'],['encoding','A rule for representing text as bytes.']],
 explanation:'A program often needs to remember data after it closes. A text file stores characters; JSON stores arrays, objects, numbers, strings and booleans in a shared format. In Python, json.dump writes a Python value to an open file and json.load reads it. Use with open(...) to ensure files are properly closed, and treat data from unknown files as untrusted input.',
 worked:[['Save a small object','Use json.dump({"score":5}, file) inside a file opened with mode "w" and UTF-8 encoding.'],['Read it back','Open the same JSON file in mode "r", call json.load(file), then verify data["score"] is 5.']],
 exercises:[['Which mode opens a file for reading?','"r".'],['Is {"done": true} valid JSON?','Yes, JSON uses lowercase true; Python uses True.'],['What should you do with unexpected JSON?','Validate fields and types before using the data.']],
 misconception:'JSON is data, not executable Python source. Avoid evaluating imported strings as code.',
 challenge:'Build a local study log saved as JSON, then reopen the file and verify every record.'
},
'Python:Testing':{
 objective:'Write small automated checks comparing expected and actual results.',
 vocabulary:[['assertion','A statement that must be true.'],['unit test','A test of a small part of a program.'],['edge case','An unusual but valid input or boundary.']],
 explanation:'Testing turns expectations into repeatable checks. If add(a,b) is supposed to add numbers, assert add(2,3) == 5 is a tiny test. One test is not enough: try zero, negative numbers and values near boundaries. Tests are evidence of behavior for the cases you checked, not proof that every possible program behavior is correct.',
 worked:[['Test an addition function','assert add(2,3) == 5 checks a known result.'],['Check a boundary','If adults are age 18 or older, test ages 17, 18 and 19.']],
 exercises:[['What happens when a Python assert condition is false?','It raises AssertionError.'],['Why test a boundary?','Errors often happen exactly where behavior changes.'],['Does one passing test prove a program is correct?','No; it covers only the tested case.']],
 misconception:'Tests that only copy the implementation’s logic may repeat the same mistake. Derive expected answers independently.',
 challenge:'Make a five-case test table for a function converting hours to minutes.'
},
'Data science:Data cleaning':{
 objective:'Identify missing, duplicated and inconsistent data before analysis.',
 vocabulary:[['missing value','A value absent from a data record.'],['duplicate','A repeated record or observation.'],['outlier','An observation far from others.']],
 explanation:'Real datasets contain mistakes. Suppose a table lists study time as 30, 40, blank and 4500 minutes. First ask what each row means. Is blank “unknown” or “zero”? Is 4500 a typo or a real long session? Record decisions, inspect where the data came from, and avoid modifying data just because an observation looks unusual.',
 worked:[['Handle a blank cell','Keep it marked missing until you know whether zero is correct.'],['Check a suspicious number','Investigate 4500 minutes by comparing source records and plausible ranges.']],
 exercises:[['Is a blank score automatically zero?','No, it may mean the score is unknown.'],['Should every outlier be deleted?','No. First investigate whether it is an error or an important real case.'],['Why document cleaning decisions?','So analyses can be explained and reproduced.']],
 misconception:'Data cleaning is not simply deleting anything unusual; careless cleaning can introduce bias.',
 challenge:'Make a five-row table with two deliberate data issues. Document detection and careful handling.'
},
'Classical ML:ML fundamentals':{
 objective:'Distinguish learning from labeled examples and finding patterns without labels.',
 vocabulary:[['feature','An input variable used by a model.'],['label','The desired output in supervised learning.'],['model','A rule or system fitted to data.']],
 explanation:'Machine learning learns a pattern from examples. In supervised learning, each example has input features and a target label, such as house size and sale price. In unsupervised learning, we look for patterns or groups without supplied target labels. Before choosing a model, define the task, the available features, how success will be measured and how the system might fail.',
 worked:[['Supervised task','Input: study hours. Target: exam score. A model learns an approximate relationship from past examples.'],['Unsupervised task','Input: customer activity patterns. Goal: group similar behavior without a predefined target.']],
 exercises:[['Is predicting a known numeric price supervised learning?','Yes, when training includes examples with known prices.'],['What is a feature?','An input used for prediction or pattern analysis.'],['Can correlations guarantee causation?','No. A prediction pattern is not necessarily a cause.']],
 misconception:'High accuracy on familiar training examples does not guarantee useful predictions on new data.',
 challenge:'Design a tiny ML project: state a question, feature, label, baseline and possible harm.'
},
'Classical ML:Evaluation metrics':{
 objective:'Calculate simple accuracy and explain when it is misleading.',
 vocabulary:[['accuracy','Share of predictions that are correct.'],['precision','Of predicted positives, how many are truly positive.'],['recall','Of actual positives, how many are detected.']],
 explanation:'Model evaluation asks whether predictions are useful on appropriate unseen data. Accuracy is correct predictions divided by total predictions. Suppose 95 of 100 emails are legitimate: a model that always says legitimate gets 95% accuracy but catches no spam. Precision and recall show different costs of false positives and false negatives. Choose metrics based on the real decision.',
 worked:[['Compute accuracy','A classifier gets 18 out of 20 decisions right. Accuracy = 18/20 = 90%.'],['See class imbalance','If only 5 of 100 cases are positive, always predicting negative gives 95% accuracy but zero recall for positive cases.']],
 exercises:[['What is accuracy if 8 of 10 predictions are correct?','80%.'],['Does 99% accuracy always mean a good model?','No, especially when classes are imbalanced or some errors are costly.'],['Which metric measures detected real positives?','Recall.']],
 misconception:'Accuracy alone hides the kinds of mistakes the model makes.',
 challenge:'Build a confusion matrix with 10 predictions and calculate accuracy, precision and recall.'
},
'Deep learning:Gradient descent':{
 objective:'Explain how a model reduces error by taking small steps along a gradient.',
 vocabulary:[['loss','A number measuring prediction error.'],['gradient','How loss changes when parameters change.'],['learning rate','The size of an update step.']],
 explanation:'Training adjusts model parameters to reduce a loss. Imagine standing on a hill and wanting to walk downhill. The derivative tells you the local slope. Gradient descent updates a parameter by subtracting learning rate times gradient: new_weight = old_weight − rate × gradient. A rate that is too large can overshoot; one too small can be slow. The gradient describes local change and does not guarantee the global best answer.',
 worked:[['One parameter update','Weight=4, gradient=2, rate=0.1. New weight = 4 − 0.1×2 = 3.8.'],['Compare learning rates','For gradient=2, rate=1 changes weight by 2; rate=0.01 changes it by 0.02.']],
 exercises:[['With weight=5, rate=0.1, gradient=3, what is new weight?','4.7.'],['What happens if the learning rate is too large?','Updates can overshoot and training may fail to settle.'],['Does gradient descent always find the global optimum?','No; this depends on the loss surface and assumptions.']],
 misconception:'Gradient descent does not directly know the best parameter; it uses local information to make an update.',
 challenge:'Manually perform four updates for loss(w)=(w−2)² starting from w=4 and rate=0.1.'
},
'Generative AI and agents:RAG':{
 objective:'Describe how retrieval supports a language model without guaranteeing correctness.',
 vocabulary:[['retrieval','Finding relevant information from stored documents.'],['context','Information supplied along with a question.'],['grounding','Supporting an answer using evidence.']],
 explanation:'Retrieval-augmented generation (RAG) searches a document collection before asking a language model to answer. A basic pipeline splits documents into passages, indexes them, retrieves passages relevant to a query and includes those passages in the prompt. The model should cite the evidence and acknowledge gaps. Retrieval may miss key passages, and the model may still invent an answer; evaluation remains necessary.',
 worked:[['Answer a policy question','Search the policy handbook for the relevant paragraph, then compose an answer citing that paragraph.'],['Handle missing evidence','If no retrieved passage supports the claim, state that the documents did not provide an answer.']],
 exercises:[['Does retrieval automatically make an answer true?','No. Both retrieval and generation can fail.'],['What should happen when documents are insufficient?','Report uncertainty or that the answer is not supported.'],['Why include source references?','So readers can verify claims against the original material.']],
 misconception:'RAG is not the same as retraining a model; retrieval supplies context at answer time.',
 challenge:'Design a five-document question-answering workflow with one answerable and one unanswerable question.'
}
};
