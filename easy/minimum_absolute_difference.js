// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);

    let result = arr[arr.length - 1];
    for (let i = 1; i < arr.length; i++) {
        const res = Math.abs(arr[i] - arr[i + 1])
        if (res < result) result = res;
    }

    return result
}

const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
const result = minimumAbsoluteDifference(arr);
console.log(result);
