// https://www.hackerrank.com/challenges/restaurant/problem

const gcd = (a, b) => (!b) ? a : gcd(b, a % b);
const restaurant = (l, b) => (l == b) ? 1 : (l * b) / (gcd(l, b) ** 2)

console.log(restaurant(6, 9))
