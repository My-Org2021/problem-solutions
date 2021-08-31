// https://www.hackerrank.com/challenges/closest-numbers/problem

function closestNumbers(arr: number[]): number[] {
    arr.sort((a, b) => a - b);
    let result = [];

    let minimum = arr[arr.length - 1], index = 0;

    while (index !== arr.length - 1) {
        const values = [arr[index], arr[index + 1]];
        let res = Math.abs(values.reduce((p, c) => p - c));

        if (res == minimum) result.push(...values);
        if (res < minimum) {
            result.splice(0, result.length)
            result.push(...values);
            minimum = res;
        }

        index++
    }

    return result;
}

const a = [-5, 15, 25, 71, 63];
console.log(closestNumbers(a));