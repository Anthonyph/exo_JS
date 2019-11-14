const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// NÉS DANS LES ANNÉES 70 (1971 - 1980)
function born_70() {
  console.log("Liste des entrepreneurs nés dans les années 1970:");
  for(let index in entrepreneurs) {
    if (entrepreneurs[index].year > 1970 && entrepreneurs[index].year <= 1980) {
      console.log(entrepreneurs[index]);
    }
  }
}

function name() {
  console.log("Array comprenant prénom et nom des entrepreneurs:");
  array_entrepreneurs = [];
  for(let index in entrepreneurs) {
    // .push POUR AJOUTER PRENOM ET NOM DANS L'ARRAY
    array_entrepreneurs.push(entrepreneurs[index].first + " " + entrepreneurs[index].last);
  }
  console.log(array_entrepreneurs);
}

function age_today() {
  //POUR TOUJOURS AVOIR L'ANNÉE ACTUELLE
  let currentYear = new Date().getFullYear();
  console.log("Age de tous les entrepreneurs");
  for(let index in entrepreneurs) {
    let age = currentYear - entrepreneurs[index].year;
    console.log(`Voici l'âge qu'aurait ${entrepreneurs[index].first} ${entrepreneurs[index].last} aujourd'hui: ${age} ans`);
  }
}

function sort() {
  console.log("Tri du nom par ordre alphabetique");
  console.log(entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : -1));
 }

function perform() {
born_70()
name()
age_today()
sort()
}

perform()
