// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = k % c.length;

    energy -= c[i] * 2 + 1

    while (i != 0) {
        i = (i + k) % c.length
        energy -= c[i] * 2 + 1
    }
    return energy
}


const c = [0, 0, 1, 0, 0, 1, 1, 0];
const k = 2;

const result = jumpingOnClouds(c, k);
console.log(result);