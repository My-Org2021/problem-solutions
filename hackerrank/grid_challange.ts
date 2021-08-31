// https://www.hackerrank.com/challenges/grid-challenge/problem

function gridChallenge(grid: string[]): string {

    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split("").sort((a: string, b: string) => a.localeCompare(b)).join('');
    }

    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > grid[i + 1][j]) return "NO"
        }
    }

    return "YES"
}



const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
const res = gridChallenge(grid);
console.log(`RESULT: --- ${res}`);