// https://www.hackerrank.com/challenges/magic-square-forming/problem

const possibleMagicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],

    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
]

function formingMagicSquare(s) {
    let minimumPossibleCost = Number.MAX_SAFE_INTEGER;
    let currentCost = 0;

    for (let p = 0; p < possibleMagicSquares.length; p++) {
        const currentPossibleSquare = possibleMagicSquares[p];
        currentCost = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < s[i].length; j++) {
                currentCost += Math.abs(s[i][j] - currentPossibleSquare[i][j]);
            }
        }
        if (currentCost < minimumPossibleCost) minimumPossibleCost = currentCost;
    }

    return minimumPossibleCost;
}

const s = [[4, 9, 2], [3, 5, 7], [8, 1, 5]] // Should return 1
const s2 = [[4, 8, 2], [4, 5, 7], [6, 1, 6]] // Should return 4

const result = formingMagicSquare(s);
console.log(result);