let counter = 0;

//  fonction pure
function add(a: number, b: number): number {
    return a + b;
}

//  fonction impure qui augmente une variable globale.
function increment(): number{
    counter ++;
    return counter;
}

const student = { name: "Léo", grade: 14 };
console.log(student); // toujours 14


// Fonction d’ordre supérieur applyNTimes 
function applyNTimes(f: (x: number) => number, n: number, x: number): number {
    if (n <= 0) {
        return x;
    } else {
        return applyNTimes(f, n - 1, f(x)); // appel récursif
    }
}

const double = (x: number) => x * 2;
console.log(applyNTimes(double, 3, 1)); // 8

console.log("");// ligne vide pour séparer les parties

const numbers = [1, 2, 3, 4, 5, 6];

// Garder uniquement les nombres pairs.
const even = numbers.filter(x => x % 2 === 0);
console.log("Les nombres pairs sont :", even); // [2, 4, 6]

// Les multiplier par 2.
const squares = even.map(x => x * 2);
console.log("Les nombres pairs, mutiplier par 2 :", squares); // [4, 8, 12]

// Faire la somme de tous les résultats.
const sums = squares.reduce((acc, x) => acc + x, 0);
console.log("La somme de tous les résultats :", sums); //24

console.log("");// ligne vide pour séparer les parties

// une fonction sum utilisant reduce,
function sum(arr: number[]): number {
 return arr.reduce((acc, x) => acc + x, 0);
}

// Moyenne des éléments
function average(arr: number[]): number {
  return sum(arr) / arr.length;
}

// Produit des éléments
function product(arr: number[]): number {
  return arr.reduce((acc, x) => acc * x, 1);
}

console.log("Somme des éléments est :", sum(numbers));          // 21
console.log("Moyenne des éléments est :", average(numbers));  // 3.5
console.log("Produit de tous les éléments est : ", product(numbers));  // 720

console.log("");// ligne vide pour séparer les parties

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

const ages = [15, 17, 25, 30];

// Trouver le premier utilisateur majeur avec find.
const adult = users.find(u => u.age >= 18);

console.log("Le premier utilisateur majeur : ", adult); 

//Vérifier s’il y a au moins un mineur
console.log("Est-ce-que il y a au moins un mineur ?", ages.some(a => a < 18)); // true

//Vérifier si tous les utilisateurs ont plus de 10 ans
console.log("Est-ce-que tous les utiisateurs ont plus de 10 ans ?", ages.every(a => a > 10)); // true


const names = users.map(u => u.name);

//vérifier si "Alice" et "Eve" sont présents dans la liste.
console.log("Est-ce-que Alice est présente dasn la liste ?", names.includes("Alice"));// true
console.log("Est-ce-que Eve est présente dasn la liste ?", names.includes("Eve"));// false

console.log("");// ligne vide pour séparer les parties

const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

// Obtenir une liste unique de tous les hobbies sans tableau imbriqué.
console.log("Liste unique de tous les hobbies : ", usersWithHobbies.flatMap(u => u.hobbies)); // ["climbing", "yoga", "gaming", "reading", "hiking"]

// Trier sans modifier l’original
const slice = users.slice().sort((a, b) => a.age - b.age);

// Prendre les 2 plus jeunes
const deux = slice.slice(0, 2);

console.log("Liste originale :", users);
console.log("2 plus jeunes :", deux);

console.log("");// ligne vide pour séparer les parties

// Partie Bonus

type User = { name: string; age: number; country: string };

const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
];

// Récuperer les adultes français.
const adtF = data.filter(a => a.age >= 18 && a.country === "France");
console.log("Récuperer les adultes français :", adtF); //  [{ name: "Alice", age: 25, country: "France" }, { name: "Diana", age: 22, country: "France" }]

// Extraire leurs noms.
const noms = adtF.map(n => n.name);
console.log("Extraire leurs noms :", noms); //  ["Alice", "Diana"]

// Trier sans modifier l’original
const agedecroisant = adtF.slice().sort((a, b) => b.age - a.age);
console.log("Trier par age décroissant :", agedecroisant); // [{ name: "Alice", age: 25, country: "France" }, { name: "Diana", age: 22, country: "France" }]
 
//Calculer la moyenne d’âge.
const moyenneAge = adtF.reduce((acc, u) => acc + u.age, 0) / adtF.length;
console.log("Moyenne Age :", moyenneAge); // 23.5