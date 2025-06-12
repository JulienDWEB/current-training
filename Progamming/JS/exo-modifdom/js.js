const para = document.querySelector('.edit-p');
const btn = document.querySelector('#btn');
const navBar = document.querySelector('.liste');
const buzzer = document.querySelector('.icon-buzz');

let texteOrigin = para.textContent;
let index = 0;
let enTrainDEffacer = false;

function deleteLetter() {
    if (index < texteOrigin.length) {
        para.textContent = texteOrigin.slice(0, texteOrigin.length - index - 1);
        index++;
        setTimeout(deleteLetter, 50);
    } else {
        // Une fois le texte effacé, on ajoute un nouveau texte
        para.textContent = "Hello World ¡";
        // Remet à zéro pour permettre de recommencer
        texteOrigin = para.textContent;
        index = 0;
        enTrainDEffacer = false;
    }
}

btn.addEventListener('click', () => {
    if (!enTrainDEffacer) {
        enTrainDEffacer = true;
        index = 0;
        texteOrigin = para.textContent;
        deleteLetter();
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const caseLeft = document.querySelector('.case1');
  const caseMiddle = document.querySelector('.case2');
const caseRight = document.querySelector('.case3')
  caseMiddle.addEventListener('click', () => {
    caseLeft.style.backgroundColor = "red";
    if (caseLeft.style.backgroundColor === "red") {
        caseRight.style.backgroundColor = "blue"
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Sélection des boutons et du conteneur où afficher les éléments
  const addButton = document.querySelector('.top-buzzer');
  const removeButton = document.querySelector('.top-buzzer1');
  const container = document.querySelector('.entete');

  // Bouton "Ajouter"
  addButton.addEventListener('click', () => {

    addButton.style.transform = "translateY(10px)";
    setTimeout(() => {
      addButton.style.transform = "translateY(0)";
    }, 500);
    // Création d'un nouvel élément <li>
    const newItem = document.createElement('li');
    newItem.classList.add('auto-added'); // On note qu'il a été ajouté dynamiquement
    newItem.textContent = "Nouvel Élément !";
    container.appendChild(newItem);
  });

  // Bouton "Supprimer"
  removeButton.addEventListener('click', () => {

    removeButton.style.transform = "translateY(10px)";
    setTimeout(() => {
      removeButton.style.transform = "translateY(0)";
    }, 500);

    // Récupération de tous les éléments créés
    const items = container.querySelectorAll('.auto-added');
    // S'il y a au moins un élément, on supprime le dernier
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      lastItem.remove();
    }
  });
});

