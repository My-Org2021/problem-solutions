// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
    let count = Math.floor(n / c);
    let result = count;

    while ((count / m) >= 1) {
        let wrapp = Math.floor(count / m);
        count = wrapp + (count % m);
        result += wrapp;
    }

    return result;
}

// In one line - JavaScript way :D
// const chocolateFeast = (n, c, m) => (Math.floor(n / c) < m) ? Math.floor(n / c) : Math.ceil(Math.floor(n / c) / m) + Math.floor(n / c)

const n = 32547, c = 180, m = 30983
const result = chocolateFeast(n, c, m);
console.log(result);

