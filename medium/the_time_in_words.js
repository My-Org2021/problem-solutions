// https://www.hackerrank.com/challenges/the-time-in-words/problem

const convertToWord = (n) => {
    const words = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'quarter',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
        21: "twenty one", 22: "twenty two", 23: "twenty three", 24: "twenty four", 25: "twenty five",
        26: "twenty six", 27: "twenty seven", 28: "twenty eight", 29: "twenty nine", 30: 'half'
    }

    return words[n].toString();
}

const minute = m => m == 15 ? '' : m > 1 ? ' minutes' : ' minute';

function timeInWords(h, m) {
    if (m == 0) return `${convertToWord(h)} o' clock`;
    if (m == 15 || m == 30) return `${convertToWord(m)} past ${convertToWord(h)}`;

    if (m > 0 && m < 30) return `${convertToWord(m)}${minute(m)} past ${convertToWord(h)}`;

    return `${convertToWord(60 - m)}${minute(60 - m)} to ${convertToWord(h + 1)}`
}


const h = 7, m = 29;
const res = timeInWords(h, m);
console.log(res);

