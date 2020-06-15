// 877. Stone Game

// Alex and Lee play a game with piles of stones. There are an even number of piles arranged in a row,
// and each pile has a positive integer number of stones piles[i].

// The objective of the game is to end with the most stones.
// The total number of stones is odd, so there are no ties.

// Alex and Lee take turns, with Alex starting first. Each turn, a player takes the entire pile of stones
// from either the beginning or the end of the row. This continues until there are no more piles left,
// at which point the person with the most stones wins.

// Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.


// Example 1:

// Input: [5,3,4,5]
// Output: true
// Explanation: 
// Alex starts first, and can only take the first 5 or the last 5.
// Say he takes the first 5, so that the row becomes [3, 4, 5].
// If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
// If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
// This demonstrated that taking the first 5 was a winning move for Alex, so we return true.


// Note:

// 1. 2 <= piles.length <= 500
// 2. piles.length is even.
// 3. 1 <= piles[i] <= 500
// 4. sum(piles) is odd.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} piles
// @return {boolean}

const stoneGame = piles => {
  let Alex = 0, Lee = 0, count = 0;

  while (piles.length !== 0) {
    let begin = 0, end = piles.length - 1, difference1 = 0, difference2 = 0;

    difference1 = piles[begin + 1] > piles[end] ? piles[begin] - piles[begin + 1]: piles[begin] - piles[end];
    difference2 = piles[begin] > piles[end - 1] ? piles[end] - piles[begin]: piles[end] - piles[end - 1];

    console.log("difference1", difference1);
    console.log("difference2", difference2);

    if (count % 2 === 0) {
      Alex = difference1 > difference2 ? Alex + piles.shift(): Alex + piles.pop();
    } else {
      Lee = difference1 > difference2 ? Lee + piles.shift(): Lee + piles.pop();
    }

    console.log("piles", piles);
    console.log("Alex", Alex);
    console.log("Lee", Lee);

    count++;
  }
  
  return (Alex > Lee ? true: false);
};

// Test cases
// [5,3,4,10,6,9,20,8]
// [30,3,20,8]
// [5,3,4,5]
// [3,7,5,4]
// [3,7,8,2,1,7,5,4]
// [1,4,10,8,3,2,4,1]