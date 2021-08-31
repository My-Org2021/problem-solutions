// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

const fibonacci = (n) => {
    let fiboo = [0, 1];
    for (let i = 2; i <= n; i++) fiboo[i % 2] = fiboo[0] + fiboo[1];
    return fiboo[n % 2];
}

const n = 5;
const res = fibonacci(n);
console.log(res);


