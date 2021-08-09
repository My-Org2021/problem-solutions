// https://www.hackerrank.com/challenges/jim-and-the-orders/problem

function jimOrders(orders: number[][]): number[] {
    let result = [];

    for (let i = 0; i < orders.length; i++) {
        const value = orders[i][0] + orders[i][1];
        result.push([value, i + 1]);
    }

    return result.sort((a, b) => a[0] - b[0]).map(el => el[1]);
}

const orders = [[1, 3], [2, 3], [3, 3]];
const result = jimOrders(orders);
console.log(result);
