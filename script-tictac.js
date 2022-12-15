let cells = document.querySelectorAll('.cell');
let state = ["","","","","","","","",""];
let current = 'X';
let win = false;
let player = document.getElementById('player')

for (let cell of cells) {
    cell.addEventListener('click', function(){
        console.log(cell.dataset.game) //verif
        player = `c'est au joueur ${current} de jouer`
        if (state[cell.dataset.game -1] == "" && win == false) {
            state[cell.dataset.game -1] = current
            cell.textContent = current
            console.log(state); //Verif
        } else {
            alert ("ERREUR")
        }
        
        check();

        figure();
      
    });
    

}


// cell.dataset.game // dataset.cell équivaut à data-game de mon HTML

// On affichera donc un message avec le joueur qui a gagné ou si personne n'a gagné.

// Passage X O
function figure() {
    if (current == 'X') {
        current = 'O';
    } else {
        current = 'X';
    }
}


//Vérification des conditions gagnantes
function check() {
    if (state[0] == current && state[1]== current && state[2] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`); 
        cells[0].style.backgroundColor = 'lightblue';
        cells[1].style.backgroundColor = 'lightblue';
        cells[2].style.backgroundColor = 'lightblue';

    } else {
        console.log('suivant'); //pour verif
    }

    if (state[3] == current && state[4]== current && state[5] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[3].style.backgroundColor = 'lightblue';
        cells[4].style.backgroundColor = 'lightblue';
        cells[5].style.backgroundColor = 'lightblue';   
    } 

    if (state[6] == current && state[7]== current && state[8] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[6].style.backgroundColor = 'lightblue';
        cells[7].style.backgroundColor = 'lightblue';
        cells[8].style.backgroundColor = 'lightblue';    
    } 

    if (state[0] == current && state[4]== current && state[6] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[0].style.backgroundColor = 'lightblue';
        cells[4].style.backgroundColor = 'lightblue';
        cells[6].style.backgroundColor = 'lightblue';   
    } 

    if (state[1] == current && state[4]== current && state[7] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[1].style.backgroundColor = 'lightblue';
        cells[4].style.backgroundColor = 'lightblue';
        cells[7].style.backgroundColor = 'lightblue';   
    } 

    if (state[2] == current && state[5]== current && state[8] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[2].style.backgroundColor = 'lightblue';
        cells[5].style.backgroundColor = 'lightblue';
        cells[8].style.backgroundColor = 'lightblue';    
    } 

    if (state[0] == current && state[4]== current && state[8] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[0].style.backgroundColor = 'lightblue';
        cells[4].style.backgroundColor = 'lightblue';
        cells[8].style.backgroundColor = 'lightblue';    
    } 

    if (state[2] == current && state[4]== current && state[6] == current) {
        win = true;
        console.log(`joueur ${current} a gagné`);
        cells[2].style.backgroundColor = 'lightblue';
        cells[4].style.backgroundColor = 'lightblue';
        cells[6].style.backgroundColor = 'lightblue'; 
    } 
}

function stop() {
    if (win == true) {
        console.log('PARTIE FINIE');//verif ok

    }
}