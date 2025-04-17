document.addEventListener("DOMContentLoaded", () => {
    const onglets = document.querySelectorAll('.onglet');
    const contenus = document.querySelectorAll('.contenu');
    const boutonsSuivant = document.querySelectorAll('.next');
  
    // Activer un onglet
    function activerOnglet(targetId) {
      // Retirer les classes "actif"
      onglets.forEach(o => o.classList.remove('actif'));
      contenus.forEach(c => c.classList.remove('actif'));
  
      // Activer le bon contenu et le bon onglet
      document.getElementById(targetId).classList.add('actif');
      const ongletCible = [...onglets].find(o => o.dataset.target === targetId);
      if (ongletCible) ongletCible.classList.add('actif');
    }
  
    // Clic sur les onglets
    onglets.forEach(onglet => {
      onglet.addEventListener('click', () => {
        const target = onglet.dataset.target;
        activerOnglet(target);
      });
    });
  
    // Clic sur les boutons "Suivant"
    boutonsSuivant.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTab = document.querySelector('.contenu.actif');
        const currentId = currentTab.id;
  
        const ongletsArray = Array.from(onglets);
        const currentOnglet = ongletsArray.find(o => o.dataset.target === currentId);
        const currentIndex = ongletsArray.indexOf(currentOnglet);
  
        const nextOnglet = ongletsArray[currentIndex + 1];
        if (nextOnglet) {
          activerOnglet(nextOnglet.dataset.target);
        }
      });
    });
  });
  