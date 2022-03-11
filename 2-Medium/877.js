// 877. Stone Game

// Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a
// row, and each pile has a positive integer number of stones piles[i].

// The objective of the game is to end with the most stones. The total number of stones across all
// the piles is odd, so there are no ties.

// Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of
// stones either from the beginning or from the end of the row. This continues until there are no
// more piles left, at which point the person with the most stones wins.

// Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.

// Example 1:
// Input: piles = [5,3,4,5]
// Output: true
// Explanation:
// Alice starts first, and can only take the first 5 or the last 5.
// Say she takes the first 5, so that the row becomes [3, 4, 5].
// If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
// If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
// This demonstrated that taking the first 5 was a winning move for Alice, so we return true.

// Example 2:
// Input: piles = [3,7,2,3]
// Output: true

// Constraints:
// - 2 <= piles.length <= 500
// - piles.length is even.
// - 1 <= piles[i] <= 500
// - sum(piles[i]) is odd.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {number[]} piles
// @return {boolean}

// O(1)
const stoneGame = (piles) => true;

// Alternative
const stoneGame = (piles) => {
  piles.sort((a, b) => b - a);

  let alice = 0;
  let bob = 0;

  while (piles.length > 0) {
    alice += piles.shift();

    if (piles.length > 0) {
      bob += piles.shift();
    }
  }

  return alice > bob;
};

// Test cases
// [5,3,4,10,6,9,20,8]
// [30,3,20,8]
// [5,3,4,5]
// [3,7,2,3]
// [3,7,5,4]
// [3,7,8,2,1,7,5,4]
// [1,4,10,8,3,2,4,1]

module.exports = stoneGame;
