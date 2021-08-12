// https://www.hackerrank.com/challenges/happy-ladybugs/problem

function happyLadybugs(b: string): string {
    let happy = false

    for (let i = 0; i < b.length; i++) {
        if (b[i] !== "_" && b.indexOf(b[i]) === b.lastIndexOf(b[i])) return "NO"
        if (b.indexOf("_") === -1 && !(b[i] === b[i - 1] || b[i] === b[i + 1])) return "NO"
    }

    return "YES"
}

const b = "X_Y__X"
const res = happyLadybugs(b);
console.log(res);
