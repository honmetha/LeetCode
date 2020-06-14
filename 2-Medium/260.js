// 260. Single Number III

// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// Example:

// Input:  [1,2,1,3,2,5]
// Output: [3,5]

// Note:

// 1. The order of the result is not important. So in the above example, [5, 3] is also correct.
// 2. Your algorithm should run in linear runtime complexity.
// Could you implement it using only constant space complexity?


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} nums
// @return {number[]}

const singleNumber = (nums) => {
  let length = nums.length, count = 1, output = [];
  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          count--;
          break;
        }
      }
    }
    count === 1 ? output.push(nums[i]): count++;
    if (output.length === 2) {
      return output
    }
  }
};



const singleNumber = (nums) => {
  const previousValues = {};
  for (i = 0; i < nums.length; i++) {
    const currentNumber = previousValues[nums[i]];
  }
};