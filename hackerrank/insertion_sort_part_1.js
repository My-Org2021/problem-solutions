// https://www.hackerrank.com/challenges/insertionsort1/problem

function insertionSort1(n, arr) {
    let index = n - 1, last = arr[arr.length - 1];
    let isSorted = (arr === [...arr].sort((a, b) => a - b));

    if (isSorted) console.log(arr);

    while (index >= 0 && !isSorted) {
        if (arr[index - 1] > last) arr[index] = arr[index - 1];
        else {
            arr[index] = last;
            isSorted = true;
        }


        index--;
        console.log(arr.slice('').join(' '));
    }
}


const n = 5;
const arr = [1, 2, 4, 5, 3];
insertionSort1(n, arr);


