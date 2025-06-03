const board = document.getElementById("board");
const cells = document.querySelectorAll(".case");
const annonce = document.querySelector(".annonce");
 const restart = document.getElementById("restart");

let gameActive      = true;   
let currentPlayer = "x";

const winCombos = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8], 
    [0,4,8], 
    [2,4,6], 
    
]

function checkWin(){
    // Some: On va exécuter une boucle sur mon tableau de combinaisons
    // jusqu'a rencontrer un combo gagnant et la ca retourne true 
    // sinon il va jusqu'a la fin, et il retourne false si le dernier n'est pas bon
    return winCombos.some(combo =>{
        // Every : ca va exécuter une fonction sur chaque élément de ma combinaison 
        // actuelle et on va verifier que la cellule correspondant a chaque index
        // dans ma combinaison et  a chaque fois le meme signe du joueur
        return combo.every(index => cells[index].textContent === currentPlayer )
    }) 
}

function checkDraw() {
    return [...cells].every((clickedCase) => clickedCase.textContent !== "" );
}


function switchPlayer() {
    if(currentPlayer === "x") {
        currentPlayer = "0";
    }
    else if (currentPlayer === "0") {
        currentPlayer = "x";
    }
}



function handleClick(event) {
 if (!gameActive) return; 

    const clickedCase = event.target;
    if(!clickedCase.classList.contains("case") || clickedCase.textContent !== "") return;
    clickedCase.textContent = currentPlayer; // Permet d'ajouter  du text  a la case clické

    if (checkWin()) {
      annonce.textContent = currentPlayer +  " a gagné!";
      annonce.style.display = "block"; // Assure que l'élément est visible
    annonce.classList.add("annonce-animation");
      gameActive = false;     
    }

else if(checkDraw()) {
          annonce.textContent =  " Match Nul !";
             gameActive = false;  
}    else {
        switchPlayer();
    }

}

function resetGame() {
  cells.forEach(cell => cell.textContent = "");     // 1. Vider la grille
  currentPlayer      = "x";                         // 2. Repasser au joueur X
  gameActive         = true;                        // 3. Déverrouiller
  annonce.textContent= "";                          // 4. Cacher l’annonce
  annonce.style.display = "none";
  annonce.classList.remove("annonce-animation");
}
const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", resetGame);

board.addEventListener("click" , handleClick);