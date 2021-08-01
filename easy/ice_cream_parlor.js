// https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
    const store = {};

    for (let i = 0; i < arr.length; i++) {
        const flavor = arr[i];

        if (store[flavor] !== undefined) return [store[flavor] + 1, i + 1];

        store[m - flavor] = i;
    }

    return -1
}

const m = 4;
const arr = [1, 4, 5, 3, 2];
const result = icecreamParlor(m, arr);
console.log(result);