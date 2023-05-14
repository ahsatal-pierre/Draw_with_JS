let color = '#3A8BBA';
let size = 68;
let isDrawing = false;

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    container.appendChild(newDiv);
  }

  container.addEventListener('click', toggleDrawing);
}

function toggleDrawing() {
  isDrawing = !isDrawing;

  if (isDrawing) {
    container.querySelectorAll('.box').forEach((box) => {
      box.addEventListener('mouseover', hoverChangeColor);
    });
  } else {
    container.querySelectorAll('.box').forEach((box) => {
      box.removeEventListener('mouseover', hoverChangeColor);
    });
  }
}

function hoverChangeColor(event) {
  event.target.style.backgroundColor = color;
}

// rainbow color
const buttonColor = document.getElementById('rainbowColor');
buttonColor.addEventListener('click', rainbowColor);

function rainbowColor() {
  const colorR = Math.floor(Math.random() * 256);
  const colorG = Math.floor(Math.random() * 256);
  const colorB = Math.floor(Math.random() * 256);
  newColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  setColor();
}

function setColor() {
  color = newColor;
}

// new size
function setSize(newSize) {
  size = newSize;
  container.innerHTML = '';
  createGrid(size);
}

const resetSize = document.getElementById('resetSize');
resetSize.addEventListener('click', newGrid);

function newGrid() {
  const newSize = prompt('Enter the new pencil size (The larger the number, the finer the pencil):');
  if (newSize !== null) {
    setSize(parseInt(newSize));
  }
}

createGrid(size);
