// https://www.hackerrank.com/challenges/find-digits/problem

const isInt = (n) => n % 1 === 0;

function findDigits(n) {
    let result = 0;

    for (let i = 0; i < `${n}`.length; i++) {
        if (isInt(n / parseInt(`${n}`[i]))) result++;
    }

    return result;
}

const n = 12;
const result = findDigits(n);
console.log(result);