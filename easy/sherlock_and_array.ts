// https://www.hackerrank.com/challenges/sherlock-and-array/problem

function balancedSums(arr: any): string {
    if (arr.length === 1) return "YES"

    let left = 0, right = arr.slice(1).reduce((a: any, b: any) => a + b,);
    if (left === right) return "YES"

    let item = arr[0];
    for (let i = 1; i < arr.length; i++) {
        left += item;
        item = arr[i];
        right -= item;

        if (left === right) return 'YES'
    }

    return 'NO';
}

const arr = [1 ,1, 4, 1, 1];
console.log(balancedSums(arr));