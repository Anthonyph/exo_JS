function ask_number() {
  let answer = prompt("Combien d'étage pour la pyramide ?");
  if (answer <= 1) {
    while (answer <= 1) {
      console.log("Plus grand que 1 svp");
      answer = prompt('Choisi un nouveau numéro');
    }
  }
  return answer
}

function stairs(number) {
  let a = '#';
  let b = ' ';
  for(let i = 1; i <= number; i++) {
    console.log(b.repeat(number - i) + a.repeat(i));
  }
}

function perform() {
  stairs(ask_number());
}

perform();
