// https://www.hackerrank.com/challenges/cavity-map/problem

// Not solves problem properly :(

function cavityMap(grid) {
    let result = [];

    const max = findMax(grid)

    for (let i = 0; i < grid.length; i++) {
        let splitted = grid[i].split('');
        if (splitted.includes(max) && isInCenter(max, splitted) && isInCenter(grid[i], grid)) splitted.splice(splitted.indexOf(max), 1, 'X');

        result.push(splitted.join(''));
    }

    return result
}

const isInCenter = (val, arr) => arr.indexOf(val) !== 0 && arr.indexOf(val) !== arr.length - 1;

const findMax = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        let cleared = arr[i].split('');

        let maxFromCurrent = Math.max(...cleared);
        if (maxFromCurrent > max) max = maxFromCurrent;
    }

    return max.toString();
}


const grid = [
    '2587673293641591333444922684212827282684185934985966568161623775844765869818231839655315139935283917',
    '8316367721984838592282693133446625341275338241466354524729424384615647514615523763198353549484986131',
    '7252931762992564114799667333186696451635689741575495455771175463552324516966676389939676451657782958',
    '3423178757955912336293888671466458213667535126241333862655795639293176796723725984641411384575336234',
    '8471141536798482891939235732467696891177427596478685537247657345842651259248761591996279381356995662',
    '6316715265419394352411232298736351819377959616889178373857647275264889417525189329936856737242971553',
];
const result = cavityMap(grid);
console.log(result);