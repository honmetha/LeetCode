// 1. Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} nums
// @param {number} target
// @return {number[]}

const twoSum = (nums, target) => {
  const previousValues = {}
  for (i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, i]
    } else {
      previousValues[currentNumber] = i;
    }
  }
};