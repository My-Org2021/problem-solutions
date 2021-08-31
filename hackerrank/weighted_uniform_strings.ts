// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

// Couldn't pass some tests

function weightedUniformStrings(s: string, queries: number[]): string[] {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const clearedS = Array.from(new Set(s.split('')))
    let res = [], ourQueries = [];

    for (let i = 0; i < clearedS.length; i++) {
        let li = alphabet.indexOf(clearedS[i]) + 1;
        const la = s.split('').filter(e => e === clearedS[i]);

        for (let j = 1; j < la.length + 1; j++) ourQueries.push(li * j);
    }

    for (let i = 0; i < queries.length; i++) {
        const val = (ourQueries.indexOf(queries[i]) != -1) ? "Yes" : "No";
        res.push(val);
    }

    return res;
}


const s = 'abccddde';
const queries = [1, 3, 12, 5, 9, 10]

const res = weightedUniformStrings(s, queries);
console.log(res);
