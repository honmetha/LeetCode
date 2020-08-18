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

const runningSum = nums => {
  let previousSum = 0;
  return nums.map(num => previousSum += num);
};


// Javascript 1-line solution
// https://leetcode.com/problems/running-sum-of-1d-array/discuss/769107/Javascript-1-line-solution
const runningSum = nums => nums.reduce((prev,num,i) => [...prev, (prev[i-1] || 0) + num],[]);


// Simple JavaScript Solution w/ Explanation, 98% time, 100% Memory
// https://leetcode.com/problems/running-sum-of-1d-array/discuss/703938/Simple-JavaScript-Solution-w-Explanation-98-time-100-Memory
const runningSum = nums => {
  const ans = [nums[0]];
  for (i = 0; i < nums.length - 1; i++) {
    ans.push(ans[i] + nums[i + 1]);
  }
  return ans;
};