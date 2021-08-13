// https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s: string) {
    let result = "NO"

    for (let l = 1; l <= s.length / 2; l++) {
        const currentNum = s.substr(0, l)
        let res = currentNum, bigNum = BigInt(currentNum)

        while (res.length <= s.length) {
            res += `${++bigNum}`

            if (res !== s.substr(0, res.length)) break
            if (res === s) {
                result = `YES ${currentNum}`;
                break
            }
        }
    }

    console.log(result);
}

const s = "99100";
const res = separateNumbers(s);

