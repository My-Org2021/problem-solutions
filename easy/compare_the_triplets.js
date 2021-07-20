// https://www.hackerrank.com/challenges/compare-the-triplets

function pushAndCalculate(array) {
    let val = 0;
    for (let i = 0; i < array.length; i++) {
        val += array[i]
    }
    return val;
}

function compareTriplets(a, b) {
    let alicesScore = [];
    let bobsScore = [];
    let resultArray = [];

    for (let i = 0; i < 3; i++) {
        if (a[i] !== b[i]) {
            if (a[i] > b[i]) alicesScore.push(1);
            if (b[i] > a[i]) bobsScore.push(1);
        }
    }

    resultArray.push(pushAndCalculate(alicesScore));
    resultArray.push(pushAndCalculate(bobsScore));

    return resultArray;
}


const a = [17, 28, 30];
const b = [99, 16, 8];


const res = compareTriplets(a,b);
console.log(res);