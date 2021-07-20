// https://www.hackerrank.com/challenges/picking-numbers

function pickingNumbers(a) {
    let res = 0

    for (let i = 0; i < a.length; i++) {
        let val = a.filter(el => a[i]-el <=1 && a[i]-el >= 0).length
        if(val > res) res = val;
    }
 
    return res;
}


const arr = [4, 6, 5, 3, 3, 1]; // [1, 2, 2, 3, 1, 2];
const res = pickingNumbers(arr)
console.log(res);
