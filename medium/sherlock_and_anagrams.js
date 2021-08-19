// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
    let anagram = []
    let res = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) anagram.push(s.slice(i, j).split("").sort().join(""));
    }

    for (let i = 0; i < anagram.length - 1; i++) {
        for (let j = i + 1; j < anagram.length; j++) {
            if (anagram[i] == anagram[j]) res++
        }
    }

    return res
}

const s = 'abba'
const res = sherlockAndAnagrams(s)
console.log(res);