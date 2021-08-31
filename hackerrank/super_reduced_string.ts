// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s: string): string {
    let sArr = s.split('');

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === sArr[i + 1]) {
            sArr.splice(i, 2);
            i = -1;
        }
    }
    
    if (sArr.length === 0) return "Empty String";

    return sArr.reduce((p, c) => p + c);
}

const s = 'baab';
const result = superReducedString(s);

console.log(result);