// 2225. Find Players With Zero or One Losses

// You are given an integer array matches where matches[i] = [winneri, loseri] indicates
// that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:
// - answer[0] is a list of all players that have not lost any matches.
// - answer[1] is a list of all players that have lost exactly one match.

// The values in the two lists should be returned in increasing order.

// Note:
// - You should only consider the players that have played at least one match.
// - The testcases will be generated such that no two matches will have the same outcome.

// Example 1:
// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

// Example 2:
// Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// Output: [[1,2,5,6],[]]
// Explanation:
// Players 1, 2, 5, and 6 have not lost any matches.
// Players 3 and 4 each have lost two matches.
// Thus, answer[0] = [1,2,5,6] and answer[1] = [].

// Constraints:
// 1 <= matches.length <= 105
// matches[i].length == 2
// 1 <= winneri, loseri <= 105
// winneri != loseri
// All matches[i] are unique.

/***********************************************************************
 *  Solution
 **********************************************************************/

// My attempt
const findWinners = (matches: number[][]): number[][] => {
  let playersWithLosingNumber: {[key: string]: number} = {};
  let answerList: number[][] = [[], []];

  for (let match of matches) {
    const [winner, loser] = match;
    if (!playersWithLosingNumber[winner]) playersWithLosingNumber[winner] = 0;
    if (!playersWithLosingNumber[loser]) playersWithLosingNumber[loser] = 1;
    else playersWithLosingNumber[loser]++;
  }
  for (let player in playersWithLosingNumber) {
    if (playersWithLosingNumber[player] === 0)
      answerList[0].push(Number(player));
    if (playersWithLosingNumber[player] === 1)
      answerList[1].push(Number(player));
  }
  answerList.forEach((list) => list.sort((a, b) => a - b));
  return answerList;
};

// Alternative 1
const findWinners = (matches: number[][]): number[][] => {
  let looser = {};
  let allPlayer = {};
  for (let i = 0; i < matches.length; i++) {
    if (looser[matches[i][1]]) looser[matches[i][1]]++;
    else looser[matches[i][1]] = 1;

    if (!allPlayer[matches[i][0]]) allPlayer[matches[i][0]] = 1;
    if (!allPlayer[matches[i][1]]) allPlayer[matches[i][1]] = 1;
  }

  const first = [],
    second = [];
  for (let key in allPlayer) {
    if (!looser[key]) first.push(key);
    if (looser[key] == 1) second.push(key);
  }
  return [first, second];
};

// Alternative 2
const findWinners = (matches: number[][]): number[][] => {
  let lost = {};
  for (let [winner, loser] of matches) {
    lost[winner] = lost[winner] || 0;
    lost[loser] = (lost[loser] || 0) + 1;
  }
  let res = [[], []];
  for (let player in lost) {
    if (lost[player] === 0) res[0].push(+player);
    else if (lost[player] === 1) res[1].push(+player);
  }
  return res;
};

// Test cases
// [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// [[2,3],[1,3],[5,4],[6,4]]

export default findWinners;
