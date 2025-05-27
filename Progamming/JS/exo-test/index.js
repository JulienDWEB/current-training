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

let text1 = "Bonjour";

// Ajout simple
text1 = text1 + " je m'appelle Julien";

// OU version moderne avec interpolation
text1 = `${text1}, je m'appelle Julien`;

console.log(text1);  // Bonjour, je m'appelle Julien

 console.log(text1)


// Tableau a plusieur valeur  
let age2 = 16;

let personnes = [
  {prenom: "John", nom: "Doe", role: "chef", age: age2},
  {prenom: "Julien", age: 28, role: "employer"},
  {prenom: "Caroline", age: 35, role: "employer"},
  {prenom: "Framboise", age: 22, role: "employer"},
];

age++ //age + 1 

// function bonjour()
// { console.log("je vous salue")
// }
// bonjour()

function bonjour()
{ console.log("je vous salue")
}
bonjour()



// function phrase(text) {
//     console.log(text)
// }
// phrase("j'ecrit un text")  // Appelle au paramettre

// Lucas = 17  
// Ameli = 3  
// Thomas = 10  
// Damien = 20  
// function moyenne(personnes){
//     console.log(`Sa moyenne est de ${personnes}`)
// }

// moyenne(Lucas)
// moyenne(Ameli)
// moyenne(Thomas)
// moyenne(Damien)

// console.log(personnes[0].age); 

//  console.log(personnes);

//  let b 
//  moyenne2 = (b) => {console.log(`Sa moyenne est de $(b)`);} pas a preconiser

let alice = 'Alice'
function saluer(nom) {
    return `Bonjour, ${nom}`;
}
saluer(alice)
console.log(saluer(alice));

function saluer(nom) {
  console.log(`Bonjour, ${nom}`);
}

saluer(alice); // Bonjour, Alice

let nombre2 = 25 ;
let nombre1 = nombre2 * 2 ;

function multiplication(nombre1, nombre2) {
    return nombre1 * nombre2
}
console.log(multiplication(24,25))


// Fiche Produit Variable [Tableau] 

let produit = "Clavier mécanique";
let prix = 79.99;
let tva = prix / 1.20;
let montantTVA = prix - tva ; 
let description = `
Produit : ${produit} 
Prix TTC : ${prix.toFixed(2)} €  
Total TVA : ${montantTVA.toFixed(2)}
Total Avec TVA : ${tva.toFixed(2)}  € 
Offre spéciale : -10% jusqu'à dimanche !
`;
// toFixed permet de mettre en parametre combien de 0 on veut apres la virgule //
console.log(description);
