const grid = document.querySelector('.grid');


function makeGrid (rows, cols){
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        const gridElement = document.createElement('div');
        grid.appendChild(gridElement).className = 'grid-item'
    }
    
}

makeGrid(16,16);