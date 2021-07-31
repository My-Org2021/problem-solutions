// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
    const containsNums = contains(password, '0123456789');
    const containsSpecialChars = contains(password, '!@#$%^&*()-+');
    const containsLowerCase = contains(password, 'abcdefghijklmnopqrstuvwxyz');
    const containsUpperCase = contains(password, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    if (containsNums && containsSpecialChars && containsLowerCase && containsUpperCase && n >= 6) return 0;


    let result = 0;
    if (!containsNums) result++;
    if (!containsSpecialChars) result++;
    if (!containsLowerCase) result++;
    if (!containsUpperCase) result++;

    if (n + result >= 6) return result;

    result += (6 - (n + result))
    return result;
}

const contains = (p, val) => {
    for (let i = 0; i < val.length; i++) {
        if ([...p.split('')].includes(val[i])) return true
    }

    return false;
}


const pass = 'g1A!';
console.log(minimumNumber(pass.length, pass));