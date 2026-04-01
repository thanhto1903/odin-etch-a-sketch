// function getUserInput() {
//   const userInput = document.getElementById("userInput");
//   userInput.addEventListener("input", function () {
//     let currentInput = userInput.value;
//   });
//   return currentInput;
// }

const userInput = document.getElementById("userInput");
const container = document.querySelector(".container");
let boxNumber;
let boxNumberSquare;
let boxWidth;

userInput.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    event.preventDefault();
    boxNumber = userInput.value;
    boxNumberSquare = boxNumber * boxNumber;
    boxWidth = calBoxWidth(boxNumber);

    for (let i = 0; i < boxNumberSquare; i++) {
      createBox(boxWidth);
    }
  }
});

function calBoxWidth(boxNumber) {
  let boxWidthHeight = 100 / boxNumber;
  return boxWidthHeight;
}

function createBox(boxWidth) {
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.style.width = `${boxWidth}%`;
  newBox.style.height = `${boxWidth}%`;
  container.appendChild(newBox);
}

// Remove class container
