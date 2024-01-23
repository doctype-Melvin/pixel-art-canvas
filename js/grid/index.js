export const gridSection = document.createElement("section");
gridSection.classList.add("grid");

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

let color = "black";

let fill = false;
let resolution = "";

export const setFill = () => (fill = !fill);
export const setColor = (value) => (color = value);
export const setResolution = (value) => (resolution = value);

const fillBucket = (rowStart, columnStart) => {
  // Store the color of the clicked cell
  const clickedCellColor = document.querySelector(
    `.cell[data-row="${rowStart}"][data-column="${columnStart}"]`
  ).style.backgroundColor;

  // Traversal algorithm
  const findCells = (row, column) => {
    // Base case- don't go out of bounds
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

// Creates cells with coordinates and
// adds event listener to each cell
export const cellFactory = (row, column) => {
  const cell = document.createElement("div");

  cell.classList.add("cell");
  cell.style.backgroundColor = "white";

  cell.dataset.row = row;
  cell.dataset.column = column;

  cell.addEventListener("click", (e) => {
    if (fill) {
      fillBucket(Number(e.target.dataset.row), Number(e.target.dataset.column));
      setFill();
    } else {
      e.target.style.backgroundColor = color;
    }
  });
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
  setResolution(resolution);
};

export const resetGrid = (resolution) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  setResolution(resolution);
  createGrid(resolution);
};

gridSection.append(gridContainer);

export const download = (format) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = resolution * 100;
  canvas.height = resolution * 100;

  const cells = [...document.querySelectorAll(".cell")];
  cells.forEach((cell, index) => {
    const row = Math.floor(index / resolution);
    const col = index % resolution;
    const color = window.getComputedStyle(cell).backgroundColor;
    ctx.fillStyle = color;
    ctx.fillRect(col * 100, row * 100, 100, 100);
  });

  const dataURL = canvas.toDataURL(`image/${format}`);
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `pixel-art.${format}`;
  link.click();
};
