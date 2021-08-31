// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    const event = s.split("a").length - 1;
    let repeats = (event * Math.floor(n / s.length)) - 1;
    repeats += (s.slice(0, n % s.length).split('a').length);

    return repeats;
}


const s = 'aba';
const n = 10;
const result = repeatedString(s, n);
console.log(result);