// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const reverseNum = (num) => {
    const sNum = `${num}`;
    let res = ''

    for (let i = sNum.length - 1; i > -1; i--) res += sNum[i];

    return parseInt(res);
}

const fillDays = (start, end) => {
    let result = [];
    for (let i = start; i <= end; i++)result.push(i);
    return result;
}

const determineWhooleNumbersLength = (arr) => arr.filter(el => el % 1 == 0).length;

function beautifulDays(i, j, k) {
    const fullDays = fillDays(i, j);
    let values = [];


    for (let index = 0; index < fullDays.length; index++) {
        const day = fullDays[index];

        let res = Math.abs((day - reverseNum(day)) / k);
        values.push(res);
    }

    return determineWhooleNumbersLength(values);
}



const result = beautifulDays(20, 23, 6);
console.log(result);
