// https://www.hackerrank.com/challenges/organizing-containers-of-balls

function organizingContainers(container: number[][]): string {
    const colours = container[0].length;
    let arr = Array(colours).fill(0);
    let capacity = [], count = 0

    for (var i = 0; i < container.length; i++) {
        for (var j = 0; j < colours; j++) arr[j] += container[i][j];
    }

    for (let i = 0; i < container.length; i++) capacity.push(container[i].reduce((a, b) => a + b));

    for (let i = 0; i < arr.length; i++) {
        if (capacity.includes(arr[i])) count++
    }

    return count < colours ? "Impossible" : "Possible"
}

const container = [[1, 4], [2, 3]]
const res = organizingContainers(container)
console.log(res)
