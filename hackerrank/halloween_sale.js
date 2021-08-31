// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    let boughtGameCount = 0;

    while (s >= p) {
        boughtGameCount++;
        s -= p;
        (m > p - d) ? p = m : p -= d;
    }

    return boughtGameCount;
}


const p = 1, d = 100, m = 1, s = 9777;
const result = howManyGames(p, d, m, s);
console.log(result);