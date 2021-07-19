// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    let res = 0;
    let stock = []

    for (let i = 0; i < n; i++) {
        if (has(stock, ar[i])) {
            res++;
            stock = remove(stock, ar[i]);
        }
        else stock.push(ar[i])

    }

    return res;
}


const has = (arr, val) => arr.filter(el => el === val).length;
const remove = (arr, val) => arr.filter(el => el !== val);

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const res = sockMerchant(ar.length, ar);
console.log(res);