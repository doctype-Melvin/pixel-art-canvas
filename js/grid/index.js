export const gridSection = document.createElement("section");
gridSection.classList.add("grid");
gridSection.textContent = "Grid";

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

let color = "black";

let fill = false;
export const setFill = () => (fill = !fill);
export const setColor = (value) => (color = value);

export const cellFactory = (number) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("data-cell", number);
  cell.style.backgroundColor = "white";
  cell.addEventListener("click", (e) => {
    if (fill) {
      [...document.querySelectorAll(".cell")]
        .filter(
          (cell) =>
            cell.style.backgroundColor === e.target.style.backgroundColor
        )
        .forEach((cell) => {
          cell.style.backgroundColor = color;
        });
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

  for (let i = 0; i < resolution * resolution; i++) {
    const cell = cellFactory(i);
    gridContainer.append(cell);
  }
};

export const resetGrid = (value) => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(value, cellFactory);
};

gridSection.append(gridContainer);
createGrid(8, cellFactory);
