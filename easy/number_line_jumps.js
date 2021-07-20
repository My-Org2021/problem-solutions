// https://www.hackerrank.com/challenges/kangaroo/

/* First variant wich can't pass 11/30 tests.

function kangaroo(x1, v1, x2, v2) {
    let firstKangoroosPosition = x1;
    let secondKangoroosPosition = x2;

    for (let i = 0; i < 4; i++) {
        firstKangoroosPosition += v1;
        secondKangoroosPosition += v2;
    }

    return firstKangoroosPosition === secondKangoroosPosition ? "YES" : "NO"
}
*/

const kangaroo = (x1, v1, x2, v2) => (v1 > v2 && (x2 - x1) % (v2 - v1) === 0) ? "YES" : "NO";

const result = kangaroo(14, 4, 98, 2);
console.log(result);