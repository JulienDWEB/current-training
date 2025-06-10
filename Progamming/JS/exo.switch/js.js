const btn = document.querySelector('#btn');
const Cases = document.querySelectorAll(".case");

btn.addEventListener('click', () => {
    const textAnnee = document.querySelector(".title-year");
    const textMois = document.querySelector(".content-mois");

    // Active toutes les cases
    Cases.forEach(c => c.classList.add('active'));

    const mois = Math.floor(Math.random() * 12) + 1;
    const year = Math.floor(Math.random() * 26) + 2000;

    textAnnee.textContent = "Nous sommes en " + year;

    // Calcul de l'année bissextile (true/false)
    const bissextile = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    switch (mois) {
        case 1:
            textMois.textContent = "Nous sommes au mois de Janvier et il y a 31 jours !";
            break;
        case 2:
            textMois.textContent = bissextile
                ? "Nous sommes au mois de Février et il y a 29 jours !"
                : "Nous sommes au mois de Février et il y a 28 jours !";
            break;
        case 3:
            textMois.textContent = "Nous sommes au mois de Mars et il y a 31 jours !";
            break;
        case 4:
            textMois.textContent = "Nous sommes au mois d'Avril et il y a 30 jours !";
            break;
        case 5:
            textMois.textContent = "Nous sommes au mois de Mai et il y a 31 jours !";
            break;
        case 6:
            textMois.textContent = "Nous sommes au mois de Juin et il y a 30 jours !";
            break;
        case 7:
            textMois.textContent = "Nous sommes au mois de Juillet et il y a 31 jours !";
            break;
        case 8:
            textMois.textContent = "Nous sommes au mois d'Août et il y a 31 jours !";
            break;
        case 9:
            textMois.textContent = "Nous sommes au mois de Septembre et il y a 30 jours !";
            break;
        case 10:
            textMois.textContent = "Nous sommes au mois d'Octobre et il y a 31 jours !";
            break;
        case 11:
            textMois.textContent = "Nous sommes au mois de Novembre et il y a 30 jours !";
            break;
        case 12:
            textMois.textContent = "Nous sommes au mois de Décembre et il y a 31 jours !";
            break;
        default:
            console.log('Mois non reconnu');
            break;
    }
});
