const root = document.getElementById("root");
const image = document.createElement("img");
const button = document.createElement("button");
const stylesSheet = document.createElement("style");
button.setAttribute("type", "button");
const buttonText = "New Image";
button.textContent = buttonText;
const url = "https://dog.ceo/api/breeds/image/random";

const styles = `
    * { 
        margin: 0;
        padding: 0;
    }
    #root {
        padding: 10px;
    }
    img {
        width : 300px;
        height : 200px;
        object-fit : cover;
        margin : auto;

        }
    button {
        background-color: violet;
        padding: 5px 10px;
        width: 120px;
        margin: auto;
        margin-top: 20px;
        border: none;
    }
    img, button {
        border-radius: 10px;
        display: block;
    }
    button:active {
        background-color: brown;
        color: white;
    }
    `;
stylesSheet.textContent = styles;
document.head.appendChild(stylesSheet);

root.appendChild(image);
root.appendChild(button);
function getNewImage() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => image.setAttribute("src", data.message));
}
getNewImage();
button.addEventListener("click", getNewImage);
