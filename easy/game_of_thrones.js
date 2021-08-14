// https://www.hackerrank.com/challenges/game-of-thrones/problem

const isOdd = n => n % 2 !== 0

function gameOfThrones(s) {
    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) == undefined) map.set(s[i], 0);
        map.set(s[i], map.get(s[i]) + 1);
    }

    let count = 0;
    for (const [key, val] of map.entries()) {
        if (!isOdd(val)) continue
        if (count > 0) return "NO"
        count++
    }

    return "YES"
}

const s = 'cdcdcdcdeeeef';
const res = gameOfThrones(s);
console.log(res);
