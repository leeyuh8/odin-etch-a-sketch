

const buttonPrompt = document.querySelector("button.prompt-canvas-size");
buttonPrompt.addEventListener("click", requestCanvasSize);
let canvasPixelWidth;
function requestCanvasSize() {
    canvasWidth = +prompt("Enter a number from 1-100 to set the canvas pixel width:");
    canvasPixelWidth = 500 / canvasWidth;
    setCanvasSize();
}

const canvas = document.querySelector(".canvas");
function setCanvasSize() {
    if (canvasWidth === 0) {
        return;
    } else {
        canvas.textContent = "";
        for (let i = 0; i < Math.pow(canvasWidth, 2); i++) {
            const canvasPixel = document.createElement('div');
            canvasPixel.classList.add("canvas-pixel");
            canvasPixel.setAttribute("style", `width:${canvasPixelWidth}px; height:${canvasPixelWidth}px;`);
            canvasPixel.addEventListener("mouseover", setPixelColor);
            canvas.appendChild(canvasPixel);
        };
    }
}

function setPixelColor () {
    this.style.backgroundColor = "black";
}

function setDefaultCanvasSize () {
    for (let i = 0; i < Math.pow(16, 2); i++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add("canvas-pixel");
        canvasPixel.style.width = `${500/16}px`;
        canvasPixel.style.height = `${500/16}px`;
        canvasPixel.addEventListener("mouseover", setPixelColor);
        canvas.appendChild(canvasPixel);
    };
}
setDefaultCanvasSize();

const buttonClear = document.querySelector("button.clear-canvas");
buttonClear.addEventListener("click", clearCanvas);
function clearCanvas() {
    let clearPixels = document.querySelectorAll(".canvas > *");
    clearPixels.forEach((pixel) => pixel.style.backgroundColor = "transparent");
}