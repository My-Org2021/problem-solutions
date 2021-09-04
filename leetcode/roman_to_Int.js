var romanToInt = function (s) {
    const conversion = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

    let res = 0;
    const arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        let isBadI = (arr[i] == "I" && (arr[i + 1] == "V" || arr[i + 1] == "X"))
        let isBadX = (arr[i] == "X" && (arr[i + 1] == "L" || arr[i + 1] == "C"))
        let isBadC = (arr[i] == "C" && (arr[i + 1] == "D" || arr[i + 1] == "M"))

        if (isBadI || isBadX || isBadC) { res -= conversion[arr[i]] } else { res += conversion[arr[i]] }
    }

    return res;
};


const s = 'MCMXCIV';
const res = romanToInt(s);
console.log(res);