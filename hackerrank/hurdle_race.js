// https://www.hackerrank.com/challenges/the-hurdle-race

function hurdleRace(k, height) {
    for (let i = 0; i < height.length; i++) {
        if (k < height[i]) return findTallestHurdle(height) - k;
    }

    return 0;
}

const findTallestHurdle = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > res) res = arr[i];
    }
    return res
}


const height = [1, 6, 3, 5, 2];
const result = hurdleRace(4, height);
console.log(result);