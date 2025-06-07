// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const btnToggle = document.querySelector('#btn')
const sideBar = document.querySelector('.side-bar')
const contentMain = document.querySelector('.content')
let sidebarVisible = false;
const bodyMain = document.querySelector('body')

btnToggle.addEventListener('click', () => {
    if(!sidebarVisible) {
        sideBar.style.left = '0';
        contentMain.style.opacity = '0.5';
        contentMain.style.width = '400px'
        bodyMain.style.display = 'flex';
        bodyMain.style.justifyContent = 'center'
        sidebarVisible = true
        
    } else {
        sideBar.style.left = '-250px'
        contentMain.style.opacity = '1';
        sidebarVisible = false 
         contentMain.style.width = ''
        bodyMain.style.display = 'block';
    } 
    
})

// Fermer le menu toggle avec le contenu principal de la page .
contentMain.addEventListener('click', () => {
    if (sidebarVisible) {
        sideBar.style.left = '-250px';
        contentMain.style.opacity = '1';
        sidebarVisible = false;
    } 

    

});
