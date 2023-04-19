const GRID_CONTAINER_WIDTH = 500;
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
    document.querySelector('.choice-range').value = DEFAULT_SQUARE_NUMBER;
    hoveredSquares.forEach((square) => square.classList.remove('hovered'));
}

// function will create a possibility of choosing number of squares in a row
// It will use range input type, defined by min, max, step, value output and with a label
function createChoice() {
    const rangeContainer = document.createElement('div');
    const choiceDiv = document.createElement('div');
    const choiceRange = document.createElement('input');
    const label = document.createElement('label');
    const output = document.createElement('output');
    rangeContainer.className = "choice-container";
    choiceDiv.className = "choice-div"
    choiceRange.className = "choice-range";
    choiceRange.type = "range";
    choiceRange.min = 1;
    choiceRange.max = 100;
    choiceRange.step = 1;
    choiceRange.value = DEFAULT_SQUARE_NUMBER;
    label.for = "choiceRange";
    label.textContent = "Select number of squares:";
    output.className = "output";
    output.textContent = DEFAULT_SQUARE_NUMBER;

    optionsContainer.appendChild(rangeContainer);
    rangeContainer.appendChild(label);
    rangeContainer.appendChild(choiceDiv);
    choiceDiv.appendChild(choiceRange);
    choiceDiv.appendChild(output);
}

const gridContainer = document.querySelector('.grid-container');
const optionsContainer = document.querySelector('.options-container');
createGrid();
checkHover();
createResetBtn();
createChoice();
