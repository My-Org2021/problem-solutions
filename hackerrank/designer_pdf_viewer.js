// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

const valOfLetter = (letter, arr) => {
    const val = {
        "a": arr[0],
        "b": arr[1],
        "c": arr[2],
        "d": arr[3],
        "e": arr[4],
        "f": arr[5],
        "g": arr[6],
        "h": arr[7],
        "i": arr[8],
        "j": arr[9],
        "k": arr[10],
        "l": arr[11],
        "m": arr[12],
        "n": arr[13],
        "o": arr[14],
        "p": arr[15],
        "q": arr[16],
        "r": arr[17],
        "s": arr[18],
        "t": arr[19],
        "u": arr[20],
        "v": arr[21],
        "w": arr[22],
        "x": arr[23],
        "y": arr[24],
        "z": arr[25]
    }

    return val[letter];
}


function designerPdfViewer(h, word) {
    let history = [];
    for (let i = 0; i < word.length; i++) history.push(valOfLetter(word[i], h));

    return word.length * Math.max(...history);
}


const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
const word = 'abc'
console.log(designerPdfViewer(h, word))