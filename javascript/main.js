const grid = document.querySelector('.grid');

function makeGrid (rows, cols){
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        const gridElement = document.createElement('div');
        grid.appendChild(gridElement).className = 'grid-item';
        gridElement.classList.add(i);
    }
    
}

makeGrid(16,16);

const gridItems = document.querySelectorAll('.grid-item');

function drawOver(e){
    e.target.classList.add('active');
    const currentOpacity = e.target.style.opacity;
    if (currentOpacity){
        e.target.style.opacity = Number(currentOpacity) + .1;
    } else {
        e.target.style.opacity = .1;
    }
}

gridItems.forEach(key => key.addEventListener('mouseover', drawOver));