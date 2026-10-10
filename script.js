// 1. Get elements from the page
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const resultText = document.getElementById("result");

// 2. Calculate function
function calculate() {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);
  const op = operatorSelect.value;
  let result;

  // Check that both boxes are filled
  if (num1Input.value === "" || num2Input.value === "") {
    resultText.textContent = "Please enter both numbers";
    return;
  }

  // Pick the operation
  if (op === "+") {
    result = a + b;
  } else if (op === "-") {
    result = a - b;
  } else if (op === "*") {
    result = a * b;
  } else if (op === "/") {
    // Cannot divide by zero
    result = b === 0 ? "Cannot divide by 0" : a / b;
  } else if (op === "%") {
    result = b === 0 ? "Cannot divide by 0" : a % b;
  } else if (op === "**") {
    result = a ** b;
  }

  resultText.textContent = `${a} ${op} ${b} = ${result}`;
}

// 3. Clear function
function clearAll() {
  num1Input.value = "";
  num2Input.value = "";
  resultText.textContent = "Result will show here";
}

// 4. Run functions when buttons are clicked
calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearAll);