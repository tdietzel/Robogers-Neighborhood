# Describe: neighbor()

# Test: 
"It should return true if a number is entered into the input"
# Code:
neighbor(83);
# Expected Output: 
True

# Test:
"It should remove any spaces and return one number"
# Code:
const userInput = " 13 ";
neighbor(userInput);
# Expected Output:
13

# Test:
"It should return a response if the number contains a 3"
# Code:
const userInput = "23";
neighbor(userInput);
# Expected Output:
"Won't you be my neighbor?"

# Test:
"It should return a different response if the number contains 2"
# Code:
const userInput = "20";
neighbor(userInput);
# Expected Output:
"Boop!"

# Test:
"It should return a different response if the number contains 1"
# Code:
const userInput = "11";
neighbor(userInput);
# Expected Output:
"Beep!"

# Describe: returnList()

# Test:
"It should return a list of values from 0 to the user's inputter number"
# Code:
returnList(7);
# Expected Output:
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |