// https://www.hackerrank.com/challenges/find-the-median/problem

function findMedian(arr: number[]): number {
    arr.sort((a, b) => a - b);

    let middle = Math.floor(arr.length / 2);
    return arr[middle];
}

const arr = [0, 1, 2, 4, 6, 5, 3];
const result = findMedian(arr);
console.log(result);
