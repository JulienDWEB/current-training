const body = document.querySelector('body');

setInterval(() => {
    const circle = document.createElement('span');
    circle.classList.add('circle');

    circle.style.left = `${Math.random() * window.innerWidth}px`;
    circle.style.top = `${Math.random() * window.innerHeight}px`;
    circle.style.width = 
    document.body.appendChild(circle);

    // Supprimer chaque cercle après 8 secondes
    setTimeout(() => {
        circle.remove();
    }, 4000);

}, 600); // Un nouveau cercle toutes les 2 secondes
