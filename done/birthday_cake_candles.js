// https://www.hackerrank.com/challenges/birthday-cake-candles


const findLargestNum = (arr) => {
    let largest = 0;

    for (let i = 0; i <= largest; i++) {
        if (arr[i] > largest) largest = arr[i];
    }

    return largest
}

function birthdayCakeCandles(candles) {
    const largestNumInCandles = findLargestNum(candles);
    let lengthOfLargestNums = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === largestNumInCandles) lengthOfLargestNums++;
    }

    return lengthOfLargestNums;
}

const candles = [3, 2, 1, 3];
const res = birthdayCakeCandles(candles);
console.log(res);