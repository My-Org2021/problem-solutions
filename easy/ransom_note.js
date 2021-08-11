// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

const checkMagazine = (magazine, note) => {
    for (let i = 0; i < note.length; i++) {
        if (!magazine.includes(note[i])) return console.log("No");

        magazine.splice(magazine.indexOf(note[i]), 1);
    }

    console.log("Yes");
}

let magazine = ['give', 'me', 'one', 'grand', 'today', 'night'], note = ['give', 'one', 'grand', 'today'];
const result = checkMagazine(magazine, note);
