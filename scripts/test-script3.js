// Get calculator display for manipulating
const calcDisplay = document.querySelector(".output");

// Variables for later use
const displayArry = [];
  console.log(displayArry);




let operator = undefined;

let numberTwo = undefined;

let operatorValue = undefined;

// Func for number button press
const buttPress = (event) => {
  displayArry.push(event.value);
  const modifier = displayArry.toString();
  const displayActual1 = modifier.replaceAll("," , "");
  calcDisplay.innerHTML = displayActual1;
  } 

// Func for operator press
const opPress = (event) => {
  operatorValue = (event.value);
  console.log(operatorValue);
  calcDisplay.innerHTML = (event.value);
  numberOne = displayActual1;
  console.log(numberOne);
}

// Func for clear all - clears displayArry
const clearAll = () => {
  calcDisplay.innerHTML = "0";
  displayArry.length = 0;

}








// *** REFERENCES
// onlclick"(this)" method - https://www.w3schools.com/jsref/event_onclick.asp