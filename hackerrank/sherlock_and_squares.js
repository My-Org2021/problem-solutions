
// Brokes time limit :D
function squares(a, b) {
    let result = 0;

    let current = a;
    while (current <= b) {
        let val = Math.floor(Math.sqrt(current));
        if (val * val === current) result++
        current++
    }

    return result;
}

// Super cool js code :)
const squares = (a, b) => (Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a))) + 1;


const a = 3, b = 9;
const res = squares(a, b);
console.log(res);