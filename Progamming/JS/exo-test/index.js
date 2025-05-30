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
let age2 = 32;

let personnes = [
  {prenom: "John", nom: "Doe", role: "chef", age: age2},
  {prenom: "Julien", age: 17, role: "employer"},
  {prenom: "Caroline", age: 14, role: "employer"},
  {prenom: "Framboise", age: 18, role: "employer"},
];

console.table(personnes)

function verifAge(personnes) {
    for (let personne of personnes) {
        if (personne.age >= 18 ) {
            console.log(`${personne.prenom} Tu es majeur!`);
        } else {
            console.log(`${personne.prenom} tu es mineur!`);
        }
    }
}

verifAge(personnes);
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
Total TVA : ${montantTVA.toFixed(2)} €  
Total Avec TVA : ${tva.toFixed(2)}  € 
Offre spéciale : -10% jusqu'à dimanche !
`;
// toFixed permet de mettre en parametre combien de 0 on veut apres la virgule //
console.log(description);
i = 1
function tabNub() { // for renvoie la valeur de i jusqu'a ca atteigne 10 //
  for (let i = 1; i <= 10; i++) { 
    console.log(i);
  }
}

tabNub(); 

let tab1 = [
  [12, 16, "trois", 17],
  [12, 16, "c", 22]
];


console.log(tab1[0][2]); 
console.table(tab1[1]); 


function tabNub() {
  let resultats = [];
  for (let i = 1; i <= 10; i++) {
    resultats.push(i); 
    resultats.push([10,20,30]);
    resultats.shift()
  }
  return resultats;
}

console.table(tabNub()); // [1, 2, 3, ..., 10]


function getStatus(age) {
  return age >= 18 ? "majeur(e)" : "mineur(e)";
}

if (age >= 18 ) {
  console.log("Je suis majeur");
} else {
  console.log("Je suis mineur");
};

let prenom = "Alice";
let nom = "juga";
let age3 = 19;
let ville = 'Paris' ; 


let descriptionAlice = `
Prénom : ${prenom} 
Nom : ${nom}  
Age : ${age3} 
Ville : ${ville}   
Vous etes : ${getStatus(age3)} 
`;

console.table(descriptionAlice)



function CompteBancaire() {
    // Création de l'objet représentant le compte bancaire
    let compte = {
        titulaire: "John Doe",
        solde: 1000,
        typeDeCarte: "Mastercard",
        age: 35  // Par exemple
    };
    
  
    
    // Modification du solde en ajoutant 500
    compte.solde += 500;

    return compte;
}
let resultatBancaire = CompteBancaire();
console.log(resultatBancaire);

let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type" : "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]

      }
      console.log(data.name); 
      console.log(data.ppu); 
      console.log(data.topping[6].id); 
      console.log(data.topping[1]); 
      console.log(data.batters.batter[3].id); 
      console.log(data.batters.batter[3]); 

let batter = data.batters.batter[0].type;  // On récupère le premier élément
let phrase2 = `${batter} est l'id ${batter}`;
console.log(phrase2);


let phrase = data.batters.batter[0].id + ` est l'id ` + data.batters.batter[0].type;
let phrase1 = data.topping[6].id + ` est l'id ` + data.topping[6].type + data.name;
      console.log(phrase);
      console.log(phrase1);

let part = data.batters.batter[0].id ;
let part1 = data.topping[0].id
let part2 = `${part}  ${part1} sont les premier index de leur tableau`

console.log(part2);

// Variables bien nommées
let firstBatter = data.batters.batter[0];
let firstTopping = data.topping[0];

// Phrase 1 : Rick est l'id 1001
let phraseA = `${firstBatter.type} est l'id ${firstBatter.id}`;

// Phrase 2 : 5004 est l'id MapleCake
let phraseB = `${data.topping[6].id} est l'id ${data.topping[6].type}${data.name}`;

// Phrase 3 : 1001 5001 sont les premier index de leur tableau
let phraseC = `${firstBatter.id} ${firstTopping.id} sont les premiers index de leur tableau`;

// Affichage
console.log(phraseA);
console.log(phraseB);
console.log(phraseC);

let count = 0; // On initialise count à 0
while (count < 10) { // Tant que count est inférieur à 10
    count++; // On incrémente count de 1
}
console.log(count);


let num = 2;

switch (num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Default case");
}

let num1= 1;

switch (num1) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Default case");
}

// i++  
// i = i + 1 // Maniere d'ajouter +1 
// i+= 1 
let tabA = ["bordeaux","Montpellier", "Toulouse"]
let mot = ""

for ( let i = 0; i < tabA[0].length; i++) {
    mot += tabA[0][i]
    console.log(mot);
    
}

// let phraseD = "je fais une phrase" 
// phraseD++ // NAN 

let paire = [2,4,6,8,10,12,14,16,18,20] // je creer deux tableau , pair && impair , pour pouvoir les réutiliser dans ma boucle
let impaire = [1,3,5,7,9,11,13,15,17,19]

for (let i = 0; i < 10; i++) {
    
console.log("pair :", paire[i]);
console.log("impair :", impaire[i]);
console.log(paire);

}
for (let i = 0; i < 10; i++) {
  console.log(` ${i} → Pair: ${paire[i]} | Impair: ${impaire[i]}`); // version Concaténer 
}
for (let index = 2; index <= 20; index = index + 2) {
  console.log(index);   
  
}
for (let i = 0; i <= 20 ; i++) {
  if (i % 2 == 0) {
    console.log(i);
    
  }
  
} 