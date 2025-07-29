function calculate() {
  // Get the values from the input fields on the page and convert them to numbers
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  var result;

  // Perform calculation based on the selected operator
  if (operator === "+") {
    result = num1 + num2; // Addition
  } else if (operator === "-") {
    result = num1 - num2; // Subtraction
  } else if (operator === "*") {
    result = num1 * num2; // Multiplication
  } else if (operator === "/") {
    result = num1 / num2; // Division
  } else if (operator === "%") {
    result = num1 % num2; // Modulus (remainder)
  } else {
    result = "Invalid operator"; // Handle unexpected operator input
  }

  // Display the result on the page inside the element with id "result"
  document.getElementById("result").innerText = "Result: " + result;
}
