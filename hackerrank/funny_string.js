// https://www.hackerrank.com/challenges/funny-string/problem

const funnyString = (s) => {
    const reversed = reverse(s);

    for (let i = 0; i < s.length - 1; i++) {

        const value = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
        const reversedValue = Math.abs(reversed.charCodeAt(i) - reversed.charCodeAt(i + 1))

        if (value !== reversedValue) return "Not Funny";
    }

    return "Funny";
}


const reverse = (s) => {
    let reversed = '';

    for (let i = s.length - 1; i > -1; i--) reversed += s[i];
    return reversed
}

const s = 'bcxz'
const result = funnyString(s);
console.log(result);