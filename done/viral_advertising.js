// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let res = 2;
    let like = 2;

    for (let i = 0; i < n - 1; i++) {
        like = Math.floor((like * 3) / 2)
        res += like
    }

    return res;
}

const result = viralAdvertising(50);

console.log(result);