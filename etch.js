const container = document.querySelector("#container");
const chosenColor = document.querySelector("#chosenColor");
const colorbuttons = document.querySelectorAll(".colorbtn");

let bgcolor = 'black';

function makeRows (gridSize) {
    Area = gridSize*gridSize;
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);

    for(c = 0; c < (Area); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };

    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", colorGen));
    
}

function clearAll() {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.style.backgroundColor = '#ffffff');
}

function resize() {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    let gridSize = prompt("Please enter a new grid size between 4 and 100: ");
    if (gridSize < 4) {
        alert("Grid Size too low");
        gridSize = 4;
    } else if (gridSize > 100) {
        alert("Grid Size too high");
        gridSize = 100;
    }
    makeRows(gridSize);
}

function colorGen() {
    switch (bgcolor) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%)`;
            break;
        case 'black':
            this.style.backgroundColor = 'black';
            break;
        default:
            this.style.backgroundColor = bgcolor;
            break;
    }
}

function selectColors(event) {
    switch(event.target.dataset.color) {
        case 'rainbow':
            bgcolor = 'rainbow';
            break;
        case 'black':
            bgcolor = 'black';
            break;
        default:
            bgcolor = 'black';
            break;
    }
}

function userSelectColors(event) {
    bgcolor = event.target.value;
}


document.getElementById("resize").onclick = resize;
document.getElementById("clear").onclick = clearAll;
chosenColor.addEventListener("input", userSelectColors, false);
chosenColor.addEventListener("change", userSelectColors, false);
colorbuttons.forEach(colorbutton => colorbutton.addEventListener("click", selectColors));


makeRows(16);