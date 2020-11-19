const container = document.querySelector("#container");
const chosenColor = document.querySelector("#chosenColor");

let bgcolor = "black";

function makeRows (gridSize) {
    Area = gridSize*gridSize;
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);

    for(c = 0; c < (Area); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };

    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", function() {
        pixel.style.backgroundColor = bgcolor;
    }));

}

function clearAll() {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.style.backgroundColor = '#ffffff');
}

function resize() {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    let gridSize = prompt("Please enter a new grid size between 4 and 100: ");
    makeRows(gridSize);
}

function selectColors(event) {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.style.backgroundColor = event.target.value);
}

function userSelectColors(event) {
    bgcolor = event.target.value;
}


document.getElementById("resize").onclick = resize;
document.getElementById("clear").onclick = clearAll;
chosenColor.addEventListener("input", userSelectColors, false);
chosenColor.addEventListener("change", userSelectColors, false);


makeRows(16);