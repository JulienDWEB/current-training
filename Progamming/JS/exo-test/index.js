let age = 18;
const ageExemple = 18;

age = 30;  // Valide 18 et ecrase et remplacer
// ageExemple = 30; // Faux car on essaye de modifie une constante 

console.log(age);

// Selecteur 

document.querySelector('h1').style.backgroundColor = "yellow";

document.querySelector // cible qu'une seul balise 
document.querySelectorAll // selection de tout les balise cible 

document.getElementById // #
document.getElementsByClassName //le s de element veut dire qui y a plusieur element 
document.getElementsByName
document.getElementsByTagName

// Opération Mathématique

Number
String
undefined // creer mais pas affecter 
null // Existe pas

Boolean // vrai ou faux // True or False //
Array 
Object

 let age1 = 22;
 let monAge = 22;
 let text = `J'écris un texte ${age1 + age}`;
 let info;

 console.log(age >= monAge); 
//  '>=' = superieur ou egal a 
//  '>' '<' = superieur , inferieur

// TABLEAU 

let tab = [age,monAge,4,5]

console.log(tab) 
console.log(text)

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
 console.log(3**3)
