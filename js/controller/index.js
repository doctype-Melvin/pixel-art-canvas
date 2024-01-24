// Creates button elements
const buttonFactory = (className, resolution, text) => {
  const button = document.createElement("button");
  button.classList.add(className);
  if (resolution) {
    button.setAttribute("data-resolution", resolution);
    button.textContent = `${resolution}x${resolution}`;
  } else {
    button.textContent = text;
  }
  return button;
};

// Logic for downloading the grid as an image
export const download = (format, resolution) => {
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

// Section contains all buttons
export const controllerSection = document.createElement("section");
controllerSection.classList.add("controller");

// Buttons to set grid resolution
const resolutionButtons = document.createElement("div");
resolutionButtons.classList.add("resolution-buttons");

const button8x8 = buttonFactory("resolution-button", "8");
const button12x12 = buttonFactory("resolution-button", "12");
const button16x16 = buttonFactory("resolution-button", "16");
const button32x32 = buttonFactory("resolution-button", "32");

// Holds fill and color picker buttons
const modifierButtons = document.createElement("div");
modifierButtons.classList.add("modifier-buttons");

const fillButton = buttonFactory("fill-button", null, "Fill 🪣");

const colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.classList.add("color-picker");

const downloadButton = buttonFactory("download-button", null, "Download 📥");

resolutionButtons.append(button8x8, button12x12, button16x16, button32x32);
modifierButtons.append(fillButton, colorPicker);
controllerSection.append(resolutionButtons, modifierButtons, downloadButton);
