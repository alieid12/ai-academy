// Original instructional material. Examples are deliberately small and checkable.
export const masteryUnits={
'English literacy:Phonics and sounds':{
objective:'Blend letter sounds to read short words without memorizing the whole word.',
examples:[{prompt:'Read the word ship.',work:'Say /sh/ (one sound), then /i/, then /p/. Blend slowly: sh–i–p. Say ship at normal speed.',result:'The letters s and h together make /sh/.'},{prompt:'Read the word fish.',work:'Blend /f/ + /i/ + /sh/. Notice /sh/ appears at the end this time.',result:'fish'}],
misconception:'Two letters do not always mean two sounds. The pair sh usually represents one sound.',
practice:[{prompt:'Which pair makes the same first sound as ship?',hint:'Listen to the beginning of each word.',solution:'shop — both begin with /sh/.'},{prompt:'Write a sentence using fish and read it aloud.',hint:'Try a short sentence with a subject and a verb.',solution:'Example: The fish can swim. Other meaningful sentences are valid.'}],
transfer:'Find two new words containing sh, say them aloud, and mark the two letters that make one sound.'},
'Numeracy:Addition':{
objective:'Add two numbers using objects, a number line, and place value.',
examples:[{prompt:'Find 7 + 5.',work:'Start at 7. Count forward five: 8, 9, 10, 11, 12. Check by making a group of 7 objects and another of 5.',result:'7 + 5 = 12.'},{prompt:'Find 28 + 15.',work:'Add tens: 20 + 10 = 30. Add ones: 8 + 5 = 13. Combine 30 + 13.',result:'43'}],
misconception:'Do not join digits as text: 7 + 5 is 12, not 75.',
practice:[{prompt:'Calculate 9 + 6 using make-ten.',hint:'Move 1 from the 6 to the 9.',solution:'9 + 1 = 10; 10 + 5 = 15.'},{prompt:'Calculate 36 + 27.',hint:'Add tens and ones separately.',solution:'30 + 20 = 50; 6 + 7 = 13; total 63.'}],
transfer:'Write a shopping story requiring two additions. Solve it with two different methods.'},
'Numeracy:Fractions':{
objective:'Interpret a fraction as equal parts of a whole and find simple fractional amounts.',
examples:[{prompt:'What is 3/4 of 12?',work:'Split 12 objects into 4 equal groups of 3. Take 3 groups: 3 + 3 + 3.',result:'9'},{prompt:'Compare 1/2 and 1/4 of the same pizza.',work:'Divide the same whole into 2 or 4 equal pieces. One of two pieces is larger than one of four.',result:'1/2 > 1/4'}],
misconception:'A larger denominator does not automatically mean a larger piece when the whole is the same.',
practice:[{prompt:'Find 2/3 of 15.',hint:'Divide by 3, then multiply by 2.',solution:'15 ÷ 3 = 5; 5 × 2 = 10.'},{prompt:'Is 2/4 equal to 1/2?',hint:'Draw four equal parts and shade two.',solution:'Yes. Both cover half the same whole.'}],
transfer:'Draw a rectangle split into six equal pieces. Shade four and write two equivalent fractions.'},
'Python:Variables':{
objective:'Store values in named variables, update them, and predict printed output.',
examples:[{prompt:'Predict the output.',work:'score = 4\nscore = score + 3\nprint(score)\nThe second assignment uses the old value 4 and replaces it with 7.',result:'7'},{prompt:'Understand a string variable.',work:'name = "Ada"\nprint("Hello, " + name)\nThe + operator joins two strings.',result:'Hello, Ada'}],
misconception:'The = symbol in an assignment stores a value; it is not a claim that two mathematical expressions are always equal.',
practice:[{prompt:'Predict: x = 2; y = x; x = 5; print(y)',hint:'What value was copied into y?',solution:'2. Updating x does not automatically update y for integers.'},{prompt:'Write a program to calculate the price of three items costing 8 each.',hint:'Use variables for quantity and unit_price.',solution:'quantity = 3\nunit_price = 8\nprint(quantity * unit_price)  # 24'}],
transfer:'Create a simple receipt with quantity, unit price and total. Change the quantity and verify the result.'},
'Python:Conditions':{
objective:'Use boolean comparisons and indentation to choose between program branches.',
examples:[{prompt:'Determine the printed result.',work:'age = 17\nif age >= 18:\n    print("Adult")\nelse:\n    print("Under 18")\nThe condition is false because 17 is smaller than 18.',result:'Under 18'},{prompt:'Check equality.',work:'pin = "1234"\nif pin == "1234":\n    print("Match")\nUse == to compare values.',result:'Match'}],
misconception:'Use == to compare two values. A single = assigns a value.',
practice:[{prompt:'What branch runs for score = 50 if the condition is score >= 50?',hint:'The symbol >= includes equality.',solution:'The true branch runs.'},{prompt:'Write a condition that prints "Cold" when temperature is below 15.',hint:'Use the < operator and indent the print.',solution:'if temperature < 15:\n    print("Cold")'}],
transfer:'Build a ticket-price rule with at least three age groups. Test boundary ages.'},
'Python:Loops':{
objective:'Trace a for loop and choose an appropriate range.',
examples:[{prompt:'What does this loop print?',work:'for n in range(1, 4):\n    print(n)\nrange stops before its second argument.',result:'1, then 2, then 3'},{prompt:'Sum the numbers 1 through 4.',work:'total = 0\nfor n in range(1, 5):\n    total += n\nThe totals become 1, 3, 6, 10.',result:'10'}],
misconception:'range(4) generates 0, 1, 2, 3; it does not include 4.',
practice:[{prompt:'How many iterations does range(2, 9, 2) produce?',hint:'List the values until you reach 9.',solution:'Four: 2, 4, 6, 8.'},{prompt:'Print every number from 5 through 1.',hint:'Use a negative step.',solution:'for n in range(5, 0, -1):\n    print(n)'}],
transfer:'Write a multiplication-table generator for a number entered by the learner.'},
'Python:Functions':{
objective:'Define a reusable function, pass arguments and return a value.',
examples:[{prompt:'Calculate the output of double(5).',work:'def double(x):\n    return 2 * x\nprint(double(5))\nThe argument 5 becomes x inside the function.',result:'10'},{prompt:'Return versus print.',work:'def square(n):\n    return n * n\nresult = square(4)\nThe returned value is stored in result.',result:'result equals 16'}],
misconception:'Printing a value is not the same as returning it to the caller.',
practice:[{prompt:'Write a function add(a, b) that returns their sum.',hint:'Use return a + b.',solution:'def add(a, b):\n    return a + b'},{prompt:'Predict the result of add(3, 7).',hint:'Replace a and b with the argument values.',solution:'10'}],
transfer:'Write three functions for a basic calculator and test each with zero and negative inputs.'},
'Algebra:Equations':{
objective:'Solve a linear equation and verify the result by substitution.',
examples:[{prompt:'Solve 3x + 4 = 19.',work:'Subtract 4 from both sides: 3x = 15. Divide both sides by 3: x = 5. Check: 3(5)+4=19.',result:'x = 5'},{prompt:'Solve x/2 - 1 = 6.',work:'Add 1: x/2 = 7. Multiply by 2: x = 14.',result:'x = 14'}],
misconception:'Whatever operation you apply to one side of an equation must also be applied to the other.',
practice:[{prompt:'Solve 4x - 7 = 13.',hint:'Add 7 first.',solution:'4x = 20, so x = 5.'},{prompt:'Solve 2(x + 3) = 18.',hint:'Divide by 2 before subtracting.',solution:'x + 3 = 9, so x = 6.'}],
transfer:'Invent an equation whose solution is 8, exchange it with a peer, and verify the answer.'},
'Classical ML:Train and test splits':{
objective:'Separate model fitting, selection and final evaluation without leaking information.',
examples:[{prompt:'Where should normalization parameters come from?',work:'Split records first. Compute the mean and standard deviation on training data. Apply those fixed values to validation and test data.',result:'Training data only.'},{prompt:'Why keep a test set untouched?',work:'Choose features and hyperparameters using training and validation data. Evaluate the final chosen model once on held-out test records.',result:'To estimate generalization without tuning to test results.'}],
misconception:'Using the test set repeatedly for model selection makes the reported score overly optimistic.',
practice:[{prompt:'A dataset has 1,000 records and a 70/15/15 split. How many test records?',hint:'15% of 1,000.',solution:'150 test records.'},{prompt:'Can you fill missing values using the overall dataset mean before splitting?',hint:'Would this use information from test records?',solution:'No. Fit the imputer on training data only.'}],
transfer:'Draw a complete model evaluation pipeline with training, validation, test and preprocessing.'},
'Deep learning:Neurons':{
objective:'Compute a weighted sum, add bias and apply a simple activation.',
examples:[{prompt:'Compute a neuron pre-activation.',work:'Inputs [2, 1], weights [3, -1], bias 2. Compute 2×3 + 1×(-1) + 2.',result:'7'},{prompt:'Apply ReLU.',work:'ReLU(z) = max(0, z). For z = -3, output is 0. For z = 7, output is 7.',result:'ReLU(-3)=0; ReLU(7)=7.'}],
misconception:'A neuron does not simply average its inputs; weights, bias and activation determine its output.',
practice:[{prompt:'Compute z for x=[1,2], w=[4,3], b=-1.',hint:'Multiply matching entries and add the bias.',solution:'1×4 + 2×3 - 1 = 9.'},{prompt:'What does ReLU return for z=-2?',hint:'Compare z with zero.',solution:'0'}],
transfer:'Calculate outputs for three sample inputs and explain how changing bias affects them.'}
};
