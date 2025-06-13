const motPlayer1 = localStorage.getItem('mot');
const motHidden = document.querySelector('h1')
const container = document.querySelector('.container')
console.log('Mot récupéré :', motPlayer1);
console.log(`Longueur du mot : ${motPlayer1.length} caractère(s)`);
motHidden.textContent = motPlayer1
motHidden.style.visibility = "vissible"

const motSplit = motPlayer1.split("")

motSplit.forEach(() => {
    const motUnderscore = document.createElement('div')
    motUnderscore.textContent = "";
    container.appendChild(motUnderscore)
})

console.log(motSplit);
