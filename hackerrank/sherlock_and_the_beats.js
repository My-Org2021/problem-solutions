// https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem

const isO = n => n % 3 === 0;

const repeat = (v, t) => {
    let res = '';

    for (let i = 0; i < t; i++) res += v
    return res;
}

function decentNumber(n) {
    let index = n
    let result = ''

    while (index >= 0) {
        if (isO(index)) {
            result = repeat('5', index) + repeat('3', n - index);
            break;
        }

        index -= 5
    }

    console.log(result)
}

const n = 11;
const res = decentNumber(n);
