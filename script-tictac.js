let cells = document.querySelectorAll('.cell');

for (let cell of cells) {
    cell.addEventListener('click', function(){
        console.log(cell.dataset.game) //verif

    });

}

// cell.dataset.game // dataset.cell équivaut à data-game de mon HTML