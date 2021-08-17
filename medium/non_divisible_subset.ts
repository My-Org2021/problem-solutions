// https://www.hackerrank.com/challenges/non-divisible-subset/problem 

function nonDivisibleSubset(k: number, s: number[]) {
    let values = s.map(n => n % k), res = Array(k).fill(0);

    values.forEach((n) => res[n]++);
    
    if (res[0] > 1) res[0] = 1;
    if (k % 2 == 0 && res[k / 2] > 1)  res[k / 2] = 1;

    let time = res.length - 1;
    for (let i = 1; i < time; i++) {
        (res[i] <= res[time]) ? res[i] = 0 : res[time] = 0;
        time--;
    }

    return res.reduce((a, b) => a + b);;
}

const s = [1, 7, 2, 4];
const k = 3

const res = nonDivisibleSubset(k, s);
console.log(res);