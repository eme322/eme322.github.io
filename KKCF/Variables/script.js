function calculate() {
  // Get the values from the page
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  var result;

  // Use arithmetic operators
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "%") {
    result = num1 % num2;
  } else {
    result = "Invalid operator";
  }

  // Show result in the page
  document.getElementById("result").innerText = "Result: " + result;
}
