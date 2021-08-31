// https://www.hackerrank.com/challenges/lowest-triangle/problem

// We have a Triangle with a1 a2 and b1
// To find it's height we could plus a1 to a2 and then divide result to b1
// In our case method give us one area and one base then we should multiply area by two to // get a1 with a2
const lowestTriangle = (trianglebase, area) => Math.ceil((area * 2) / trianglebase)


const base = 17, area = 100;
const res = lowestTriangle(base, area);
console.log(res);
