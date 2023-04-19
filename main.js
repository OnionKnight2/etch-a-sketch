const GRID_CONTAINER_WIDTH = 580;

// function creates a 16*16 grid (in combination with css) of square divs inside a grid container
// Use div with break class to break one line after n squares if dimensions are n*n
// Calculate width and height of a single square based on total width of a grid-container
function createGrid() {
    const squareSize = GRID_CONTAINER_WIDTH / 20 - 2;
    console.log(squareSize);
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            const div = document.createElement('div');        
            div.className = "square";
            div.style.height = `${squareSize}px`;
            div.style.width = `${squareSize}px`;
            gridContainer.appendChild(div);
        }
        const br = document.createElement('div');
        br.className = "break";
        gridContainer.appendChild(br);
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
