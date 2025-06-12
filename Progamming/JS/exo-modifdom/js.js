const para = document.querySelector('.edit-p');
const btn = document.querySelector('#btn');

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
