// 1561. Maximum Number of Coins You Can Get

// There are 3n piles of coins of varying size, you and your friends will take piles of coins as
// follows:

// - In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// - Of your choice, Alice will pick the pile with the maximum number of coins.
// - You will pick the next pile with the maximum number of coins.
// - Your friend Bob will pick the last pile.
// - Repeat until there are no more piles of coins.

// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins that you can have.

// Example 1:
// Input: piles = [2,4,1,2,7,8]
// Output: 9
// Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins,
// you the pile with 7 coins and Bob the last one.
// Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile
// with 2 coins and Bob the last one.
// The maximum number of coins which you can have are: 7 + 2 = 9.
// On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you
// only get 2 + 4 = 6 coins which is not optimal.

// Example 2:
// Input: piles = [2,4,5]
// Output: 4

// Example 3:
// Input: piles = [9,8,7,6,5,1,2,3,4]
// Output: 18

// Constraints:
// - 3 <= piles.length <= 105
// - piles.length % 3 == 0
// - 1 <= piles[i] <= 104

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {number[]} piles
// @return {number}

// Original
const maxCoins = (piles) => {
  let total = 0;
  let sortedPiles = piles.sort((a, b) => b - a);

  for (let i = 1; i < sortedPiles.length; i += 2) {
    total += sortedPiles[i];
    sortedPiles.pop();
  }

  return total;
};

// Alternative
const maxCoins = (piles) => {
  const start = piles.length / 3;
  piles.sort((a, b) => a - b);
  let res = 0;
  for (let i = start; i < piles.length; i += 2) res += piles[i];
  return res;
};

// Alternative
const maxCoins = (piles) => {
  if (piles.length < 3 || piles.length % 3 != 0) return 0;

  piles.sort((a, b) => b - a);
  let myCoins = 0;

  while (piles.length > 0) {
    piles.shift();
    myCoins += piles.shift();
    piles.pop();
  }

  return myCoins;
};

// Test cases
// [1,1,2]
// [2,2,2]
// [1,2,3]
// [1,1,1,1,1,1,2,3,1]
// [2,4,1,2,7,8]
// [2,4,5]
// [9,8,7,6,5,1,2,3,4]
// [123,111,110,50,69,71,80,97,34]
// [10,9,9,1,1,7,3,10,1]
// [10,9,9,8,8,7,6,6,6]

module.exports = maxCoins;
