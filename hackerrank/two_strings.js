// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
    let res = 0;

    const checkBy = (s1.length < s2.length) ? s1 : s2;
    
    for (let i = 0; i < checkBy.length; i++) {
        if(checkBy === s1){
            if(s2.includes(s1[i])) res++
        }else {
            if(s1.includes(s2[i])) res++
        }

    }

    return (res == 0) ? "NO" : "YES";
}



const s1 = 'hi', s2 = 'world';
const result = twoStrings(s1, s2);
console.log(result);