// https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
    let result = 0;
    const letters = new Set(arr.join(''))

    for (let letter of letters) {
        if (arr.every(item => item.includes(letter))) result++
    }

    return result;
}

const arr = ['abcdde', 'baccd', 'eeabg'];
const result = gemstones(arr);
console.log(result);