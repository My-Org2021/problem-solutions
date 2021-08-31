// https://www.hackerrank.com/challenges/minimum-distances/problem

const findDuplicates = (arr) => arr.filter((item, i) => arr.includes(item, i + 1));

function minimumDistances(a) {
    const dublicates = findDuplicates(a);

    let indexes = [];
    let result = -1;


    for (let di = 0; di < dublicates.length; di++) {
        let values = []
        for (let i = 0; i < a.length; i++) {
            if (a[i] === dublicates[di]) values.push(i);
        }

        indexes.push(values);
    }


    for (let i = 0; i < indexes.length; i++) {
        let val = Math.abs(indexes[i][0] - indexes[i][1]);
        if(result > val || result === -1) result = val;
    };

    return result;
}


const array = [3, 2, 1, 2, 3]
const result = minimumDistances(array);
console.log(result);