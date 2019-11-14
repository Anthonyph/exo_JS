function ask_number() {
  return prompt("De quel nombre veux-tu calculer la factorielle ?");
}

function math(number) {
  while(number !== 0) {
    number * (number - 1)
    console.log(number);
    number --
  }
}

function perform() {
  math(ask_number());
}

perform()
