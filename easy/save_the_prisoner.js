// https://www.hackerrank.com/challenges/save-the-prisoner/problem

// What i wrote first
// Which actually can calculate correctly but it stucks in (Time limit)
function saveThePrisonerFirst(n, m, s) {
    let current = s;

    for (let i = 0; i < m; i++) {
        if (current === n + 1) current = 1
        current++;
    }

    return current - 1;
}

// Here is the better solution
const saveThePrisoner = (n, m, s) => (s + (m - 1)) % n || n;

// 7, 19, 2 --> 6
// 4, 6, 2 --> 3
const n = 7;
const m = 19;
const s = 2;

const result = saveThePrisoner(352926151, 380324688, 94730870);
console.log(result);