// https://www.hackerrank.com/challenges/apple-and-orange

// Had problem about timeout, I don't know why :(

const fillList = (start, end) => {
    let list = [];
    for (let i = start; i < end + 1; i++) list.push(i);
    return list;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const home = fillList(s, t);

    let applesRes = [];
    let orangesRes = [];

    for (let i = 0; i < apples.length; i++) {
        applesRes.push(a + apples[i])
        orangesRes.push(b + oranges[i])
    };

    applesRes = home.filter(el => el === applesRes.find(fEl => fEl === el));
    orangesRes = home.filter(el => el === orangesRes.find(fEl => fEl === el));

    console.log(applesRes.length);
    console.log(orangesRes.length);
}

const s = 7;
const t = 10;
const a = 4;
const b = 12;
const apples = [2, 3, -4];
const oranges = [3, -2, -4];
countApplesAndOranges(s, t, a, b, apples, oranges);