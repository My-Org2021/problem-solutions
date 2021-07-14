// https://www.hackerrank.com/challenges/breaking-best-and-worst-records


function breakingRecords(scores) {
    const smallerScore = findSmallerNum(scores);

    for (let i = 0; i < scores.length; i++) {
    }

    return smallerScore;
}

const findLargestNum = (arr) => {
    let largest = 0;
    for (let i = 0; i <= largest; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest
}

const arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
const res = breakingRecords(arr);
console.log(res);