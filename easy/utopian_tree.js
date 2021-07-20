// https://www.hackerrank.com/challenges/utopian-tree/

function utopianTree(n) {
    var meters = 1;
    if (n == 0) return meters;
    
    for (var i = 1; i <= n; i++) {
        i % 2 == 0 ? meters++ : meters *= 2
    };

    return meters;
}


const result = utopianTree(2);
console.log(result);
