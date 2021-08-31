// https://www.hackerrank.com/challenges/lonely-integer/problem

function lonelyinteger(a) {
    let unique = -1;

    for (let i = 0; i < a.length; i++) {
        const val = a.filter(e => e === a[i]).length;
        if (val === 1) unique = a[i];;
    }

    return unique
}

const a = [1, 1, 1, 4, 3, 2, 2, 3];
const result = lonelyinteger(a);
console.log(result);
