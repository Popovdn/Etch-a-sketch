const gridContainer = document.querySelector(".grid-container");
const changeGridSizeButton = document.querySelector("#change-grid");
const GRID_SIZE = 450;
const toggleRgbButton = document.querySelector("#rgb");
const coloringModeButton = document.querySelector("#coloring");
const DEFAULT_GRID_COLOR = "#D61355";
const DEFAULT_BUTTON_TEXT_COLOR = "#FCE22A";
let rgbFlag = false;
let coloringModeFlag = false;
let opacityCounter = 0;

function createGrid(size = 16) {
  let squareSize = GRID_SIZE / size;

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < size; j++) {
      let gridItem = document.createElement("div");
      styleGridItem(gridItem, squareSize);
      addGridFunctionality(gridItem);
      column.appendChild(gridItem);
    }
    gridContainer.appendChild(column);
  }
}

function styleGridItem(gridItem, squareSize) {
  gridItem.classList.add("grid-item");
  gridItem.style.width = `${squareSize}px`;
  gridItem.style.height = `${squareSize}px`;
  return gridItem;
}

function changeGridSize() {
  let newGridSize = Number(prompt("Enter grid size - Maximum size 100"));

  while (isNaN(newGridSize) || newGridSize > 100) {
    alert("Invalid size. Please make sure you are entering a number below 100");
    newGridSize = Number(prompt("Enter grid size - Maximum size 100"));
  }

  if (newGridSize) {
    gridContainer.textContent = "";
    createGrid(newGridSize);
  }
}

changeGridSizeButton.addEventListener("click", changeGridSize);
createGrid();

function RGB() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function coloringMode() {
  opacityCounter += 1;
  if (opacityCounter >= 100) {
    opacityCounter = 1;
  }
  return `${opacityCounter}%`;
}

function addGridFunctionality(gridItem) {
  gridItem.addEventListener("mouseout", (e) => {
    if (e.buttons === 1) {
      if (!rgbFlag) {
        e.target.style["background-color"] = DEFAULT_GRID_COLOR;
      } else {
        e.target.style["background-color"] = RGB();
      }

      if (coloringModeFlag) {
        e.target.style.opacity = coloringMode();
      } else {
        e.target.style.opacity = 1;
      }
    }
  });
}

toggleRgbButton.addEventListener("click", function (e) {
  if (rgbFlag) {
    rgbFlag = false;
    e.target.style["background-color"] = DEFAULT_GRID_COLOR;
    e.target.style.color = DEFAULT_BUTTON_TEXT_COLOR;
    e.target.style["border-color"] = DEFAULT_GRID_COLOR;
  } else {
    rgbFlag = true;
    e.target.style["background-color"] = RGB();
    e.target.style.color = RGB();
    e.target.style["border-color"] = RGB();
  }
});

coloringModeButton.addEventListener("click", function (e) {
  if (coloringModeFlag) {
    coloringModeFlag = false;
    e.target.style["background-color"] = DEFAULT_GRID_COLOR;
    e.target.style.color = DEFAULT_BUTTON_TEXT_COLOR;
  } else {
    coloringModeFlag = true;
    e.target.style["background-color"] = DEFAULT_BUTTON_TEXT_COLOR;
    e.target.style.color = DEFAULT_GRID_COLOR;
  }
});
