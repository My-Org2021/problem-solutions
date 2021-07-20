// https://www.hackerrank.com/challenges/migratory-birds/

const findCountOfNum = (arr, val) => arr.filter(el => el === val).length;

function migratoryBirds(arr) {
    let largest = 0
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = findCountOfNum(arr, arr[i]);
        if (largest < count) {
            largest = count;
            value = arr[i];
        };
    }

    return value;
}

const arr = [1, 4, 4, 4, 5, 3]
const result = migratoryBirds(arr);
console.log(result);