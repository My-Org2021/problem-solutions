// Amazon interview question

const firstNonRepeatingChar = (m) => {
    let res = '';
    let keys = [], values = [];

    Object.keys(m).forEach(key => keys.push(key));
    Object.values(m).forEach(val => values.push(val));

    for (let i = 0; i < keys.length; i++) {
        res += multiplyString(values[i], keys[i])
    }

    return res;
}

const firstNonRepeatingChar2 = (m) => {
    let res = '';
    Object.keys(m).forEach(key => res += multiplyString(m[key], key));

    return res;
}


const multiplyString = (t, s) => {
    let res = '';
    for (let i = 0; i < t; i++) res += s;
    return res
}


const m = { 'a': 3, 'b': 1, 'c': 3, 'd': 1, 'e': 2, 'f': 5 }; // Result should be --> aaabcccdeefffff
const result = firstNonRepeatingChar2(m);

console.log(result);
console.log(result === 'aaabcccdeefffff')

