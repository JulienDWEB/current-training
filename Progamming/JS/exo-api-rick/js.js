const numberOfCards = 20;
const btnreload = document.querySelector(".reload-card");
fetch("https://rickandmortyapi.com/api/character")
.then((response) => response.json())
.then((data) => {
    
    const cardPerso = document.querySelector(".card-perso");
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
})
