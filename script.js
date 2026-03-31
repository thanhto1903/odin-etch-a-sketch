// function getUserInput() {
//   const userInput = document.getElementById("userInput");
//   userInput.addEventListener("input", function () {
//     let currentInput = userInput.value;
//   });
//   return currentInput;
// }

const userInput = document.getElementById("userInput");
let boxNumber;
userInput.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    event.preventDefault();
    boxNumber = event.value;
  }
});

function calBoxWidth(boxNumber) {
  let boxWidthHeight = 960 / boxNumber;
  return boxWidthHeight;
}
