// https://www.hackerrank.com/challenges/lisa-workbook/problem

function workbook(n, k, arr) {
    let result = 0, pagesCount = 0

    for (let i = 0; i < n; i++) {

        for (let j = 1; j < arr[i] + 1; j++) {
            if (k == 1 || j % k == 1) pagesCount++;
            if (j == pagesCount) result++;
        }

    }

    return result;
}


const k = 3, arr = [4, 2, 6, 1, 10];
const result = workbook(arr.length, k, arr);
console.log(result);
