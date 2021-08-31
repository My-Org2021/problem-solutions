// https://www.hackerrank.com/challenges/mini-max-sum/

function miniMaxSum(arr) {
    const min = Math.min(...arr), max = Math.max(...arr);
    const allValuesAreSame = (min === max);

    console.log(`${count(arr, max, allValuesAreSame)} ${count(arr, min, allValuesAreSame)}`);
}

const count = (arr, type, allTheSame) => {
    let res = 0;
    let list = arr.filter(el => allTheSame ? (el === type) : (el !== type));
    if(allTheSame) list.pop();

    list.forEach(el => res += el);
    return res;
}

const arr = [5, 5, 5, 5, 5];
miniMaxSum(arr);
