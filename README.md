# Calculator App Built with React JS

This project was built to calculate simple mathematical operations: +, -, /, *

It will automatically perform the calculations as you add more digits/operators into the calculation or you can press the '=' button to manually perform the calculations.

## Demo

Check it out here: [https://hoaho-calculator-app.netlify.app/](https://hoaho-calculator-app.netlify.app/)

## Functions Explained

### `updateCalc()`

This function takes a single argument value, which represents the user's input (e.g. a digit, operator, or decimal point).

It first checks if the value is an operator (e.g. +, -, *, /) and if the current calc state is empty or if the last character of calc is also an operator. If either of these conditions is true, the function returns early and does not update the display or calculate the result.

If the value is not an operator, it appends it to the current calc state using the setCalc function, which updates the calculator's display.

Finally, if the value is not an operator, the function evaluates the updated calc state plus the value using the eval function, which calculates the result of the expression as a string, and then converts it to a string using the toString function. The result is then updated using the setResult function, which updates the display of the calculator's result.

### `calculate()`

This function calculates the result of a mathematical expression entered by the user in the calculator.

The function uses the eval() function to evaluate the current value of the calc state, which represents the mathematical expression entered by the user. The result of the evaluation is returned as a number.

The result is then converted to a string using the toString() function and is set as the new value of the calc state using the setCalc() function. This updates the display of the calculator with the new result.

### `deleteLast()`

This function deletes the last character of the current value of the calc state in the calculator.

The function first checks if the current value of the calc state is empty. If it is, the function returns early and does not perform any further actions.

If the calc state is not empty, the function uses the slice() method to create a new string that consists of all characters of the calc state except for the last one. 

The slice() method takes two arguments: the starting index, which is 0 in this case, and the ending index, which is -1. The -1 ending index means that the last character of the string is excluded from the new string.

The new string is then set as the new value of the calc state using the setCalc() function, which updates the display of the calculator with the new value.

Overall, this function allows the user to delete the last character of the input in case they make a mistake while entering a mathematical expression.

### `createDigits()`

This function generates an array of JSX elements representing buttons for the digits 1 through 9 on the calculator.

The function initializes an empty array called digits and then uses a for loop to iterate over the numbers 1 through 9. For each number, the function creates a button element with the number as its label and an onClick event handler that calls the updateCalc() function with the number as a string argument.

The key attribute is also set to the current number i to ensure that each button element has a unique identifier.

Once all buttons have been generated for the digits 1 through 9, the function returns the digits array.

Overall, this function simplifies the process of creating buttons for the digits on the calculator by generating the necessary JSX elements dynamically with a loop, rather than having to manually create each button element individually.