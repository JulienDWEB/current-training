let nombre = prompt("Veuillez rentrer une valeur entre 50 er 100");
const inputValue = document.getElementById("nombre1");
const btnSubmit = document.getElementById("btnsubmit");
const form = document.querySelector("form");


/* while (nombre <= 100) { 
    if(nombre >= 50 && nombre <= 100) {
    alert("vous avez trouver la valeur");
break;
} else {
    nombre = prompt("Valeur incorrexte, veuillez entrer un nombre entre 50 & 100 ");
}
}
 */
/* form.addEventListener('submit',function (event) {
const valeur = parseInt(inputValue.value); 
const erreur = document.getElementById('erreur')
while (valeur >= 50 ) {
    if (valeur >= 50 && valeur <= 100) {
        event.preventDefault()
        alert ('Valeur Correct')
        break;
    } // Si valeur superieur et inferieur a 100 alors 
    else { // Sinon Valeur incorect puis break (sort de la boucle)
        erreur.style.display = 'block';
        inputValue.value = ''
    }
}
}) */


/*  form.addEventListener('submit', function(event) {
const valeur = parseInt(inputValue.value); // On récuperer .value (qui et la valeur d'entrée)
    if (valeur <= 50 ) { // Si Valeur et inferieur a 50 alors log(correct)
        event.preventDefault();
        console.log("Valeur correcte :", valeur);
        
    } else { // Sinon alert('Valeur incorrect')
        event.preventDefault();
        alert('Valeur incorrect')

    }
    
} )

    
 */

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Bloque l'envoi du formulaire

    const valeur = parseInt(inputValue.value);

    if (!isNaN(valeur) && valeur >= 50 && valeur <= 100) {
        alert('Valeur correcte');
        erreur.style.display = 'none'; // Cache le message d’erreur s’il était affiché
    } else {
        erreur.style.display = 'block'; // Affiche le message d’erreur
        inputValue.value = ''; // Vide le champ
    }
});