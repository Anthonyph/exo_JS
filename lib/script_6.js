
function aminoAcid(arn) {
  let sequence = []
  let i = 0
  while (i < arn.length) {
    //SELECTION DES 3 NUCLÉOTIDES DEPUIS LE DÉBUT
    let words = arn.slice(i, (i+3));
    //APPEL DE LA FONCTION POUR SELECTIONNER L'ACIDE AMINÉ (AA)
    let AA = when(words);
    //AJOUT DE L'AA DANS UN ARRAY
    sequence.push(AA);
    i += 3
  }
  return sequence
}

function joinAminoAcid(arn) {
  //APPEL DE L'ARRAY CONTENANT LES AA
  //.join POUR AVOIR TOUT LES AA CORRESPONDANTS À LA SEQUENCE ARN
  console.log(aminoAcid(arn).join('-'));
}

// FONCTION POUR SELECTIONNER L'ACIDE AMINÉ, AVEC LES 3 NUCLÉOTIDES CORRESPONDANTS
function when(name) {
  let expr = name
  switch (expr) {
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
    case 'AGU':
    case 'AGC':
      name = 'Sérine';
      return name;
      break;
    case 'CCU':
    case 'CCC':
    case 'CCA':
    case 'CCG':
      name = 'Proline';
      return name;
      break;
    case 'UUA':
    case 'UUG':
      name = 'Leucine';
      return name;
      break;
    case 'UUU':
    case 'UUC':
      name = 'Phénylalanine'
      return name;
      break;
    case 'CGU':
    case 'CGC':
    case 'CGG':
    case 'AGA':
    case 'AGG':
      name = 'Arginine'
      return name;
      break;
    case 'UAU':
    case 'UAC':
      name = 'Tyrosine'
      return name;
      break;

    default:
      name = "Error ?"
      break;
  }
}

function perform() {
  let ARN = 'CCGUCGUUGCGCUACAGC';
  let ARNbis = 'CCUCGCCGGUACUUCUCG';
  // CHOISIR EN ARG L'ARN À TRADUIRE
  joinAminoAcid(ARNbis)
}

perform()
