const GRID_CONTAINER_WIDTH = 520;
const BORDER_SIZE = 2;
const DEFAULT_SQUARE_NUMBER = 16;

// function creates a 16*16 grid (in combination with css) of square divs inside a grid container
// Use div with break class to break one line after n squares if dimensions are n*n
// Calculate width and height of a single square based on total width of a grid-container and border sizes
function createGrid() {
    const squareSize = GRID_CONTAINER_WIDTH / DEFAULT_SQUARE_NUMBER - BORDER_SIZE;
    for (let i = 0; i < DEFAULT_SQUARE_NUMBER; i++) {
        for (let j = 0; j < DEFAULT_SQUARE_NUMBER; j++) {
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

// function will create a button inside a div that resets the entire game to default number of squares
function createResetBtn() {
    const reset = document.createElement('div');
    const resetBtn = document.createElement('button');
    reset.className = "reset";
    resetBtn.className = "reset-btn";
    resetBtn.textContent = "Reset";
    optionsContainer.appendChild(reset);
    reset.appendChild(resetBtn);

    reset.addEventListener('click', resetGrid);
}

// Reset hovered squares to default condition
function resetGrid(e) {
    const hoveredSquares = document.querySelectorAll('.hovered');
    hoveredSquares.forEach((square) => square.classList.remove('hovered'));
}

// function will create a possibility of choosing number of squares in a row
function createChoice() {
    const choice = document.createElement('div');
    choice.className = "choice";
    choice.textContent = "Select number of squares";
    optionsContainer.appendChild(choice);
}

const gridContainer = document.querySelector('.grid-container');
const optionsContainer = document.querySelector('.options-container');
createGrid();
checkHover();
createResetBtn();
createChoice();
