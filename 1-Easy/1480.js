// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]


// Constraints:
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {number[]}

// Original
const runningSum = nums => {
  let previousSum = 0;
  return nums.map(num => previousSum += num);
};

// One-Liner
const runningSum = nums => nums.reduce((prev,num,i) => [...prev, (prev[i-1] || 0) + num],[]);

// 98% & 100%
const runningSum = nums => {
  const result = [nums[0]];
  for (i = 0; i < nums.length - 1; i++) {
    result.push(result[i] + nums[i + 1]);
  }
  return result;
};