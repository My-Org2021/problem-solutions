// https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
    const sortedContests = contests.sort((a, b) => b[0] - a[0])

    let result = 0, indx = k
    for (let item of sortedContests) {
        if (item[1] === 0) {
            result += item[0]
        } else if (indx > 0) {
            result += item[0]
            indx--
        } else {
            result -= item[0]
        }
    }

    return result
}

const k = 3, contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];
const result = luckBalance(k, contests);
console.log(result);