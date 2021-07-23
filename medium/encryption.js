// https://www.hackerrank.com/challenges/encryption/problem

const findBetweenNums = (num) => [Math.floor(num), (Math.floor(num) + 1)]

function encryption(s) {
    // Remove the spaces
    const cleared = s.replace(/\s/g, '')

    // Calculate betweenes
    const betweenes = findBetweenNums(Math.sqrt(cleared.length))

    let result = ""

    // Loop (cleared.length ~ root) + 1 time.
    for (let i = 0; i < betweenes[1]; i++) {
        /*  E.g: s = 'haveaniceday';
            When i === 0 then j gonna be 0 first time
            So that means we'd add 0 index item of string to result. In our case it's "h"
            Then it would add betweenes[1] to j, so in our case it's 4. And then it would
            select string's 4th item. So in our case "a"...
        */
        for (let j = i; j < cleared.length; j += betweenes[1]) result += s[j];
        result += ' ';
    }

    return result
}


const s = 'haveaniceday'
const result = encryption(s);
console.log(result); // Output should be - "hae and via ecy"