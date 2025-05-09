document.addEventListener("DOMContentLoaded", () => {
  const onglets = document.querySelectorAll('.onglet');
  const contenus = document.querySelectorAll('.contenu');
  const boutonsSuivant = document.querySelectorAll('.next'); 
  const boutonsPrecedent = document.querySelectorAll('.precedent');
  const form = document.getElementById('info-perso');

  let etapeValidee = 1;

  // Sélection des champs
  const prenom = document.getElementById('input-prenom');
  const nom = document.getElementById('input-nom');
  const email = document.getElementById('input-email');
  const telephone = document.getElementById('input-telephone');
  const telerror = document.getElementById('telephoneerror');

  // Fonction de validation
  function form_verify() {
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const telephoneValue = telephone.value.trim();

    resetErrors();

    let isValid = true;

    if (prenomValue === "") {
      setError(prenom, "Veuillez renseigner ce champ.");
      isValid = false;
    }

    if (nomValue === "") {
      setError(nom, "Veuillez renseigner ce champ.");
      isValid = false;
    }

    if (emailValue === "") {
      setError(email, "Veuillez renseigner ce champ.");
      isValid = false;
    }

    if (telephoneValue === "") {
      setError(telephone, "Veuillez renseigner ce champ.");
      isValid = false;
    } else if (telephoneValue.length !== 10 || !/^\d{10}$/.test(telephoneValue)) {
      setError(telephone, "Le numéro doit comporter exactement 10 chiffres.");
      isValid = false;
    }

    return isValid;
  }

  telephone.addEventListener('input', () => {
    let value = telephone.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    telephone.value = value;

    telerror.style.display = value.length !== 10 ? "block" : "none";
  });

  function resetErrors() {
    const errorMessages = document.querySelectorAll("small");
    errorMessages.forEach(error => {
      error.innerText = "";
    });
  }

  function setError(elem, message) {
    const formControl = elem.closest('.cont-input');
    const error = formControl.querySelector('small');
    error.innerText = message;
    error.style.color = "red";
  }

  function activerOnglet(targetId) {
    const contenus = document.querySelectorAll('.contenu');
  
    contenus.forEach(c => {
      if (c.classList.contains('actif')) {
        c.classList.remove('actif');
        c.classList.add('inactif');
  
        // Attendre la fin de la transition de sortie
        setTimeout(() => {
          c.classList.remove('inactif');
          c.style.visibility = 'hidden';
          c.style.pointerEvents = 'none';
        }, 500); // Transition out : 0.5s
      }
    });
  
    const targetContent = document.getElementById(targetId);
  
    // Important : afficher le nouveau tout de suite pour que la transition entre fonctionne
    targetContent.style.visibility = 'visible';
    targetContent.style.pointerEvents = 'auto';
  
    // Ajouter léger délai pour forcer le navigateur à "voir" le changement
    setTimeout(() => {
      targetContent.classList.add('actif');
    }, 20); // un petit délai (10–20ms) pour que le DOM force la reflow et applique la transition
  }
  
  

 // Bouton "Suivant"
 boutonsSuivant.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const currentTab = document.querySelector('.contenu.actif');
    const currentId = currentTab.id;
    const ongletsArray = Array.from(onglets);
    const currentOnglet = ongletsArray.find(o => o.dataset.target === currentId);
    const currentIndex = ongletsArray.indexOf(currentOnglet);
    const nextOnglet = ongletsArray[currentIndex + 1];

    // Cas spécial : passage vers tab4 (dernière étape)
    if (btn.dataset.target === "tab4") {
      const checkbox = document.getElementById("condition");
      const checkboxError = document.getElementById("checkboxError");

      // Vérification de l'état de la checkbox
      if (!checkbox.checked) {
        e.preventDefault(); // Empêche de passer à l'étape suivante
        checkboxError.style.display = "block"; // Affiche l'erreur
        return; // Ne pas exécuter le reste
      } else {
        checkboxError.style.display = "none"; // Masque l'erreur si la case est cochée
        etapeValidee = currentIndex + 2;
        activerOnglet("tab4");
        return; //  Ne pas exécuter le reste
      }
    }

    // Validation classique pour les autres étapes
    if (form_verify()) {
      if (nextOnglet) {
        etapeValidee = currentIndex + 2;
        activerOnglet(nextOnglet.dataset.target);
      }
    } else {
      alert("Veuillez remplir tous les champs avant de passer à l'étape suivante.");
    }
  });
});




  // Bouton "Précédent"
  boutonsPrecedent.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTab = document.querySelector('.contenu.actif');
      const currentId = currentTab.id;
      const ongletsArray = Array.from(onglets);
      const currentOnglet = ongletsArray.find(o => o.dataset.target === currentId);
      const currentIndex = ongletsArray.indexOf(currentOnglet);
      const previousOnglet = ongletsArray[currentIndex - 1];

      if (previousOnglet) {
        activerOnglet(previousOnglet.dataset.target);
      }
    });
  });

  // Gestion activation bouton final selon case cochée
 // Gestion spéciale pour le dernier bouton (vers tab4)
const envoyerBtn = document.querySelector('.next[data-target="tab4"]');
const checkbox = document.getElementById("condition");
const checkboxError = document.getElementById("checkboxError");



// Activer/désactiver bouton selon la checkbox
checkbox.addEventListener('change', () => {
  envoyerBtn.disabled = !checkbox.checked;
});

});
