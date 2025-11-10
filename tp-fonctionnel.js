var counter = 0;
//  fonction pure
function add(a, b) {
    return a + b;
}
//  fonction impure qui augmente une variable globale.
function increment() {
    counter++;
    return counter;
}
var student = { name: "Léo", grade: 14 };
console.log(student); // toujours 14
// Fonction d’ordre supérieur applyNTimes 
function applyNTimes(f, n, x) {
    if (n <= 0) {
        return x;
    }
    else {
        return applyNTimes(f, n - 1, f(x)); // appel récursif
    }
}
var double = function (x) { return x * 2; };
console.log(applyNTimes(double, 3, 1)); // 8
console.log(""); // ligne vide pour séparer les parties
var numbers = [1, 2, 3, 4, 5, 6];
// Garder uniquement les nombres pairs.
var even = numbers.filter(function (x) { return x % 2 === 0; });
console.log("Les nombres pairs sont :", even); // [2, 4, 6]
// Les multiplier par 2.
var squares = even.map(function (x) { return x * 2; });
console.log("Les nombres pairs, mutiplier par 2 :", squares); // [4, 8, 12]
// Faire la somme de tous les résultats.
var sums = squares.reduce(function (acc, x) { return acc + x; }, 0);
console.log("La somme de tous les résultats :", sums); //24
console.log(""); // ligne vide pour séparer les parties
// une fonction sum utilisant reduce,
function sum(arr) {
    return arr.reduce(function (acc, x) { return acc + x; }, 0);
}
// Moyenne des éléments
function average(arr) {
    return sum(arr) / arr.length;
}
// Produit des éléments
function product(arr) {
    return arr.reduce(function (acc, x) { return acc * x; }, 1);
}
console.log("Somme des éléments est :", sum(numbers)); // 21
console.log("Moyenne des éléments est :", average(numbers)); // 3.5
console.log("Produit de tous les éléments est : ", product(numbers)); // 720
console.log(""); // ligne vide pour séparer les parties
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
var ages = [15, 17, 25, 30];
// Trouver le premier utilisateur majeur avec find.
var adult = users.find(function (u) { return u.age >= 18; });
console.log("Le premier utilisateur majeur : ", adult);
//Vérifier s’il y a au moins un mineur
console.log("Est-ce-que il y a au moins un mineur ?", ages.some(function (a) { return a < 18; })); // true
//Vérifier si tous les utilisateurs ont plus de 10 ans
console.log("Est-ce-que tous les utiisateurs ont plus de 10 ans ?", ages.every(function (a) { return a > 10; })); // true
var names = users.map(function (u) { return u.name; });
//vérifier si "Alice" et "Eve" sont présents dans la liste.
console.log("Est-ce-que Alice est présente dasn la liste ?", names.includes("Alice")); // true
console.log("Est-ce-que Eve est présente dasn la liste ?", names.includes("Eve")); // false
console.log(""); // ligne vide pour séparer les parties
var usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];
// Obtenir une liste unique de tous les hobbies sans tableau imbriqué.
console.log("Liste unique de tous les hobbies : ", usersWithHobbies.flatMap(function (u) { return u.hobbies; })); // ["climbing", "yoga", "gaming", "reading", "hiking"]
// Trier sans modifier l’original
var slice = users.slice().sort(function (a, b) { return a.age - b.age; });
// Prendre les 2 plus jeunes
var deux = slice.slice(0, 2);
console.log("Liste originale :", users);
console.log("2 plus jeunes :", deux);
console.log(""); // ligne vide pour séparer les parties
var data = [
    { name: "Alice", age: 25, country: "France" },
    { name: "Bob", age: 15, country: "France" },
    { name: "Charlie", age: 30, country: "Spain" },
    { name: "Diana", age: 22, country: "France" },
];
// Récuperer les adultes français.
var adtF = data.filter(function (a) { return a.age >= 18 && a.country === "France"; });
console.log("Récuperer les adultes français :", adtF); //  [{ name: "Alice", age: 25, country: "France" }, { name: "Bob", age: 15, country: "France" }, { name: "Diana", age: 22, country: "France" }]
// Extraire leurs noms.
var noms = adtF.map(function (n) { return n.name; });
console.log("Extraire leurs noms :", noms); //  ["Alice", "Bob", "Diana"]
// Trier sans modifier l’original
var agedecroisant = adtF.slice().sort(function (a, b) { return b.age - a.age; });
console.log("Trier par age décroissant :", agedecroisant); // [{ name: "Alice", age: 25, country: "France" }, { name: "Diana", age: 22, country: "France" }, { name: "Bob", age: 15, country: "France" }]
//Calculer la moyenne d’âge.
var moyenneAge = adtF.reduce(function (acc, u) { return acc + u.age; }, 0) / adtF.length;
console.log("Moyenne Age :", moyenneAge); // 23
