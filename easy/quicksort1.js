// https://www.hackerrank.com/challenges/quicksort1/problem

function quickSort(arr) {
    let left = [], right = [];
    const piviot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > piviot) right.push(arr[i]);
        if (arr[i] < piviot) left.push(arr[i]);
    }

    return [...left, piviot, ...right]
}


const arr = [4, 5, 3, 7, 2]
const result = quickSort(arr);
console.log(result);