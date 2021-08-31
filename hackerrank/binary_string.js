// https://www.hackerrank.com/challenges/beautiful-binary-string/problem

// I wrote same algorithm which was wroten many years ago :D.
const beautifulBinaryString = b => b.split('010').length - 1;

const s = '0100101010';
const result = beautifulBinaryString(s);
console.log(result);