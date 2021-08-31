// https://www.hackerrank.com/challenges/mark-and-toys/problem

function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    let purchased = 0, result = 0;

    for (let i = 0; i < prices.length; i++) {
        if (purchased + prices[i] <= k) {
            purchased += prices[i]
            result++;
        }
    }

    return result;
}

const k = 50;
const prices = [1, 12, 5, 111, 200, 1000, 10]

const result = maximumToys(prices, k);
console.log(result);
