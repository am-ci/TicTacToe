let cells = document.querySelectorAll('.cell');
let state = ["","","","","","","","",""];
let current = 'X';
let win = false;
let player = document.getElementById('player');
let fin = document.createElement('p');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let game = {
    JoueurJoue : 1,
    scoreJ1 : 0,
    scoreJ2: 0,
    matchNuls: 0,
}


for (let cell of cells) {
    cell.addEventListener('click', function(){
        console.log(cell.dataset.game) //verif
        // player.innerHTML = `Joueur qui a les ${current} à toi`;
        // // Je n'arrive pas à faire en sorte d'avoir X et O au bon moment.... Et je ne vois pas comment faire joueur 1 joueur 2....
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

function score() {
// condition score

//ATTENTION replace c'est que sur des string
    score1.innerHTML = score1.innerHTML.replace('', game.scoreJ1++)
    score2.innerHTML = score2.innerHTML.replace('', game.scoreJ2++)

    
}