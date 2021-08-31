// https://www.hackerrank.com/challenges/day-of-the-programmer


function dayOfProgrammer(year) {
    if (year === 1918) return `26.09.1918`;

    const isALeafYear = (year % 4 === 0) && (year < 1918 || year % 400 == 0 || year % 100 != 0);
    let daysOfNineMonth = daysOfFirstNineMonth(isALeafYear);
    let val = 0;

    for (let i = 0; i < daysOfNineMonth.length; i++) val += daysOfNineMonth[i];

    return `${256 - val}.09.${year}`;
}

const daysOfFirstNineMonth = (isALeafYear) => {
    let days = [31, 28, 31, 30, 31, 30, 31, 31];
    if (isALeafYear) days[1] = 29;
    return days;
}

const res = dayOfProgrammer(2016);
console.log(res);