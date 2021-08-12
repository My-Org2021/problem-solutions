// https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s: string, t: string, k: number): string {
    let newS = '';
    let operation = -1;

    for (let i = 0; i < (t.length < s.length ? t.length : s.length); i++) {
        if (s[i] !== t[i]) break;

        newS += s[i];
        (t.length < s.length || t.length == s.length) ? operation++ : null
    }

    let addable = `${t}`.replace(newS, '');
    newS += addable;
    operation += addable.length;

    if ((k - (s.length - t.length) < 0) || operation > k) return "No"

    return "Yes"
}

const s = 'qwerasdf', t = 'qwerbsdf', k = 6;

const res = appendAndDelete(s, t, k);
console.log(res);