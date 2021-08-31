// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
    if (!s.includes('B') || !s.includes('A')) return (s.length - 1);


    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) result++;
    }

    return result;
}


// const s = 'AAAA';
// const s = 'BBBBB';
// const s = 'ABABABAB';
// const s = 'BABABA';
const s = 'AAABBB';

const result = alternatingCharacters(s);
console.log(result);