// https://www.hackerrank.com/challenges/missing-numbers/problem

// I found same solution what he/she had found 2 years ago :D
// https://www.hackerrank.com/challenges/missing-numbers/forum/comments/627847

function missingNumbers(arr, brr) {
    for (let i = 0; i < arr.length; i++) brr.splice(brr.indexOf(arr[i]), 1)

    const result = Array.from(new Set(brr));
    return result.sort((a, b) => a - b);
}

const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
// const arr = [7, 2, 5, 3, 5, 3];
// const brr = [7, 2, 5, 4, 6, 3, 5, 3];

const result = missingNumbers(arr, brr);
console.log(result); // Should log: 204 205 206