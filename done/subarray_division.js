// https://www.hackerrank.com/challenges/the-birthday-bar/

const birthday = (s, d, m) => s.filter((_, i, arr) => (arr.slice(i, i + m).reduce((first, second) => first + second) == d)).length;

const d = 4
const m = 2;
const s = [2, 2, 1, 3, 2];

const result = birthday(s, d, m);
console.log(result);