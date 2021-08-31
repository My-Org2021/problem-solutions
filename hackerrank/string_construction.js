// https://www.hackerrank.com/challenges/string-construction/problem

function stringConstruction(s) {
    let p = new Set();

    for (let i = 0; i < s.length; i++) p.add(s[i]);
    
    return Array.from(p).length;
}


const s = 'abab';
console.log(stringConstruction(s));