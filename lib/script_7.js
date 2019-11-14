function input() {
  return prompt("Un mot à dire notre bot ?");
}

function find() {
  expr = ''
  //BOUCLE POUR PARLER A L'INFINI AVEC LE BOT
  while (expr != 'quit') {
    expr = input()
    console.log(expr.length);
    //FINIE PAR UN POINT D'INTERROGATION
    if (expr[expr.length - 1] == "?") {
      console.log('Ouais Ouais..');
    }

    //TOUT EN MAJUSCULE ?
    else if(expr == expr.toUpperCase() && expr !== '' ) {
      console.log("Calm down !");
    }

    //PHRASE CONTIENT LE MOT FORNITE
    else if(expr.toLowerCase().includes('fornite')) {
      console.log('Quel jeu de merde');
    }
    else if(expr.length == 0){
    console.log("T'es en PLS?");
    }

    else {
      console.log('Balek');
    }
  }
}

function perform() {
  find()
}

perform()
