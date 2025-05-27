// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
// Mouse Effect //

document.addEventListener("DOMContentLoaded", () => {
  const circle = document.createElement('div');
  document.body.appendChild(circle);
  circle.classList.add("mousecircle");
  const size = Math.random() * 200 + 100 + "px";
  circle.style.height = size;
  circle.style.width = size;

  const circle1 = document.createElement('div');
  document.body.appendChild(circle1);
  circle1.classList.add("mousecircle1");
  const size1 = Math.random() * 200 + 1 + "px";
  circle1.style.height = size1;
  circle1.style.width = size1;

  document.addEventListener("mousemove", (e) => {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;

    circle1.style.left = `${e.clientX}px`;
    circle1.style.top = `${e.clientY}px`;
  });
});