// 1.1 Skriv funktionerna som anropas i myCalculator så att
// myCalculator kan fungera.

// 1.2 Gör om myCalculator så att den använder if och else

function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}
function myAddFunction(num1, num2) {
  return num1 + num2;
}

const mySubtractFunction = (num1, num2) => {
  return num1 - num2;
};

const myMultiplyFunction = (num1, num2) => {
  return num1 * num2;
};

function myDivisionFunction(num1, num2) {
  return num1 / num2;
}

console.log(myCalculator("+", 5, 3)); // Calls myAddFunction(5, 3), returns 8
console.log(myCalculator("-", 5, 3)); // Calls mySubtractFunction(5, 3), returns 2
console.log(myCalculator("*", 5, 3)); // Calls myMultiplyFunction(5, 3), returns 15
console.log(myCalculator("/", 5, 0)); // Calls myDivisionFunction(5, 0), returns "Error: Division by zero!"
console.log(myCalculator("%", 5, 3)); // Unknown operator, returns "Error: operator not found!"
