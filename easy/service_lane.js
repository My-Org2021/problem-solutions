// https://www.hackerrank.com/challenges/service-lane/problem

// Just replace width to n because n is unesesarry.
function serviceLane(w, cases) {
    const result = []

    for (let i = 0; i < cases.length; i++) {
        const el = cases[i];

        const modified = w.slice(el[0], el[1] + 1)
        result.push(Math.min(...modified))
    }

    return result;
}

const width = [2, 3, 1, 2, 3, 2, 3, 3];
const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
const result = serviceLane(width, cases);
console.log(result);