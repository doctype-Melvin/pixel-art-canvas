# Pixel Art App

This app invites users to create pixel art.
There are four different grid resolutions available (8x8, 12x12, 16x16 and 32x32).
Clicking the corresponding button results in
the desired grid resolution.
Users may choose a color from the color picker input.
The app has a 'paint bucket' option, which fills in all surrounding cells with the same color as the target cell.
Also users may download their pixel art in png, jpg or gif format.

## Code Structure

This app is written in HTML, CSS, JavaScript - no dependencies.
The app.js file exxentially assembles the two main sections 'controller' and 'grid' together.
The controller (./js/controller/index.js) holds all buttons to, well, controll the app. Analogous to that, ./js/grid/index.js holds all relevant elements and functions for the grid component.

app.js essentially appends all elements to the dom and supplies buttons with event listeners.

## Issues

When users fill the grid and then choose to use the fill tool again, rangeError occurs. Problem seems to be in
the BFS algorithm. Tried to rewrite the logic with a stack-based recursion but that didn't solve it.
