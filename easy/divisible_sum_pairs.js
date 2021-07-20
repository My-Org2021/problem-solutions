// https://www.hackerrank.com/challenges/divisible-sum-pairs/

const divisibleSumPairs = (n, k, arr) => {
    var val = []; // It could be just integer and just ++ value rather than pushing. 

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j) {
                const res = arr[i] + arr[j];
                if (res % k === 0) val.push(res);
            }
        }
    }

    return val.length;
}


const ar = [1, 3, 2, 6, 1, 2];
const res = divisibleSumPairs(6, 3, ar);
console.log(res);
