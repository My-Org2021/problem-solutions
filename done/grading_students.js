// https://www.hackerrank.com/challenges/grading

function gradingStudents(grades) {
    let finalGrades = [];

    for (let i = 0; i < grades.length; i++) {
        const el = grades[i];
        const roundedVal = Math.ceil(el / 5) * 5;
        const difference = roundedVal - el;
        
        if (el < 38) {
            finalGrades.push(el);
        } else {
            finalGrades.push((difference < 3) ? roundedVal : el);
        }
    }

    return finalGrades;
}


const grades = [73, 67, 38, 33];
var res = gradingStudents(grades);

console.log(res);