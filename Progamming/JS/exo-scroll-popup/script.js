// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

document.addEventListener("DOMContentLoaded", () => {
  const navscroll = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const positionScroll = window.scrollY;

    if (positionScroll > lastScrollTop && positionScroll > 50) {
      // Scroll vers le bas : rétrécir la navbar
      navscroll.style.height = "50px"; // taille réduite
    } else {
      // Scroll vers le haut : restaurer la taille normale
      navscroll.style.height = "100px"; // taille initiale
    }

    lastScrollTop = positionScroll <= 0 ? 0 : positionScroll;

    // Detecter si on est en bas de la page
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      console.log("vous êtes en bas");
      // Tu peux aussi déclencher une action ici
    }
  });
});
