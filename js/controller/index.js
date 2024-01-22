export const controllerSection = document.createElement("section");
controllerSection.classList.add("controller");
controllerSection.textContent = "Controller";

// ------------------ Button Container ------------------
const buttonContainer = document.createElement("div");

const resolutionButtons = document.createElement("div");

const button8x8 = document.createElement("button");
const button12x12 = document.createElement("button");
const button16x16 = document.createElement("button");
const button32x32 = document.createElement("button");

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

const colorPicker = document.createElement("input");

colorPicker.type = "color";

const fillButton = document.createElement("button");

fillButton.textContent = "Fill";

const resetButton = document.createElement("button");

resetButton.textContent = "Reset";

resolutionButtons.append(button8x8, button12x12, button16x16, button32x32);
buttonContainer.append(resolutionButtons, colorPicker, fillButton, resetButton);
controllerSection.append(buttonContainer);
