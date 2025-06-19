// Genére un nombre aléatoire pour génerer une catégorie aléatoire
const randomCategorieId = Math.floor(Math.random() * 20) + 1;



// Categorie de mot
fetch(`https://trouve-mot.fr/api/categorie/${randomCategorieId}`)
.then((response) => response.json())
.then((categorie) => {
    console.log(categorie)
    categorie.forEach((categorie) => {
        const listCategorie = document.querySelector(".containt-categorie");
        const categorieH2 = document.createElement("h2");
        categorieH2.textContent = categorie.categorie;
        listCategorie.appendChild(categorieH2);
        
    })
});
// Catégorie de 15 mots aléatoires
fetch(`https://trouve-mot.fr/api/categorie/${randomCategorieId}/15`)
   .then((response) => response.json())
   .then((words) => {
       console.log(words);
       words.forEach((word) => {
           const listUlLetter = document.querySelector(".list-word");
          const listWord = document.createElement("li");
           listWord.classList.add("word");
           listWord.textContent = word.name;
           listUlLetter.appendChild(listWord);
       });
   });
