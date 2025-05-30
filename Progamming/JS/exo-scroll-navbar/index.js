document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav'); // récupère la balise <nav>
    let LastScrollTop = 0;
    window.addEventListener("scroll", () => {
        const positionScroll = window.scrollY;  // nombre sans "px"
        console.log(positionScroll);

        if (positionScroll >LastScrollTop && positionScroll > 50) {
            nav.style.position = "fixed";
            nav.style.top = "-60px";   // scroll vers le bas et on a dépassé 50px : cacher la nav
            nav.style.width = "100%"; // optionnel, pour s'assurer que la nav reste pleine largeur
        } else {
             nav.style.top = "0"; //  // scroll vers le haut : montrer la nav
        }
          LastScrollTop = positionScroll <= 0 ? 0 : positionScroll; // éviter négatif
    });
});

