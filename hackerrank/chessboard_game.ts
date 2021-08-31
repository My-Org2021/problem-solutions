// https://www.hackerrank.com/challenges/a-chessboard-game-1/problem

// Solution: https://www.hackerrank.com/challenges/a-chessboard-game-1/forum/comments/140139
// Problem seems very complex. But actualy it isn't :D

function chessboardGame(x: number, y: number): string {
    const xval = x % 4, yval = y % 4;

    if((yval==0)||(yval==3)||(xval==0)||(xval==3)) return "First";
    return "Second";
}

const x = 5, y = 2;
const result = chessboardGame(x, y);
console.log(result);
