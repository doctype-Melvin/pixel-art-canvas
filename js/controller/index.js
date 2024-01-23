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

// Section contains all buttons
export const controllerSection = document.createElement("section");
controllerSection.classList.add("controller");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

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
