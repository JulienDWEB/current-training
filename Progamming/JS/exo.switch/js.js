/* Écrivez une fonction 
qui prend en entrée un mois 
(1 pour janvier, 2 pour février, etc.) 
et retourne le nombre de jours dans ce mois. 
Assurez-vous de gérer correctement le cas de 
février pour les années bissextiles (29 jours) 
et non bissextiles (28 jours).
 */
let mois = Math.floor(Math.random() * 12) + 1;
var year = 2017;
let bissextile;
let textMois = document.querySelector(".content-mois");
console.log(textMois);

if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
    bissextile = 1;
    console.log(year + " est bissextile");
} else {
    bissextile = 0;
    console.log(year + " n'est pas bissextile");
}

switch (mois) {
    case 1:
        
        textMois.textContent = "Nous somme au mois de Janvier et il y a 31 jours !"

        break;
        case 2:
            if (bissextile === 1) {
                console.log("Le mois de Février a 29 jours");
                textMois.textContent = "Nous somme au mois de Fevrier et il y a 29 jours !"
            } else {
                
                textMois.textContent = "Nous somme au mois de Fevrier et il y a 28 jours !"
            }
            break;
            case 3:
              
                textMois.textContent = "Nous somme au mois de Mars et il y a 31 jours !"
                break;
                
                
                case 4:
                textMois.textContent = "Nous somme au mois d'Avril et il y a 30 jours !"
                    
                    
                break;
                case 5:
                textMois.textContent = "Nous somme au mois de Mai et il y a 31 jours !"
                        
                break;
                case 6:
                textMois.textContent = "Nous somme au mois de Juin et il y a 30 jours !"
                
                break;
                case 7:
                    
                    textMois.textContent = "Nous somme au mois de Juillet et il y a 31 jours !"
                    
                    break;
                    case 8:
                  
                        textMois.textContent = "Nous somme au mois de Août et il y a 30 jours !"
                        
                        break;
                        case 9:
        textMois.textContent = "Nous somme au mois de Septembre et il y a 31 jours !"
        
        
        break;
        case 10:
          
            textMois.textContent = "Nous somme au mois de Octobre et il y a 30 jours !"
            
            break;
            case 11:
                
                textMois.textContent = "Nous somme au mois de Novembre et il y a 31 jours !"
                
                break;
                case 12:
                    
                    textMois.textContent = "Nous somme au mois de Decembre et il y a 30 jours !"
                    
        break;
    
    default:
        console.log('Mois non-reconnu');
        
        break;
}