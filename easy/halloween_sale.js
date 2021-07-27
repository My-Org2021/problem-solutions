// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    let start = s, priceOfFirstGame = p, discFromThePrevious = d, minCost = m;

    let result = 0;

    while (start >= priceOfFirstGame) {
        start -= priceOfFirstGame;
        if (priceOfFirstGame - discFromThePrevious > minCost) {
            (priceOfFirstGame -= discFromThePrevious)
        } else {
            (priceOfFirstGame = minCost)
        };
        result++;
    }

    return result;
}

const p = 20, d = 3, m = 6, s = 85;
const result = howManyGames(p, d, m, s);
console.log(result);