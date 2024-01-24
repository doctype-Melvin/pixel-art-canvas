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

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Mini Pixel Art Maker";

app.append(title, gridSection, controllerSection);

let resolution = 8;

const imageFormats = ["png", "jpg", "gif"];

const resolutionButtons = [...document.querySelectorAll(".resolution-button")];
const colorPicker = document.querySelector(".color-picker");
const fillButton = document.querySelector(".fill-button");
const downloadButton = document.querySelector(".download-button");

resolutionButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resolution = Number(e.target.dataset.resolution);
    setResolution(resolution);
    resetGrid(resolution);
  });
});

fillButton.addEventListener("click", () => {
  setFill(true);
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
