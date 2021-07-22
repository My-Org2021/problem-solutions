// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
    const fullList = fillTheList(n);
    let result = BigInt(fullList[0])

    for (let i = 1; i < n; i++) result *= BigInt(fullList[i])

    result = result.toString();

    if (result[result.length - 1] === 'n') {
        console.log(result.substring(0, result.length - 1));
        return;
    }

    console.log(result);
}

const fillTheList = (start) => {
    let result = [];
    for (let i = start; i > 0; i--) result.push(i);
    return result;
}

extraLongFactorials(25) // Should log: 15511210043330985984000000
