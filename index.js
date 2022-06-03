// Create a 16*16 grid

const container = document.getElementById("container");


function createGrid(numBox){
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);

    
    // Set up a hover effect so that the grid divs change color

        function hoverColor() {
            square.classList.add("hover");
        };
        square.addEventListener('mouseover', hoverColor);
    }
   
    }
let numBox = 16;
createGrid(numBox);