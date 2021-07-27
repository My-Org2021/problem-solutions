// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
    let result = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) result++;
    }

    return result
}


const s = 'saveChangesInTheEditor';
const result = camelcase(s);
console.log(result);