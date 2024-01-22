export const gridSection = document.createElement("section");
gridSection.classList.add("grid");
gridSection.textContent = "Grid";

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

const cellFactory = () => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
};

const createGrid = (resolution, callback) => {
  gridContainer.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${resolution}, 1fr)`;

  for (let i = 0; i < resolution * resolution; i++) {
    const cell = callback();
    gridContainer.append(cell);
  }
};

const resetGrid = (callback, value) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  callback(value, cellFactory);
};

gridSection.append(gridContainer);
createGrid(8, cellFactory);
