export const controllerSection = document.createElement("section");
controllerSection.classList.add("controller");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

const resolutionButtons = document.createElement("div");
resolutionButtons.classList.add("resolution-buttons");

const button8x8 = document.createElement("button");
const button12x12 = document.createElement("button");
const button16x16 = document.createElement("button");
const button32x32 = document.createElement("button");

const modifierButtons = document.createElement("div");
const fillButton = document.createElement("button");
const resetButton = document.createElement("button");
const colorPicker = document.createElement("input");

const downloadButton = document.createElement("button");

button8x8.textContent = "8x8";
button8x8.classList.add("resolution-button");
button8x8.setAttribute("data-resolution", "8");
button12x12.textContent = "12x12";
button12x12.classList.add("resolution-button");
button12x12.setAttribute("data-resolution", "12");
button16x16.textContent = "16x16";
button16x16.classList.add("resolution-button");
button16x16.setAttribute("data-resolution", "16");
button32x32.textContent = "32x32";
button32x32.classList.add("resolution-button");
button32x32.setAttribute("data-resolution", "32");

modifierButtons.classList.add("modifier-buttons");

colorPicker.type = "color";
colorPicker.classList.add("color-picker");

fillButton.classList.add("fill-button");
fillButton.textContent = "Fill";

resetButton.classList.add("reset-button");
resetButton.textContent = "Reset";

downloadButton.classList.add("download-button");
downloadButton.textContent = "Download";

resolutionButtons.append(button8x8, button12x12, button16x16, button32x32);
modifierButtons.append(fillButton, resetButton, colorPicker);
controllerSection.append(resolutionButtons, modifierButtons, downloadButton);
