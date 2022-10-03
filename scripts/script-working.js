const calculator = {
  displayValue: 0,
  storedNumber: null,
  operator: null,
};

console.log(calculator);

const calcDisplay = document.querySelector(".output");

const displayArry = [];
// const modifier = displayArry.toString();
// const workingNumber = modifier.replaceAll("," , "");
// calcDisplay.innerHTML = workingNumber;
console.log(displayArry);

// Adding numbers from number keypresses inc .
const numPress = (event) => {
  displayArry.push(event.value);
  const modifier = displayArry.toString(); //remove this step, it still goes in as a string, convert to number during equalPress func
  const workingNumber = modifier.replaceAll("," , "");
  calculator.displayValue = workingNumber;
  calcDisplay.innerHTML = workingNumber;
}

// Operation button press
const opPress =  (event) => {
  console.log(event.value);
  calculator.storedNumber = calculator.displayValue;
  calculator.displayValue = 0;
  calculator.operator = event.value;
  calcDisplay.innerHTML = event.value;
  displayArry.length = 0;
}

// Equal button press
const equalPress = () => { //need if statements to carry out proper calculation // needs an "if" for binary add 0.1 + 0.2
  if (calculator.operator === "+") {resultSum = Number(calculator.storedNumber) + Number(calculator.displayValue);
  console.log(resultSum);
  calculator.displayValue = resultSum;
  calcDisplay.innerHTML = calculator.displayValue;
} else if (calculator.operator === "*") {resultSum = Number(calculator.storedNumber) * Number(calculator.displayValue);
  console.log(resultSum);
  calculator.displayValue = resultSum;
  calcDisplay.innerHTML = calculator.displayValue;
} else if (calculator.operator === "/") {resultSum = Number(calculator.storedNumber) / Number(calculator.displayValue);
  console.log(resultSum);
  calculator.displayValue = resultSum;
  calcDisplay.innerHTML = calculator.displayValue;
} else if (calculator.operator === "-") {resultSum = Number(calculator.storedNumber) - Number(calculator.displayValue);
console.log(resultSum);
calculator.displayValue = resultSum;
calcDisplay.innerHTML = calculator.displayValue;}
}

// All clear button
const clearAll = () => {
  calculator.displayValue = 0;
  calculator.storedNumber = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  displayArry.length = 0;
  calcDisplay.innerHTML = calculator.displayValue;
}

// Backspace button
const backSpace = () => {
  displayArry.pop();
  const modifier = displayArry.toString(); //remove this step, it still goes in as a string, convert to number during equalPress func
  const workingNumber = modifier.replaceAll("," , "");
  calculator.displayValue = workingNumber;
  calcDisplay.innerHTML = workingNumber;
}

// +/- button
const negatiseNumber = () => {
  if (displayArry[0] === "-") {
    displayArry.shift();
    const modifier = displayArry.toString(); //remove this step, it still goes in as a string, convert to number during equalPress func
    const workingNumber = modifier.replaceAll("," , "");
    calculator.displayValue = workingNumber;
    calcDisplay.innerHTML = workingNumber;
  } else {
    displayArry.unshift("-");
    const modifier = displayArry.toString(); //remove this step, it still goes in as a string, convert to number during equalPress func
    const workingNumber = modifier.replaceAll("," , "");
    calculator.displayValue = workingNumber;
    calcDisplay.innerHTML = workingNumber;
  }
}

/*  REFERENCES
    ==========
  - Number(string); https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
  - onlclick"(this)" method - https://www.w3schools.com/jsref/event_onclick.asp
 */

/*  NOTES:
    ======
  + Capitalisation can be important, in equalPress, number(string); is very different to
    Number(string);
  + 
*/