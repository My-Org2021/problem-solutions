// https://www.hackerrank.com/challenges/breaking-best-and-worst-records

function breakingRecords(scores) {
    let breakingUp = 0,breakingDown = 0;
    let highNum = 0, lowNum = scores[0];
    let highNumList = [], lowNumList = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highNum) highNum = scores[i];
        if (scores[i] < lowNum) lowNum = scores[i];

        highNumList.push(highNum);
        lowNumList.push(lowNum);
    }

    for (let i = 0; i < highNumList.length; i++) {
        if (highNumList[i] < (highNumList[i + 1])) breakingUp++;
        if (lowNumList[i] > (lowNumList[i + 1])) breakingDown++;
    }

    return [breakingUp, breakingDown];
}


const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
const scores1 = [3, 4, 21, 36, 10, 28, 35, 2, 24, 42];
const result = breakingRecords(scores1);