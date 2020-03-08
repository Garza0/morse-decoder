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

let bynObj = {}
const morseArr = Object.keys(MORSE_TABLE).map(key => [key, MORSE_TABLE[key]]).map(i => i[0] = [i[0].replace(/\-/g, '11').replace(/\./g, '10'), i[1]]).map(i => bynObj[i[0]] = i[1])


function decode(expr) {
    return expr.match(/.{10}/g).map(i => i.replace(/00{1,10}/, '')).map(i => bynObj[i] ? bynObj[i] : ' ').join('')

}

module.exports = {
    decode
}