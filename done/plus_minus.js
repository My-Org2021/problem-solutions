// https://www.hackerrank.com/challenges/plus-minus/

function plusMinus(arr) {
    let negatives = 0;
    let positives = 0;
    let zeroes = 0;

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        if (el === 0) zeroes++;
        else if (el > 0) positives++
        else negatives++
    };

    const res = [positives, negatives, zeroes];
    for (let i = 0; i < res.length; i++) {
        var val = res[i] / arr.length;
        console.log(val);
    }
}


const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);