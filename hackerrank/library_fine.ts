// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
    if (y1 > y2) return 10000;
    if (y1 < y2 || m1 < m2) return 0;

    if (m1 > m2) return (m1 - m2) * 500;
    if (d1 > d2) return (d1 - d2) * 15;

    return 0
}

const d1 = 9, d2 = 6;
const m1 = 6, m2 = 6;
const y1 = 2015, y2 = 2015;

const res = libraryFine(d1, m1, y1, d2, m2, y2);
console.log(res);