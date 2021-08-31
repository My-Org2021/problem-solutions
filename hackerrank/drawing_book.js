// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
    if (p > n / 2) {
        let v = (n - p) / 2;
        return (n - p === 1) ? Math.ceil(v) : Math.floor(v);
    }

    return Math.ceil((p - 1) / 2);
}


const bookPages = 6;
const wannaMoveTo = 5;

const result = pageCount(bookPages, wannaMoveTo);
console.log(result);