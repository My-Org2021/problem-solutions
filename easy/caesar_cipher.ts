// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

const isCharUpperCase = (s: string) => s === s.toUpperCase();

function caesarCipher(s: string, k: number): string {
    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const ciphedAlphabet = ciph('abcdefghijklmnopqrstuvwxyz', k);

    let result = [];

    for (let i = 0; i < s.length; i++) {
        const index = originalAlphabet.indexOf(s[i].toLowerCase());

        if (!originalAlphabet.includes(s[i]) && !originalAlphabet.includes(s[i].toLowerCase())) {
            result.push(s[i]);
        } else {
            isCharUpperCase(s[i]) ? result.push(ciphedAlphabet[index].toUpperCase()) : result.push(ciphedAlphabet[index]);
        }
    }

    return result.join("");
}

const ciph = (s: any, k: any) => String.fromCharCode(
    ...s.split('').map((char: { charCodeAt: () => number; }) => ((char.charCodeAt() - 97 + k) % 26) + 97),
);

const s = 'Always-Look-on-the-Bright-Side-of-Life';
const k = 5;

const result = caesarCipher(s, k);
console.log(result);

