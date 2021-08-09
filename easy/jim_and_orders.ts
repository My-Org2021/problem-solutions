// https://www.hackerrank.com/challenges/jim-and-the-orders/problem

function jimOrders(orders: number[][]): number[] {
    let result = orders.map((v, i) => [v[0] + v[1], i + 1]).sort((a, b) => a[0] - b[0]);
    return result.map(e => e[1]);
}

const orders = [[1, 3], [2, 3], [3, 3]];
const result = jimOrders(orders);
console.log(result);
