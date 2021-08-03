// https://www.hackerrank.com/challenges/flipping-bits/problem

// 4294967295 is the same thing what is 11111111111111111111111111111111 sqrt 10
const flippingBits = (n) => (4294967295 - n);

const n = 2147483647;
const result = flippingBits(n);
console.log(result);