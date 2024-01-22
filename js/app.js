const app = document.querySelector('[data-js="app"');

// ------------------ Controller ------------------
const controllerSection = document.createElement("section");
controllerSection.classList.add("controller");
controllerSection.textContent = "Controller";

// ------------------ Grid ------------------
const gridSection = document.createElement("section");
gridSection.classList.add("grid");
gridSection.textContent = "Grid";

// ------------------ Button Container ------------------
const buttonContainer = document.createElement("div");

const resolutionButtons = document.createElement("div");

const button8x8 = document.createElement("button");
const button12x12 = document.createElement("button");
const button16x16 = document.createElement("button");
const button32x32 = document.createElement("button");

button8x8.textContent = "8x8";
button12x12.textContent = "12x12";
button16x16.textContent = "16x16";
button32x32.textContent = "32x32";

const colorPicker = document.createElement("input");

colorPicker.type = "color";

const fillButton = document.createElement("button");

fillButton.textContent = "Fill";

const resetButton = document.createElement("button");

resetButton.textContent = "Reset";

resolutionButtons.append(button8x8, button12x12, button16x16, button32x32);
buttonContainer.append(resolutionButtons, colorPicker, fillButton, resetButton);
controllerSection.append(buttonContainer);
app.append(controllerSection, gridSection);
