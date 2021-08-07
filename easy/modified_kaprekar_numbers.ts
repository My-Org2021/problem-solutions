// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

function kaprekarNumbers(p: number, q: number): void {
    let result = [];

    while (p <= q) {
        if (p === 1) result.push(1);
        const res = divideString(Math.pow(p, 2).toString());
        if (res.reduce((p, c) => p + c) == p) result.push(p);
        p++
    }

    if (result.length === 0) {
        console.log("INVALID RANGE");
        return;
    }

    console.log((result.slice(0, result.length)).join(' '));
}

const divideString = (s: string) => {
    const middle = Math.floor(s.length / 2);
    let first = '', second = '';

    for (let i = 0; i < s.length; i++) (i < middle) ? first += s[i] : second += s[i]

    return [parseInt(first), parseInt(second)];
}


const p = 1, q = 99999;
const result = kaprekarNumbers(p, q);