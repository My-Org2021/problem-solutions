// https://www.hackerrank.com/challenges/anagram/problem

function anagram(s: string): number {
    let res = 0;

    if (s.length % 2 != 0) return -1;

    let firstPart = s.slice(0, s.length / 2), secondPart = s.slice((s.length / 2));
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (firstPart.includes(secondPart[i])) firstPart = firstPart.replace(secondPart[i], "")
        else res++
    }

    return res;
}

const s = "aaabbb";
console.log(anagram(s));
