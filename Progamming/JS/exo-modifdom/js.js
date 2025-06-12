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
    if (caseLeft.style.backgroundColor="red") {
        caseRight.style.backgroundColor = "blue"
    }
  });
});
function BuzzerDelete() {
    buzzer.addEventListener('click', () => {
        const topBuzzer = document.querySelector('.top-buzzer1');
        const Entete = document.querySelector('.entete')
        topBuzzer.style.transform = "translateY(10px)";
        setTimeout(() => {
            topBuzzer.style.transform = "translateY(0)";
        }, 500);

        const newLn = document.createElement('li');
        newLn.textContent = "Nouvel Élément !";
        Entete.appendChild(newLn);
        const lastChild = Entete.lastElementChild;
if (lastChild) {
    Entete.removeChild(lastChild);
}
    });
}
function BuzzerActive() {
    buzzer.addEventListener('click', () => {
        const topBuzzer = document.querySelector('.top-buzzer');
        console.log(topBuzzer);
        
        const Entete = document.querySelector('.entete')
        topBuzzer.style.transform = "translateY(10px)";
        setTimeout(() => {
            topBuzzer.style.transform = "translateY(0)";
        }, 500);

        const newLn = document.createElement('li');
        newLn.textContent = "Nouvel Élément !";
        Entete.appendChild(newLn);
        
    });
}
BuzzerActive();
