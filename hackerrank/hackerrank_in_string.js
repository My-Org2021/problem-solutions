// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s) {
    const hackerrank = 'hackerrank', splitted = s.split('');

    let index = 0;

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] === hackerrank[index]) index++
    }

    return (hackerrank.length === index) ? "YES" : "NO";
}


const s = 'hhaacckkekraraannk';
const result = hackerrankInString(s);
console.log(result);