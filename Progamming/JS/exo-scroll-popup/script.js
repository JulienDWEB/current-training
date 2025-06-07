// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
const navscroll = document.querySelector(".navbar");
const closePopup = document.querySelector('.fa-times-circle')
let closeDefault = true

document.addEventListener("DOMContentLoaded", () => {
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
});
}) // Detecter si on est en bas de la page

// Pop-up au scroll et fermer popup
window.addEventListener('scroll', function () {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight && closeDefault) {
    const popup = document.getElementsByClassName('pop-up')[0];
    if (popup) {
      popup.style.transform = "translateX(50px)";
      popup.style.opacity = "1";
      closeDefault = false;
    }
  }
  
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue > 0.45) {
  imgImprovise.style.opacity = 1;
  imgImprovise.style.transform = "none";
  }
  

  closePopup.addEventListener('click', () => {
    popup.style.transform = "translateX(500px)"
    popup.style.opacity = 0;
  })
 
  
});