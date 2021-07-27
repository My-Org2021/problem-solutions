// https://www.hackerrank.com/challenges/taum-and-bday/problem

function taumBday(b, w, bc, wc, z) {
    b = BigInt(b), w = BigInt(w), bc = BigInt(bc), wc = BigInt(wc), z = BigInt(z);

    let black = (bc > wc + z) ? wc + z : bc;
    let white = (wc > bc + z) ? bc + z : wc;

    return (b * black) + (w * white);
}

const b = 7, w = 7
const bc = 4, wc = 2, z = 1

const result = taumBday(b, w, bc, wc, z);
console.log(parseInt(`${result}`.slice(0, `${result}`.length)));