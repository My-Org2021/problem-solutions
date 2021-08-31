// https://www.hackerrank.com/challenges/equality-in-a-array/problem

const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
const countInArray = (arr, val) => arr.reduce((n, x) => n + (x === val), 0);

function equalizeArray(arr) {
   const dublicates = findDuplicates(arr);
   
   if (dublicates.length === 0) return arr.length - 1;
   
   let moreDub = 0;
   for (let i = 0; i < dublicates.length; i++) {
      const val = countInArray(arr, dublicates[i]);
      if (moreDub < val) moreDub = val;
   }

   return arr.length - moreDub;
}

const arr = [37, 32, 97, 35, 76, 62]
const result = equalizeArray(arr);
console.log(result);