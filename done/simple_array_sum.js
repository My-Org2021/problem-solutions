// https://www.hackerrank.com/challenges/simple-array-sum

function simpleArraySum(ar) {
    var val = 0
    for(let i = 0; i< ar.length; i++){
        val += ar[i];        
    }
    
    return val;
}


const arr = [1, 2, 3, 4, 10, 11];
const res = simpleArraySum(arr);
console.log(res);
