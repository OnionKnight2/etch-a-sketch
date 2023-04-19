// function creates a 16*16 grid (in combination with css) of square divs inside a grid container
function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');        
            div.className = "square";
            gridContainer.appendChild(div);
        }
    }
}

// function checks if there is a hover effect on the square grids
function checkHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', changeColor)
    });

}

// function changes div's color if it is hovered over
function changeColor(e) {
    e.target.classList.add("hovered");
}

const gridContainer = document.querySelector('.grid-container');
createGrid();
checkHover();
