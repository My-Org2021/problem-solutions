// https://www.hackerrank.com/challenges/maximizing-xor/problem

const calculateXOR = (a, b) => a ^ b;

function maximizingXor(l, r) {
    let res = 0;

    for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) (calculateXOR(i, j) > res) ? res = calculateXOR(i, j) : null
    }

    return res;
}


const l = 10, r = 15;
const result = maximizingXor(l, r);
console.log(result);