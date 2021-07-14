/*
4 times turn
    0, 1, 2, 3

    (4 - 3 = 1) --> [1] symbol and [3] space.
    (4 - 2 = 2) --> [2] symbol and [2] space.
    (4 - 1 = 3) --> [3] symbol and [1] space.
    (4 - 0 = 4) --> [4] symbol and [0] space.
*/

function staircase(n) {
    for (let i = n - 1; i > -1; i--) {
        let spaces = filler(i, ' ');
        let symbols = filler(n - i, '#');
        console.log(spaces + symbols);
    }
}

const filler = (n, s) => {
    var res = '';
    for (let i = 0; i < n; i++) res += s;
    return res;
}


staircase(100);


/* - Solution in Dart lang. ~Tried just for fun :D

void staircase(int n) {
  for (int i = n - 1; i > -1; i--) {
    var spaces = ' ' * i;
    var symbols = '#' * (n - i);
    print(spaces + symbols);
  }
}
*/


