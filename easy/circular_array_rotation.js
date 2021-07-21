// https://www.hackerrank.com/challenges/circular-array-rotation/problem

const insert = (arr, index, value) => arr.splice(index, 0, value);

function circularArrayRotation(a, k, queries) {
    let rotatedArr = a, res = [];

    for (let i = 0; i < k; i++) insert(rotatedArr, 0, rotatedArr.pop());
    for (let val of queries) res.push(rotatedArr[val])

    return res;
}


const a = [3, 4, 5]
const k = 2
const queries = [1, 2]

const result = circularArrayRotation(a, k, queries);
console.log(result);