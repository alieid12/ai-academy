import {foundationStudios} from './foundation-studios.js';
import {programmingStudios} from './programming-studios.js';
import {advancedStudios} from './advanced-studios.js';
import {foundationExpansion} from './foundation-expansion.js';
import {pythonExpansion} from './python-expansion.js';
// Original beginner-first learning studios: short, scaffolded investigations.
// Each studio is self-contained and can be completed with pencil and paper.
export const learningStudios={
 ...foundationStudios,
 ...programmingStudios,
 ...advancedStudios,
 ...foundationExpansion,
 ...pythonExpansion,
 'Numeracy:Counting and place value':{
 objective:'Read two-digit numbers and explain the value of each digit.',
 vocabulary:[['digit','One symbol from 0 to 9.'],['tens','Groups of ten objects.'],['ones','Objects left after grouping tens.']],
 explanation:'Our number system groups objects in tens. In 34, the 3 means three groups of ten (30), and the 4 means four ones. The position changes the value: 43 is four tens and three ones, not the same number.',
 worked:[['Build 26','Make two groups of ten counters and six single counters. 20 + 6 = 26.'],['Compare 26 and 62','26 has two tens; 62 has six tens. Since six tens is more than two tens, 62 is larger.']],
 exercises:[['What is the value of the 7 in 73?','Seven tens means 70.'],['Write 58 as tens plus ones.','50 + 8.'],['Which is larger, 49 or 94?','94: nine tens are greater than four tens.']],
 misconception:'A digit is not always worth its face value. In 70, the 7 represents 70, not 7.',
 challenge:'Explain how 105 uses hundreds, tens and ones. Why is the zero important?'
 },
 'Numeracy:Multiplication':{
 objective:'Use equal groups to multiply and check a result with addition.',
 vocabulary:[['factor','A number being multiplied.'],['product','The result of multiplication.']],
 explanation:'Multiplication is a shortcut for adding equal-sized groups. Three bags with four oranges in each bag contain 4 + 4 + 4 = 12 oranges. We write 3 × 4 = 12. Three groups of four and four groups of three give the same total.',
 worked:[['3 × 4','Draw three rows of four dots. Count 4, 8, 12.'],['5 × 2','Five pairs make 2 + 2 + 2 + 2 + 2 = 10.']],
 exercises:[['2 × 6','12, because 6 + 6 = 12.'],['4 × 3','12, because 3 + 3 + 3 + 3 = 12.'],['Three boxes each hold five pencils. How many pencils?','15 pencils.']],
 misconception:'Multiplication does not always make a number bigger: multiplying by zero gives zero, and multiplying by one keeps the number.',
 challenge:'Use an array to explain why 6 × 4 equals 4 × 6.'
 },
 'Numeracy:Division':{
 objective:'Share objects equally and connect division to multiplication.',
 vocabulary:[['divide','Split into equal groups.'],['quotient','The answer to a division.'],['remainder','What cannot be shared equally.']],
 explanation:'Division can mean sharing equally. If twelve cookies are shared among three people, give each person one cookie at a time until none remain. Each gets four. We write 12 ÷ 3 = 4. Check by multiplying 3 × 4 = 12.',
 worked:[['10 ÷ 2','Make two equal groups of five. Each group has 5.'],['13 ÷ 4','Four groups can each receive three, with one left over: 3 remainder 1.']],
 exercises:[['8 ÷ 2','4.'],['15 ÷ 3','5.'],['Why is 9 ÷ 0 undefined?','No number multiplied by 0 equals 9.']],
 misconception:'Division by zero is not allowed. A remainder is not an error; it describes items left over.',
 challenge:'Explain the difference between 12 ÷ 3 and 3 ÷ 12.'
 },
 'Numeracy:Decimals':{
 objective:'Read decimal tenths and hundredths and relate them to money.',
 vocabulary:[['decimal point','Separates whole units from fractional parts.'],['tenth','One of ten equal parts.'],['hundredth','One of one hundred equal parts.']],
 explanation:'The first place after the decimal point counts tenths. The second counts hundredths. In 2.35, there are two wholes, three tenths and five hundredths. This is 2 + 0.3 + 0.05.',
 worked:[['Read 0.7','Seven tenths = 7/10.'],['Add 1.20 + 0.35','Align decimal points: 1.20 + 0.35 = 1.55.']],
 exercises:[['Which is larger: 0.5 or 0.25?','0.50 is larger than 0.25.'],['Write three tenths as a decimal.','0.3.'],['What is 2.50 + 0.25?','2.75.']],
 misconception:'More digits after a decimal do not always mean a larger number: 0.9 is greater than 0.12.',
 challenge:'Show with a drawing why 0.5 = 0.50.'
 },
 'Python:Syntax and printing':{
 objective:'Write, run, and modify a first Python statement.',
 vocabulary:[['program','Instructions a computer can execute.'],['string','Text enclosed in quotation marks.'],['output','Information a program displays or produces.']],
 explanation:'Python reads instructions in order. The function print() displays output. Text must be enclosed in matching quotation marks: print("Hello"). Parentheses hold the information given to print. You can run Python in a local editor or an accessible online interpreter.',
 worked:[['Display a greeting','print("Hello, learner!") displays Hello, learner!'],['Display a number','print(2 + 3) displays 5 because Python adds numbers before printing.']],
 exercises:[['What does print("AI") display?','AI, without quotation marks.'],['What does print(4 * 2) display?','8. The * symbol means multiply.'],['Fix print("Hi)','Add the missing closing quote: print("Hi").']],
 misconception:'print("2 + 3") shows the text 2 + 3, while print(2 + 3) calculates and displays 5.',
 challenge:'Write three print statements: one greeting, one sum, and one message explaining the result.'
 },
 'Classical ML:Train and test splits':{
 objective:'Explain why training and testing must use separate examples.',
 vocabulary:[['training set','Examples used to fit a model.'],['test set','Held-out examples used to estimate performance.'],['data leakage','Information from outside training improperly influencing the model.']],
 explanation:'A model can memorize examples rather than learn a general rule. To estimate how it handles new cases, hold out test data before choosing or training the model. Use training data for learning, validation data for model selection, and test data for a final estimate.',
 worked:[['Split 100 observations','One possible split is 70 training, 15 validation and 15 test observations.'],['Prevent leakage','Calculate a mean for missing-value replacement using training rows only. Apply that same mean to validation and test rows.']],
 exercises:[['Why not test on training examples?','The result can be too optimistic because the model has already seen them.'],['When should a test set be selected?','Before fitting preprocessing or the model.'],['Should you repeatedly tune using test results?','No; that leaks information from the test set into model selection.']],
 misconception:'A random split is not always suitable. Time-series data usually needs chronological evaluation, and grouped data needs group-aware splitting.',
 challenge:'Design a split for patient records where the same patient appears multiple times.'
 }
};
