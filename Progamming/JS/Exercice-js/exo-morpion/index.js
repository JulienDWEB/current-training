document.getElementById("startGame").addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none"; // Cache la page d'accueil
    document.getElementById("gameContainer").style.display = "block"; // Affiche le jeu
});


const board = document.getElementById("board"); // Ajout du variable board = Element qui point ID "board"
const cells = document.querySelectorAll(".case"); // Ajout du variable cells = case de ma grille
const annonce = document.querySelector(".annonce"); // Ajout du variable annonce = point l'element qui a la class "annonce"
 const restart = document.getElementById("restart"); // Ajout du variable restart = qui pointe mon bouton restart 
 const statusX = document.querySelector(".scoreStatueX") // Ajout du variable statusX = pointe vers Score X 
 const statusY = document.querySelector(".scoreStatueO") // Ajout du variable statusX = pointe vers Score X 



let gameActive      = true;   
let currentPlayer = "x";

let scoreX = 0;
let scoreO = 0;

const winCombos = [ // Combos Gagnant 
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

function checkDraw() { // Function qui permet de verifier ce qui et ecrit dans les case 
    return [...cells].every((clickedCase) => clickedCase.textContent !== "" ); // Permet de ne pas changer le symbole de la case ! 
} // Permet de changer d'un tableau nodeList a ArrayList et permet d'utiliser le .every()


function switchPlayer() { // Si x a etait ajouter a une case alors O inversement Pour O
    if(currentPlayer === "x") {
        currentPlayer = "O"; 
    }
    else if (currentPlayer === "O") {
        currentPlayer = "x"; 
    }
}

// Evenement au Click , Verif des case 

function handleClick(event) {
 if (!gameActive) return;  // return si ! est false alors la partie est finie 

    const clickedCase = event.target;
    if(!clickedCase.classList.contains("case") || clickedCase.textContent !== "") return; // !== si il sont different de type ou de nombre alors true sinon false
    clickedCase.textContent = currentPlayer; // Permet d'ajouter  du text  a la case clické 

    if (checkWin()) {
      annonce.textContent = currentPlayer +  " a gagné!";
      togglePopup()
      annonce.style.display = "block"; // Assure que l'élément est visible 
    annonce.classList.add("annonce-animation");
    
      gameActive = false;     
     if (currentPlayer === "x") {  // Ajout +1 au score pour le gagnant
        scoreX++;
        statusX.textContent = scoreX;
     } else {
        scoreO++;
        statusY.textContent = scoreO;
     }

    }

else if(checkDraw()) { 
          annonce.textContent =  " Match Nul !";
          annonce.style.display = "block";
annonce.classList.add("annonce-animation");

          gameActive = false;  
        }    else {
            switchPlayer();
        }
        
}

// Réinitialiser de la partie

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



window.addEventListener('mousemove', (e) => {
  const maxX = window.innerWidth - cursor.offsetWidth;
  const maxY = window.innerHeight - cursor.offsetHeight;
  
  const x = Math.min(e.clientX, maxX);
  const y = Math.min(e.clientY, maxY);
  
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  mouse1.style.top = y + "px";
  mouse1.style.left = x + "px";
  mouse2.style.top = y + "px";
  mouse2.style.left = x + "px";
});

function togglePopup(){
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open")
}
function removePopup(){
    let popup = document.querySelector("#popup-overlay");
    popup.classList.remove("open")
}

const mouses = document.querySelectorAll(".mouse")
console.log(mouses);


