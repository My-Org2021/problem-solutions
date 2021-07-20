// https://www.hackerrank.com/challenges/electronics-shop

function getMoneySpent(keyboards, drives, b) {
    let resArr = [];

    for (let i = 0; i < keyboards.length; i++) {
        const keyboard = keyboards[i];

        drives.forEach(usb => {
            let val = keyboard + usb;
            if (val <= b) resArr.push(val);
        })

    }

    if (resArr.length === 0) return -1;
    return findBiggestNum(resArr);
}

const findBiggestNum = (arr) => {
    let res = arr[0];
    arr.forEach(el => {
        if (res < el) res = el;
    });
    return res;
}



const keyboards = [10, 30, 80];
const drives = [2, 5, 30];
const budget = 100;

let res = getMoneySpent(keyboards, drives, budget);
console.log(res);