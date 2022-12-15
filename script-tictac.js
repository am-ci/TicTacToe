let cells = document.querySelectorAll('.cell');
let state = ["","","","","","","","",""];
let current = 'X';


for (let cell of cells) {
    cell.addEventListener('click', function(){
        console.log(cell.dataset.game) //verif
        if (state[cell.dataset.game -1] == "") {
            state[cell.dataset.game -1] = current
            cell.textContent = current
            console.log(state); //Verif
        } else {
            alert ("ERREUR")
        }
        
        if (current == 'X') {
            current = 'O';
        } else {
            current = 'X';
        }
    });

}

// cell.dataset.game // dataset.cell équivaut à data-game de mon HTML



