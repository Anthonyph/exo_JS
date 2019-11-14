const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function rented_1() {
  console.log("Est-ce que tous les libres ont au moins été empruntés une fois?");
  for(let index in books) {
    if (books[index].rented > 0) {
      console.log(true);
    }
    else {
      console.log("Au moins 1 livre n'a pas été emprunté");
    }
  }
}

function maxRented() {
  let max = books[0].rented;
  for(let index in books) {
    if(books[index].rented > max) {
      max = books[index].rented;
    }
  }
  console.log("Bouquin le plus emprunté:");
  console.log(books.find(obj => obj.rented == max));
}

function minRented() {
  let min = books[0].rented
  for(let index in books) {
    if(books[index].rented < min) {
      min = books[index].rented;
    }
  }
  console.log("Bouquin le moins emprunté:");
  console.log(books.find(obj => obj.rented == min));
}

function findById() {
  /* https://www.linkedin.com/pulse/javascript-find-object-array-based-objects-property-rafael
  LIEN QUI RENVOIT À CETTE FONCTION */
  console.log("Bouquin à l'ID 873495:");
  console.log(books.find(obj => obj.id == 873495));
}

function deleteById() {
  console.log(books);
  console.log("Suppresion du bouquin à l'id 133712");
  /* 2 ARGUMENTS POUR LA FONCTIONS .splice
  EN PREMIER LA RECHERCHE DE L'INDEX, CARACTRISÉ PAR LE .find
  EN SECOND LE NOMBRE D'ÉLEMENTS À SUPPRIMER, ICI, UN SEUL */
  books.splice(books.find(obj => obj.id == 133712), 1);
  console.log(books);
}

function sort() {
  console.log("Tri du nom par ordre alphabetique");
  console.log(books.sort((a,b) => (a.title > b.title) ? 1 : -1));
}

function perform() {
  rented_1()
  maxRented()
  minRented()
  findById()
  deleteById()
  sort()
}

perform()
