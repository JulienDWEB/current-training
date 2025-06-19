// Initalisation du nombre de cartes à afficher
// Nombre de cartes à afficher par page

const numberOfCards = 20;

// Buttons Changement de page et rechargement
const btnreload = document.querySelector(".reload-card");
const btnPrev = document.querySelector(".prev-page");
const btnNext = document.querySelector(".next-page");
let currentPage = 1;

// Sélection de l'élément où les cartes seront affichées
const cardPerso = document.querySelector(".card-perso");

const containPage = document.querySelector(".contain-page");
const numberPage = document.querySelector(".number-page");


// Fonction pour charger les personnages de Rick et Morty
// en fonction de la page actuelle  
function loadCharacters(page) {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
            cardPerso.textContent = "";
            data.results.forEach(character => {
                const card = document.createElement("div");
                card.classList.add("card");

                const namePerso = document.createElement("div");
                namePerso.classList.add("name-perso");
                namePerso.textContent = character.name;

                const imagePerso = document.createElement("img");
                imagePerso.classList.add("img-perso");
                imagePerso.src = character.image;
                imagePerso.alt = character.name;

                card.appendChild(namePerso);
                card.appendChild(imagePerso);
                cardPerso.appendChild(card);
numberPage.textContent = `Page ${currentPage}`;
                
            });
        });
}

// Initial load
loadCharacters(currentPage);

btnPrev.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadCharacters(currentPage);
    }
});

btnNext.addEventListener("click", () => {
    currentPage++;
    loadCharacters(currentPage);
});


fetch("https://rickandmortyapi.com/api/character/")
.then((response) => response.json())
.then((data) => {
    console.log(data.info.pages
    );
    
    cardPerso.textContent = `${numberOfCards} personnages trouvés`;
   
   btnreload.addEventListener("click", () => { 
    cardPerso.textContent = ""; // Réinitialiser le contenu des cartes
    for (let i = 0; i < numberOfCards; i++) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const character = data.results[randomIndex];
        
        // Création des éléments pour chaque carte
            const card = document.createElement("div");
            card.classList.add("card");

            const namePerso = document.createElement("div");
            namePerso.classList.add("name-perso");
            namePerso.textContent = character.name;

            const imagePerso = document.createElement("img");
            imagePerso.classList.add("img-perso");
            imagePerso.src = character.image;
            imagePerso.alt = character.name;

            card.appendChild(namePerso);
            card.appendChild(imagePerso);
            cardPerso.appendChild(card);
        }
            
});
    });
fetch("https://rickandmortyapi.com/api/location") 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        cardPerso.textContent = `Il y a ${data.info.count} lieux dans l'univers de Rick et Morty`;
        
    });
