// https://www.hackerrank.com/challenges/countingsort2/problem

function countingSort(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

const arr = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90];
const res = countingSort(arr);
console.log(res);