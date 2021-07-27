// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
    for (let i = 0; i < (a.length - d); i++) {
        const val = a.splice(a.indexOf(a[a.length]), 1);
        a.unshift(...val);
    }

    return a;
}

const a = [1, 2, 3, 4, 5], d = 2;
const result = rotLeft(a, d);
console.log(result);
