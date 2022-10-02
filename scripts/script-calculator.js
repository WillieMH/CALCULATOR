const displayArry = [];
console.log(displayArry);

const buttPress = (event) => {
  if ((event.value).includes(1) || (event.value).includes(2) || (event.value).includes(3) || (event.value).includes(4) || (event.value).includes(5) || (event.value).includes(6) || (event.value).includes(7) || (event.value).includes(8) || (event.value).includes(9) || (event.value).includes(0) || (event.value).includes(".")) {
  displayArry.push(event.value);
  const modifier = displayArry.toString();
  const displayActual1 = modifier.replaceAll("," , "");
  calcDisplay.innerHTML = displayActual1;
  } else if ((event.value).includes("+") || (event.value).includes("-") || (event.value).includes("*") || (event.value).includes("/")) {
    operator = (event.value);
    calcDisplay.innerHTML = operator;
  }
}

