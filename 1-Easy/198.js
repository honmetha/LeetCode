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
  
  let arr = [nums[0], Math.max(nums[0], nums[1])];

  for (i = 2; i < nums.length; i++) {
    arr[i] = Math.max(arr[i - 1], nums[i] + arr[i - 2]);
  }

  return arr[arr.length - 1];
};

// One-Liner
const rob = nums => nums.reduce((acc, num) => [acc[1], Math.max(acc[1], acc[0] + num)], [0, 0])[1];

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