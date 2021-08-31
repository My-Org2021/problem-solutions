// https://www.hackerrank.com/challenges/manasa-and-stones/problem

/*
n --> the number of non-zero stones
a --> one possible integer difference
b --> another possible integer difference
*/

function stones(n, a, b) {
    const result = new Set();

    for (let i = 0; i < n; i++) result.add(i * a + (n - (i + 1)) * b);

    return Array.from(result).sort((a, b) => a - b);
}


const n = 2, a = 2, b = 3
const result = stones(n, a, b);
console.log(result);