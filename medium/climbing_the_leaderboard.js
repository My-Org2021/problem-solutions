// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
    let result = [], modifiedRanked = ranked;

    player.forEach(element => {
        // Here we reset modifiedRank because down-below we have to find correct index of item.
        // So if we don't do it then in second loop modifiedRanked would be really modified :D so that's what we didn't want.
        modifiedRanked = ranked;

        modifiedRanked.push(element);
        modifiedRanked.sort((a, b) => b - a);
        result.push(modifiedRanked.convertToRanks()[modifiedRanked.indexOf(element)])
    });

    return result;
}

Array.prototype.convertToRanks = function () {
    let ranks = [], rank = 1;

    for (let i = 0; i < this.length; i++) {
        if (this[i - 1] > this[i]) rank++
        ranks.push(rank);
    }

    return ranks
};


// const climbingLeaderboard = (scores, alice) => {
//     let positions = [];
//     let distScore = [...new Set(scores)];
//     let i = distScore.length - 1;
//     alice.forEach(element => {
//         while (i >= 0) {
//             if (element >= distScore[i]) {
//                 i--;
//             } else {
//                 positions.push(i + 2);
//                 break;
//             }
//         }

//         if (i < 0) positions.push(1);
//     });

//     return positions;
// }


const ranked = [100, 100, 50, 40, 40, 20, 10]
const player = [5, 25, 50, 120];

const result = climbingLeaderboard(ranked, player);
console.log(result);
