const gridContainer = document.querySelector(".grid-container");
const changeGridSizeButton = document.querySelector("#change-grid");
const GRID_SIZE = 450;
const toggleRgbButton = document.querySelector("#rgb");
const DEFAULT_GRID_COLOR = "#D61355";
const DEFAULT_BUTTON_TEXT_COLOR = "#FCE22A";
let rgbFlag = false;

function createGrid(size = 16) {
  let squareSize = GRID_SIZE / size;

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < size; j++) {
      let gridItem = document.createElement("div");
      gridItem.addEventListener("mouseout", (e) => {
        if (e.buttons === 1) {
          if (!rgbFlag) {
            e.target.style["background-color"] = DEFAULT_GRID_COLOR;
          } else {
            e.target.style["background-color"] = RGB();
          }
        }
      });
      styleGridItem(gridItem, squareSize);
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

toggleRgbButton.addEventListener("click", function (e) {
  if (rgbFlag) {
    rgbFlag = false;
    e.target.style["background-color"] = DEFAULT_GRID_COLOR;
    e.target.style.color = DEFAULT_BUTTON_TEXT_COLOR;
    e.target.style["border-color"] = DEFAULT_GRID_COLOR;
  } else {
    e.target.style["background-color"] = RGB();
    e.target.style.color = RGB();
    e.target.style["border-color"] = RGB();
    rgbFlag = true;
  }
});
