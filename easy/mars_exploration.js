// https://www.hackerrank.com/challenges/mars-exploration/problem

const marsExploration = (s) => {
    let result = 0;

    const totalSOSMessages = s.length / 3;
    const rightTotalSOSMessages = validSOSMessageType(totalSOSMessages);

    for (let i = 0; i < s.length; i++) {
        if (rightTotalSOSMessages[i] !== s[i]) result++
    }

    return result;
};

const validSOSMessageType = (n) => {
    let res = '';

    for (let i = 0; i < n; i++) res += 'SOS';
    return res;
}

/* First solution I wrote (which didn't worked)

const marsExploration = (s) => {
    const totalSosMessage = s.length / 3;
    let result = 0, index = 0;

    for (let i = 0; i < totalSosMessage; i++) {
        if (s.substring(index, index + 3) !== 'SOS') result++
        index += 3;
    }

    return result;
};
*/

const s = 'SOSSPSSQSSOR';
const result = marsExploration(s);
console.log(result);

