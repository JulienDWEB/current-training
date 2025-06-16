const motPlayer1 = localStorage.getItem('mot');
const motHidden = document.querySelector('h1');
const container = document.querySelector('.container');
let tentative = 8;

console.log('Mot récupéré :', motPlayer1);
console.log(`Longueur du mot : ${motPlayer1.length} caractère(s)`);

motHidden.textContent = motPlayer1;
motHidden.style.visibility = "visible";

if (!motPlayer1 || motPlayer1.trim() === "") {
    console.error("Aucun mot trouvé !");
   
}

const motSplit = motPlayer1.split("");
const underscores = [];

// Création des underscores
motSplit.forEach(() => {
    const motUnderscore = document.createElement('div');
    motUnderscore.textContent = "_";
    motUnderscore.classList.add("case-lettre");
    container.appendChild(motUnderscore);
    underscores.push(motUnderscore);
});

console.log("underscores :", underscores);

// Ajout de l’écouteur d'événement
document.addEventListener('keydown', (event) => {
    console.log(`Touche pressée : ${event.key}`);
    const lettre = event.key.toLowerCase();

    motSplit.forEach((char, index) => {
          if (char.toLowerCase() === lettre && underscores[index]) {
            underscores[index].textContent = lettre; // Révélation de la lettre
        } else {
            lettre !== char 
            return console.log("la lettre n'est pas bonne");
            
        }
    });
});
