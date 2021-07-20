// https://www.hackerrank.com/challenges/bon-appetit/

const removeItemFromArray = (array, item) => {
    let index = array.indexOf(item);
    array.splice(index, 1);
    return array;
}

function bonAppetit(bill, k, b) {
    let clearBills = removeItemFromArray(bill, bill[k]);
    let totalPrice = 0;

    for (let i = 0; i < clearBills.length; i++) totalPrice += clearBills[i];

    let result = totalPrice / 2;
    if (result === b) {
        console.log('Bon Appetit');
        return;
    }

    console.log(b - result);
}

const bills = [3, 10, 2, 9];
bonAppetit(bills, 1, 12)