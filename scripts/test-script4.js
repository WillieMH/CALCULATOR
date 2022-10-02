// Selectors
const numButtons = document.querySelectorAll(".numberButton");
const operationButtons = document.querySelectorAll(".operatorButton");
const equalsButton = document.querySelector(".equalButton");
const allClearButton = document.querySelector(".clearAll");
const previousNumber = document.querySelector(".prevNumber");
const newNumber = document.querySelector(".workingNumber");

// Functions
// const displayArry = [];
//   console.log(displayArry);

const updateDisplay = (event) => {
  displayArry.push(event.value);
  const modifier = displayArry.toString();
  const displayActual1 = modifier.replaceAll("," , "");
  newNumber.innerHTML = displayActual1;
  }


// Event Listeners
numButtons.addEventListener("click", updateDisplay);
