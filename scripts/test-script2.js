const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

console.log(calculator);

const calcDisplay = document.querySelector(".output");

const displayArry = [];
// const modifier = displayArry.toString();
// const workingNumber = modifier.replaceAll("," , "");
// calcDisplay.innerHTML = workingNumber;


console.log(displayArry);

const numPress = (event) => {
  displayArry.push(event.value);
  const modifier = displayArry.toString(); //remove this step, it still goes in as a sting, convert to number during equalPress func
  const workingNumber = modifier.replaceAll("," , "");
  calculator.displayValue = workingNumber;
  calcDisplay.innerHTML = workingNumber;
}

const opPress =  (event) => {
  console.log(event.value);
  calculator.firstOperand = calculator.displayValue;
  calculator.displayValue = 0;
  calculator.operator = event.value;
  calcDisplay.innerHTML = event.value;
  displayArry.length = 0;
}

// const equalPress func here.

// need to add a clear all button to calc.
const clearAll = (event) => {
  calcDisplay.innerHTML = "0";
  displayArry.length = 0;
}

