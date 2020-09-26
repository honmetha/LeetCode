// 506. Relative Ranks

// Given scores of N athletes, find their relative ranks and the people with the top three highest scores,
// who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks according to their scores.

// Note:
// 1. N is a positive integer and won't exceed 10,000.
// 2. All the scores of athletes are guaranteed to be unique.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {string[]}

// Original
const findRelativeRanks = nums => {
  const sortedNums = nums.concat().sort((a, b) => b - a);
  const obj = {};

  obj[sortedNums[0]] = "Gold Medal";
  obj[sortedNums[1]] = "Silver Medal";
  obj[sortedNums[2]] = "Bronze Medal";

  for (i = 3; i < sortedNums.length; i++) {
    obj[sortedNums[i]] = (i + 1) + "";
  }

  return nums.map(num => num = obj[num]);
};

// Cleaner
const findRelativeRanks = nums => {
  let ranks = nums.slice(0).sort((a, b) => b - a);
  
  return nums.map(num => {
     if (num === ranks[0]) return 'Gold Medal';
     else if (num === ranks[1]) return 'Silver Medal';
     else if (num === ranks[2]) return 'Bronze Medal';
     else return (ranks.indexOf(num) + 1).toString();
  });
};

// Test cases
// [1,787,3456,32,675,3,8,6,9,4,5]