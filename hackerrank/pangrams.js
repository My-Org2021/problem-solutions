// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
    let res = 0;
    s = s.toLowerCase()

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

    for (let i = 0; i < letters.length; i++) {
        if (s.includes(letters[i])) res++
    }

    return (res === letters.length) ? "pangram" : "not pangram";
}


const s = 'We promptly judged antique ivory buckles for the prize' // 'We promptly judged antique ivory buckles for the next prize';
const result = pangrams(s);
console.log(result)