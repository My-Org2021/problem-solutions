// https://www.hackerrank.com/challenges/marcs-cakewalk/problem

function marcsCakewalk(calorie) {
    calorie.sort((a, b) => b - a);

    let result = 0;
    for (let i = 0; i < calorie.length; i++) result += (Math.pow(2, i) * calorie[i])

    return result;
}

const calorie = [5, 10, 7];
const result = marcsCakewalk(calorie);
console.log(result);