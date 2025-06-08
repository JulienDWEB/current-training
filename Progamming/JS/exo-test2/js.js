const circle = document.querySelector('.circle');
const texte = document.getElementById('texte');

function isTouching(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}

function machineAEcrire(message) {
  texte.textContent = '';  // vide le texte avant de commencer
  let index = 0;
  function ecrire() {
    if (index < message.length) {
      texte.textContent += message.charAt(index);
      index++;
      setTimeout(ecrire, 50);  // vitesse d'écriture ici (50ms)
    }
  }
  ecrire();
}

circle.addEventListener('click', () => {
  circle.classList.toggle('active');

  // Nouveau message à afficher
  const nouveauMessage = "Bravo, Vous Avez Clickez Sur Le Circle !";
  machineAEcrire(nouveauMessage);

  const existingCarre = document.querySelector('.carre');
  if (existingCarre) {
    existingCarre.remove();
  }

  const carre = document.createElement('span');
  carre.classList.add('carre');
  document.body.appendChild(carre);

  void circle.offsetHeight;

  circle.classList.add('falling');

  setTimeout(() => {
    if (isTouching(circle, carre)) {
      carre.style.overflow = 'hidden';
      circle.style.transition = 'transform 0.5s ease, opacity 0.5 ease';
      circle.style.transform = 'translateY(300px) scale(0.01)';
      circle.style.opacity = '0';

      setTimeout(() => {
        circle.remove();
      }, 500);
    }
  }, 500);
});
