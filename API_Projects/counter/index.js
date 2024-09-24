// main div
const main = document.createElement("div");
main.setAttribute("id", "main");
// board to show number
const numBoard = document.createElement("div");
numBoard.setAttribute("class", "numBoard");
//button group
const buttons = document.createElement("div");
buttons.setAttribute("class", "buttons");
//buttons
const increaseBtn = document.createElement("button");
increaseBtn.setAttribute("class", "increaseBtn");
increaseBtn.textContent = "Increase";
const decreaseBtn = document.createElement("button");
decreaseBtn.setAttribute("class", "decreaseBtn");
decreaseBtn.textContent = "Decrease";
const resetBtn = document.createElement("button");
resetBtn.setAttribute("class", "resetBtn");
resetBtn.textContent = "Reset";

const url = "https://x-colors.yurace.pro/api/random";
let color;
//style
const styleSheet = document.createElement("style");
styles = `
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: gold;
    }
    #main {
        width : 320px;
        height : 400px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        
        padding : 20px 10px;

    }
    .numBoard {
        width: 150px;
        font-size: 80px;
        color: gray;
        padding: 8px 10px;
        background-color: white;
        text-align: center;
        border-radius: 8px;
        margin: auto;
        }
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 280px;
        margin: auto;
        margin-top: 80px;
    }
    button {
        font-size: 16px;
        border: none;
        padding: 5px 8px;
        width: 90px;
        background-color: black;
        color: white;
        border-radius: 5px;}
        
        `;
styleSheet.textContent = styles;

// attaching elements to the html

document.head.appendChild(styleSheet);
document.body.appendChild(main);

main.appendChild(numBoard);
main.appendChild(buttons);
buttons.appendChild(decreaseBtn);
buttons.appendChild(resetBtn);
buttons.appendChild(increaseBtn);

numBoard.textContent = 0;

//functions
async function getColor() {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => (color = data.hex));

  document.body.style.backgroundColor = color;
}

function handleIncrease() {
  numBoard.textContent++;
  if (numBoard.textContent % 10 === 0 || numBoard.textContent === 0) {
    getColor();
  }
}
function handleDecrease() {
  if (numBoard.textContent > 0) {
    numBoard.textContent--;
    if (numBoard.textContent % 10 === 0 || numBoard.textContent === 0) {
      getColor();
    }
  }
}

function handleReset() {
  numBoard.textContent = 0;
  getColor();
}

//event listener
increaseBtn.addEventListener("click", handleIncrease);
decreaseBtn.addEventListener("click", handleDecrease);
resetBtn.addEventListener("click", handleReset);
