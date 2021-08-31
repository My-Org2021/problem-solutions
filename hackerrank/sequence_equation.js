// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
    let result = []
    for (let i = 1; i < p.length + 1; i++) {
        result.push(p.indexOf(p.indexOf(i) + 1) + 1)
    }

    return result
}



const p = [4, 3, 5, 1, 2];
const result = permutationEquation(p);
console.log(result); // Output should be [1, 3, 5, 4, 2]