// https://www.hackerrank.com/challenges/a-very-big-sum

function aVeryBigSum(ar) {
    let result = 0;
    for(let i = 0; i < ar.length; i++){
        result += ar[i];
    }
    return result;
}


const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const res = aVeryBigSum(arr);
console.log(res);
