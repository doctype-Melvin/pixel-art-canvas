import { controllerSection } from "./controller/index.js";
import { gridSection } from "./grid/index.js";

const app = document.querySelector('[data-js="app"');

app.append(controllerSection, gridSection);
