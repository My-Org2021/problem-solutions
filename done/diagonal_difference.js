// https://www.hackerrank.com/challenges/diagonal-difference/


const diagonalDifference2 = (arr) => {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
        secondDiagonal += arr[i][(arr.length - 1) - i];
    }

    return Math.abs(firstDiagonal - secondDiagonal);
}


let arr = [
    [11, 2, 4], // 0 - 0 && 2-2 --> 11, 5, -12
    [4, 5, 6], // 1 - 1 && 1-1  <-- 4, 5, 10
    [10, 8, -12] // 2 - 2 && 0 - 0
];

var res = diagonalDifference(arr);
var res2 = diagonalDifference2(arr);

console.log(res);
console.log(res2);