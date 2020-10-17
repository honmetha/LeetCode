// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain
// amount of money stashed, the only constraint stopping you from robbing each of them is that
// adjacent houses have security system connected and it will automatically contact the police if
// two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine
// the maximum amount of money you can rob tonight without alerting the police.


// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.


// Constraints:
// - 0 <= nums.length <= 100
// - 0 <= nums[i] <= 400


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {number}

// Original
const rob = nums => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  let arr = [];
  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);

  for (i = 2; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 1], nums[i] + arr[i - 2]);
  }

  return arr[arr.length - 1];
};


// Cleaner than original solution
const rob = nums => {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];
  let totals = [nums[0], Math.max(nums[0], nums[1])];
  for(let i = 2; i < nums.length; i ++){
      totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]);
  }
  return totals[totals.length - 1];
};


// JavaScript One-liner
// https://leetcode.com/problems/house-robber/discuss/662144/JavaScript-One-liner
const rob = nums => nums.reduce((acc, cur) => [acc[1], Math.max(acc[1], acc[0] + cur)], [0, 0])[1];


// [EASY TO READ] Javascript, O(n) time, O(1) space, Iterative
// https://leetcode.com/problems/house-robber/discuss/282624/EASY-TO-READ-Javascript-O(n)-time-O(1)-space-Iterative
var rob = function(nums) {
  /*
  Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
  Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.
  
  O(n) time, O(1) space

- Bottom up strategy
- Iterative
- Memoization

Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
  */
  
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  
  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
      const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
      
      maxAtTwoBefore = maxAtOneBefore;
      maxAtOneBefore = maxAtCurrent;
  }
  
  return maxAtOneBefore;
};


// https://leetcode.com/problems/house-robber/discuss/491274/JavaScript-Solution
const rob = nums => {
  let memo = [];
  memo[0] = 0;
  memo[1] = nums[0];
  
  for (let i=1;i<nums.length;i++) {
      memo[i+1] = Math.max(memo[i], memo[i-1] + nums[i]);
  }
  
  return memo[nums.length];   
}

// Test cases
// []
// [0]
// [400]
// [1,1]
// [2,2,2,2]
// [1,2,3,1]
// [2,7,9,3,1]
// [7,1,1,4]
// [1,9,9,8,7,12,6,4,5,6,7,3,0,6,1,2,4,5,1,1,1,0,3,4,5,6,8,8,13,9,3,2]