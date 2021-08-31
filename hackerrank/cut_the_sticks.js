// https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
    let results = [arr.length];

    while (arr.length !== 0) {
        let shortestStick = Math.min(...arr);

        for (let i = 0; i < arr.length; i++) {
            let val = arr[i] - shortestStick;
            arr.splice(arr.indexOf(arr[i]), 1, val);
        }

        arr = arr.filter(el => el !== 0);

        if (arr.length !== 0) results.push(arr.length);
    }

    return results;
}



const arr = [1, 2, 3, 4, 3, 3, 2, 1];
const result = cutTheSticks(arr);
console.log(result);