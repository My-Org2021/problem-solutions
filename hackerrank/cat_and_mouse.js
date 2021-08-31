// https://www.hackerrank.com/challenges/cats-and-a-mouse

function catAndMouse(x, y, z) {
    let isXCatchFirst = Math.abs(z - x) < Math.abs(z - y);
    let isMouseEscapes = Math.abs(z - x) === Math.abs(z - y)

    if (isMouseEscapes) return "Mouse C";
    return isXCatchFirst ? "Cat A" : "Cat B";
}

const x = 33;  
const y = 86;
const z = 59;

let result = catAndMouse(x, y, z);
console.log(result)