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