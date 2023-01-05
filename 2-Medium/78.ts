// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/***********************************************************************
 *  Solution
 **********************************************************************/

const subsets = (nums: number[]): number[][] => {
  return [[]];
};

// Test cases
// [1,2,3]
// [0]
// [3,4,5,6,7]
// [-5,6,4,3,2,9,8,-1,-4]

export default subsets;
