function generateRandomColor() {
    return {
        red: Math.floor(Math.random() * 257),
        green: Math.floor(Math.random() * 257),
        blue: Math.floor(Math.random() * 257),
    };
}

const body = document.querySelector('body');
const textRgb = document.querySelector('h1');
const containerTitle = document.querySelector('.container');

// Génère une première couleur et l'affiche
let newColor = generateRandomColor();
textRgb.textContent = `RGBA (${newColor.red}, ${newColor.green}, ${newColor.blue})`;
body.style.backgroundColor = `rgb(${newColor.red}, ${newColor.green}, ${newColor.blue})`;

let currentTimeout = null;

function machineAEcrire(message) {
    if (currentTimeout !== null) {  
        clearTimeout(currentTimeout);
    }

    textRgb.textContent = '';  
    let index = 0;

    function ecrire() {
        if (index < message.length) {
            textRgb.textContent += message.charAt(index);
            index++;
            currentTimeout = setTimeout(ecrire, 300);  
        } 
    }

    ecrire();
}

// Lance l'animation de machine à écrire avec la couleur initiale
machineAEcrire(textRgb.textContent);

// Ajoute un événement pour générer une nouvelle couleur au clic
containerTitle.addEventListener('click', () => {
    newColor = generateRandomColor();
    body.style.backgroundColor = `rgb(${newColor.red}, ${newColor.green}, ${newColor.blue})`;
    machineAEcrire(`RGBA (${newColor.red}, ${newColor.green}, ${newColor.blue})`);
});
