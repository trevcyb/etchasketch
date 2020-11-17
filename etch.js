const container = document.querySelector("#container");
let bgcolor = "black";

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        container.appendChild(cell).className = "grid-item";
    };

    let chng = container.querySelectorAll("div");
    chng.forEach(chng => chng.addEventListener("mouseover", function() {
        chng.style.backgroundColor = bgcolor;
    }));

}



makeRows(16, 16);