

// // const num = document.querySelectorAll(".numberButton");
// const calcDisplay = document.querySelector(".output");

// const displayArry = [];
// // *** Only works inside buttPress func.
// // const modifier = displayArry.toString();
// // const displayActual = modifier.replaceAll("," , "");
// console.log(displayArry);

// const buttPress = (event) => {  
//   displayArry.push(event.value);
//   const modifier = displayArry.toString();
//   const displayActual = modifier.replaceAll("," , "");
//   calcDisplay.innerHTML = displayActual;
// }


// // num.addEventListener("click", numberClicked);

//getting all numbers element, other than zero which will be handled separately, to attach event listener

const numbers = document.querySelectorAll(".numberButton");


//function to add a number to the screen when clicked

const addNumber = (event) => {
  alert(event.value);
}


numbers.addEventListener("click", addNumber);