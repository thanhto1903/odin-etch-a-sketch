const userInput = document.getElementById("userInput");
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");
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

container.addEventListener("mouseover", (event) => {
  if (event.target.className === "box") {
    const targetBox = event.target;
    targetBox.classList.add("changeBackgroundColor");
  }
});

resetBtn.addEventListener("click", () => {
  container.replaceChildren();
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
