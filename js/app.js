import { controllerSection } from "./controller/index.js";
import {
  gridSection,
  createGrid,
  resetGrid,
  setFill,
  setColor,
  setResolution,
  download,
} from "./grid/index.js";

const app = document.querySelector('[data-js="app"');

app.append(gridSection, controllerSection);

let resolution = 8;

const imageFormats = ["png", "jpg", "gif"];

const sizerButtons = [...document.querySelectorAll(".resolution-button")];
const colorPicker = document.querySelector(".color-picker");
const fillButton = document.querySelector(".fill-button");
const resetButton = document.querySelector(".reset-button");
const downloadButton = document.querySelector(".download-button");

sizerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resolution = Number(e.target.dataset.resolution);
    setResolution(resolution);
    resetGrid(resolution);
  });
});

fillButton.addEventListener("click", () => {
  setFill(true);
});

resetButton.addEventListener("click", () => {
  resetGrid(resolution);
});

imageFormats.forEach((format) => {
  const name = format;
  const button = document.createElement("button");
  button.textContent = name;
  button.addEventListener("click", () => {
    download(format);
  });
  downloadButton.append(button);
});

colorPicker.addEventListener("change", (e) => {
  setColor(e.target.value);
});

createGrid(resolution);
