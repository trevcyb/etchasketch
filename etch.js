const container = document.querySelector("#container");
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
    pixels.forEach(pixel => pixel.style.backgroundColor = '#ffffff')
}

function resize() {
    let pixels = container.querySelectorAll("div");
    pixels.forEach(pixel => pixel.remove());
    let gridSize = prompt("Please enter a new grid size between 4 and 100: ");
    makeRows(gridSize);
}

function colors() {
    switch(bgcolor) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360, 100%, 50%})`;
        case 'black':
            this.style.backgroundColor = "black";
        
    }
}

document.getElementById("resize").onclick = resize;
document.getElementById("clear").onclick = clearAll;


makeRows(16);