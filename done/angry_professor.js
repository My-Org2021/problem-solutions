// https://www.hackerrank.com/challenges/angry-professor

const angryProfessor = (k, a) => (a.filter(el => el <= 0).length >= k) ? "NO" : "YES";

const a = [-1, -3, 4, 2];
const result = angryProfessor(3, a);
console.log(result);