// 485. Max Consecutive Ones

// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: 
// The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

// Note:
// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {number}

// Original
const findMaxConsecutiveOnes = nums => nums.join('').split(0).reduce((acc, item) => item.length > acc ? acc = item.length: acc, 0);

// One-Liner
const findMaxConsecutiveOnes = nums => Math.max(...nums.join("").split(0).map(x => x.length));

// Faster
const findMaxConsecutiveOnes = nums => {
  let count = 0;
  let maxLength = 0;
  
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    if (nums[i + 1] !== 1 && count > maxLength) maxLength = count;
    if (nums[i] === 0) count = 0;
  }
  
  return maxLength;
};