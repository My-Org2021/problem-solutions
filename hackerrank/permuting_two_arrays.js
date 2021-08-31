// https://www.hackerrank.com/challenges/two-arrays/problem

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) return "NO";
    }

    return "YES";
}

const k = 5;
const A = [1, 2, 2, 1], B = [3, 3, 3, 4];

const result = twoArrays(k, A, B);
console.log(result);