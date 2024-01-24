import { controllerSection, download } from "./controller/index.js";
import {
  gridSection,
  fillBucket,
  createGrid,
  resetGrid,
} from "./grid/index.js";

(() => {
  const app = document.querySelector('[data-js="app"');

  // Title only shown on large screens -> style.css
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "👩🏻‍🎨 Mini Pixel Art 🎨";

  app.append(title, gridSection, controllerSection);

  // -----APP setup-----
  let resolution = 8;
  const setResolution = (value) => (resolution = value);

  let color = "";
  const setColor = (value) => (color = value);

  let fill = false;
  const setFill = () => {
    fill = !fill;
    fill
      ? fillButton.classList.add("fill-button--active")
      : fillButton.classList.remove("fill-button--active");
  };

  const imageFormats = ["png", "jpg", "gif"];

  const grabAllCells = () => {
    [...document.querySelectorAll(".cell")].forEach((cell) => {
      cell.addEventListener("click", (e) => {
        console.log("Current color", color);
        if (fill) {
          fillBucket(
            Number(e.target.dataset.row),
            Number(e.target.dataset.column),
            resolution,
            color ? color : "black"
          );
          setFill();
        } else {
          e.target.style.backgroundColor = color ? color : "black";
        }
      });
    });
  };

  // -----Initialize app-----

  createGrid(resolution);
  grabAllCells();

  // -----Apply event listeners-----

  const colorPicker = document.querySelector(".color-picker");
  const fillButton = document.querySelector(".fill-button");
  const downloadButton = document.querySelector(".download-button");

  const resolutionButtons = [
    ...document.querySelectorAll(".resolution-button"),
  ];
  resolutionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      setResolution(Number(e.target.dataset.resolution));
      resetGrid(resolution);
      grabAllCells();
    });
  });

  fillButton.addEventListener("click", () => {
    setFill();
  });

  colorPicker.addEventListener("change", (e) => {
    setColor(e.target.value);
  });

  imageFormats.forEach((format) => {
    const button = document.createElement("button");
    button.textContent = format;
    button.addEventListener("click", () => {
      download(format, resolution);
    });
    downloadButton.append(button);
  });
})();
