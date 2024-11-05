const gridContainer = document.querySelector(".grid-container");
const changeGridSizeButton = document.querySelector("#change-grid");
const GRID_SIZE = 600;

function createGrid(size = 16) {
  let squareSize = GRID_SIZE / size;

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < size; j++) {
      let gridItem = document.createElement("div");
      styleGridItem(gridItem, squareSize);
      column.appendChild(gridItem);
    }
    gridContainer.appendChild(column);
  }
}

function styleGridItem(gridItem, squareSize) {
  gridItem.classList.add("grid-item");
  gridItem.addEventListener("mouseenter", (e) => {
    e.target.classList.add("hover");
  });
  gridItem.style.width = `${squareSize}px`;
  gridItem.style.height = `${squareSize}px`;
  return gridItem;
}

function changeGridSize() {
  let newGridSize = Number(prompt("Enter grid size - Maximum size 100"));

  while (isNaN(newGridSize) || newGridSize > 100) {
    alert("Invalid size. Please make sure you are entering a number below 100");
    newGridSize = Number(prompt("Enter your desired grid size."));
  }

  if (newGridSize) {
    gridContainer.textContent = '';
    createGrid(newGridSize);
  }
}

changeGridSizeButton.addEventListener("click", changeGridSize);
createGrid();
