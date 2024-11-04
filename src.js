const container = document.querySelector(".container");
const updateGridSizeButton = document.querySelector('button');

function createGrid(size = 16) {
  let squareSize = 500 / size;

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
  
    for (let j = 0; j < size; j++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener('mouseenter', (e) => { e.target.classList.add('hover') });
      gridItem.style.width = `${squareSize}px`;
      gridItem.style.height = `${squareSize}px`;
      row.appendChild(gridItem);
    }
    container.appendChild(row);
  }
}

createGrid();

