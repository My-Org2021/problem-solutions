// https://www.hackerrank.com/challenges/time-conversion/problem


/// The first solution I wrote.
function timeConversion(s) {
    const hours = s.slice(0, 2);
    const minutes = s.slice(3, 5);
    const seconds = s.slice(6, 8);
    const type = s.slice(8, 11);

    if (type === "AM") return `${hours}:${minutes}:${seconds}`;
    let result = `${pmToAM(hours)}:${minutes}:${seconds}`;
    return result;
}


const pmToAM = (pm) => {
    const values = {
        '00': '00',
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23',
        '12': '00',
    };

    return values[pm];
}



// Better solution I found on internet
function timeConversion(s) {
    let type = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");

    if (type === "AM" && timeArr[0] === "12") timeArr[0] = "00";
    else if (type === "PM") timeArr[0] = (timeArr[0] % 12) + 12

    return timeArr.join(":");
}

var pmTime = '12:45:54PM';
var amTime = timeConversion(pmTime);
console.log(amTime);