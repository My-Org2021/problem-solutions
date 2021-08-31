// https://www.hackerrank.com/challenges/minimum-swaps-2/problem


// Brokes 10, 11, 12 test cases, and the problem is time :D

Array.prototype.swap = function (i, j) {
    var b = this[i];
    this[i] = this[j];
    this[j] = b;
    return this;
}

const equals = (a, b) => a.every((v, i) => v === b[i]);

function minimumSwaps(arr) {
    let result = 0;

    const sorted = [...arr].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (equals(sorted, arr)) return result;
        if (arr[i] !== i + 1) {
            arr.swap(i, arr.indexOf(i + 1))
            result++
        }
    }

    return result;
}

const arr = [4, 3, 1, 2];
const result = minimumSwaps(arr);
console.log(result);
