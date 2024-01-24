export const gridSection = document.createElement("section");
gridSection.classList.add("grid");

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

// Traversal algorithm
export const fillBucket = (rowStart, columnStart, resolution, color) => {
  // Store color of clicked cell
  const clickedCellColor = document.querySelector(
    `.cell[data-row="${rowStart}"][data-column="${columnStart}"]`
  ).style.backgroundColor;

  // Recursive function
  const findCells = (row, column) => {
    // Base case - don't go out of bounds
    if (row < 0 || row >= resolution || column < 0 || column >= resolution)
      return;

    // Recursive case
    const currentCell = document.querySelector(
      `.cell[data-row="${row}"][data-column="${column}"]`
    );

    const currentCellColor = currentCell.style.backgroundColor;

    // Change cell color if it matches the clicked cell color
    // and recursively call the function on the adjacent cells
    if (currentCellColor === clickedCellColor) {
      currentCell.style.backgroundColor = color;
      findCells(row, column + 1);
      findCells(row, column - 1);
      findCells(row + 1, column);
      findCells(row - 1, column);
    }
  };
  findCells(rowStart, columnStart);
};

// Creates cells with coordinates
// Alias creater callback
const cellFactory = (row, column, fill, color) => {
  const cell = document.createElement("div");

  cell.classList.add("cell");
  cell.style.backgroundColor = "white";

  cell.dataset.row = row;
  cell.dataset.column = column;
  return cell;
};

export const createGrid = (resolution) => {
  gridContainer.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${resolution}, 1fr)`;

  for (let row = 0; row < resolution; row++) {
    for (let column = 0; column < resolution; column++) {
      const cell = cellFactory(row, column);
      gridContainer.append(cell);
    }
  }
};

export const resetGrid = (resolution) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(resolution);
};

gridSection.append(gridContainer);
