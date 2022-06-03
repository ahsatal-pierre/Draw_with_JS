let color = '#3A8BBA'; 
let size = 16;

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size*size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', hoverChangeColor);
    }
}

function hoverChangeColor(event) {
     event.target.style.backgroundColor = color;
}

// new size

function setSize(C) {
    size = newSize;
    createGrid(size);
}
const resetSize = document.getElementById('resetSize');
resetSize.addEventListener('click', newGrid);

function newGrid() {
    newSize = prompt('how large?');
    container.innerHTML = '';
    setSize();
}

createGrid(size);