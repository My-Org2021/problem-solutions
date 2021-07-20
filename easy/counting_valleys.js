// https://www.hackerrank.com/challenges/counting-valleys 

function countingValleys(steps, path) {
    let breaking = 0;
    let currentPosition = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') currentPosition++
        if (path[i] === 'D') currentPosition--

        if (currentPosition === 0 && path[i] === 'U') breaking++
    }

    return breaking;
}

// 1, 0, -1, -2, -1, -2, -1 0
const path = 'UDDDUDUU'; // DDUUDDUDUUUD - 12
const result = countingValleys(path.length, path);
console.log(result);