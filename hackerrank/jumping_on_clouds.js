// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let result = -1;

    for (let i = 0; i < c.length; i++) {
        result++
        if (c.length - 2 > 1 && c[i + 2] === 0) i++;
    }

    return result;
}

const clouds = [0, 1, 0, 0, 0, 1, 0];
const result = jumpingOnClouds(clouds);
console.log(result);
