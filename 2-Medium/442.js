// 442. Find All Duplicates in an Array

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {number[]}

const findDuplicates = (nums) => {
  let Output = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        Output.push(nums[i]);
        break;
      }
    }
  }
  return Output;
};