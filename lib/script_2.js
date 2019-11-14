function ask_number() {
  let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
  if (answer <= 1) {
    while (answer <= 1) {
      console.log("Plus grand que 0 svp");
      answer = prompt('Choisi un nouveau numéro');
    }
  }
  return answer
}

function math(number) {
  let factor = number;
  for (let i = number - 1; i > 0; i--) {
    console.log(factor + "*" + i + "= " + (factor = factor * i));
  }
  console.log("Résultat factorisation de " + number + " = " + factor);
}

function perform() {
  math(ask_number());
}

perform()
