import { controllerSection } from "./controller/index.js";
import { gridSection, resetGrid, setFill, setColor } from "./grid/index.js";

const app = document.querySelector('[data-js="app"');

app.append(controllerSection, gridSection);

let resolution = 8;

const sizerButtons = [...document.querySelectorAll(".resolution-button")];
const resetButton = document.querySelector(".reset-button");
const fillButton = document.querySelector(".fill-button");

sizerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resolution = Number(e.target.dataset.resolution);
    resetGrid(resolution);
  });
});

resetButton.addEventListener("click", () => {
  resetGrid(resolution);
});

fillButton.addEventListener("click", () => {
  const cells = [...document.querySelectorAll(".cell")];
  setFill(true);
});

const colorPicker = document.querySelector(".color-picker");
colorPicker.addEventListener("change", (e) => {
  setColor(e.target.value);
});
