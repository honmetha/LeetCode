// 283. Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.

const moveZeroes = nums => {
  let i = 0, length = nums.length;

  while (i < length) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0])
      length--;
    } else {
      i++;
    }
  }
};

// Alternative
const moveZeroes = nums => {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[count++] = nums[i];
    }
  }

  while (count < nums.length) {
    nums[count++] = 0;
  }
  
  return nums;
};