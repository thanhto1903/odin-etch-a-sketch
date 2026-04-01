// function getUserInput() {
//   const userInput = document.getElementById("userInput");
//   userInput.addEventListener("input", function () {
//     let currentInput = userInput.value;
//   });
//   return currentInput;
// }

const userInput = document.getElementById("userInput");
let boxNumber;
let boxNumberSquare;
let boxWidth;
userInput.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    event.preventDefault();
    boxNumber = userInput.value;
    boxNumberSquare = boxNumber * boxNumber;
    boxWidth = calBoxWidth(boxNumber);
  }
});

function calBoxWidth(boxNumber) {
  let boxWidthHeight = 960 / boxNumber;
  return boxWidthHeight;
}
