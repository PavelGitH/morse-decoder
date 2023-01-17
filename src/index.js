const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let answer = '';

  let arrayExpr = expr.split('');
  let spellExpr = [];
  let numLitters = expr.length / 10;

  for (let i = 0; i < numLitters; i++) {
    spellExpr.push(arrayExpr.splice(0, 10).join(''));
  }

  MORSE_TABLE_BC = {};
  for (let key in MORSE_TABLE) {
    let keyArrayMT = key.split('');
    let keyArrayMTB = [];
    for (let i = 0; i < keyArrayMT.length; i++) {
      if (keyArrayMT[i] == '.') {
        keyArrayMTB.push('10');
      }
      if (keyArrayMT[i] == '-') {
        keyArrayMTB.push('11');
      }
    }
    keyArrayMTB.unshift('00', '00', '00', '00');
    MORSE_TABLE_BC[keyArrayMTB.slice(-5).join('')] = MORSE_TABLE[key];
  }
  MORSE_TABLE_BC['**********'] = ' ';


  for (let j = 0; j < spellExpr.length; j++) {
    answer += MORSE_TABLE_BC[spellExpr[j]];
  }

  return answer;
}

module.exports = {
  decode
}
