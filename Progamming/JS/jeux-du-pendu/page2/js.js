const motPlayer1 = localStorage.getItem('mot');
const motHidden = document.querySelector('h1');
const container = document.querySelector('.container');
const containerTentative = document.querySelector('.container-tentative')
const listLetter = document.querySelector('.list-letter')   
const imagePoulet = document.querySelector(".image-poulet");



console.log('Mot récupéré :', motPlayer1);
console.log(`Longueur du mot : ${motPlayer1.length} caractère(s)`);

motHidden.textContent = motPlayer1;
motHidden.style.display = "none";

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
   let lettresRatees = []
   let tentative = 8;
// Ajout de l’écouteur d'événement
document.addEventListener('keydown', (event) => {
    const lettre = event.key.toLowerCase();
    console.log(`Touche pressée : ${lettre}`);

    let bonneLettre = false;

    motSplit.forEach((char, index) => {
        if (char.toLowerCase() === lettre && underscores[index]) {
            underscores[index].textContent = lettre;
            bonneLettre = true;
        }
    });

    // Si la lettre est mauvaise et pas déjà utilisée
    if (!bonneLettre && !lettresRatees.includes(lettre)) {
        lettresRatees.push(lettre);
        tentative--;

const letterFalseText = document.createElement('li');
        letterFalseText.textContent = lettre;
        listLetter.appendChild(letterFalseText);

        console.log(`❌ Lettre ratée : ${lettre}`);

 // 🔄 Mise à jour dynamique de l'image du poulet
imagePoulet.src = `./img/poulet-${8 - tentative}.png`;
console.log(imagePoulet.src);

        
    }     
       // Met à jour l’affichage
        const displayTentative = document.querySelector('.tentative')
        displayTentative.textContent = `Plumes restantes : ${tentative}`;
    // Vérifie si toutes les lettres ont été trouvées
const victoire = underscores.every((el) => el.textContent !== "_");

if (victoire) {
    setTimeout(() => {
        alert("🎉 Bravo, tu repars avec le poulet vivant ! 🐓");
        window.location.reload(); // Ou redirige vers une page de victoire
    }, 300);
}



});
