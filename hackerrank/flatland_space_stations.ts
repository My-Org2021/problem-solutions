// https://www.hackerrank.com/challenges/flatland-space-stations/problem

function flatlandSpaceStations(n: number, c: number[]): number {
    let res = [], sorted = [...c].sort((a, b) => a - b)

    for (let i = 0; i < sorted.length - 1; i++) {
        res.push(Math.floor(Math.abs(sorted[i + 1] - sorted[i]) / 2));
    }

    const p = Math.abs(sorted[0] - 0), p2 = Math.abs(n - sorted[sorted.length - 1]) - 1
    return Math.max(...[...res, p, p2])
}


const n = 5, c = [0, 4]
const res = flatlandSpaceStations(n, c);
console.log(res);