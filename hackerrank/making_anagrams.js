// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

function makeAnagram(a, b) {
    a = a.split("")
    b = b.split("")

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                a.splice(i, 1);
                b.splice(j, 1);
                i--;
                break;
            }
        }
    }

    return a.length + b.length;
}

const a = "cde", b = "abc"
const res = makeAnagram(a, b);
console.log(res)
