// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : !important > id > classe > baliseHtml
const sidebar = document.getElementById('side-bar') 
const content = document.querySelector('.content')
    btn.addEventListener('click', () => {
            sidebar.classList.toggle('active')
    
    })
content.addEventListener('click', ()=> {
    sidebar.classList.remove('active')
    
}) 