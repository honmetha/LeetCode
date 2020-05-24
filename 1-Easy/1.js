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



// Javascript 34ms RunTime, 33mb memory solution
// https://leetcode.com/problems/two-sum/discuss/631552/Javascript-34ms-RunTime-33mb-memory-solution
const twoSum = (nums, target) => {
  const l = {};
  for(var index = 0; index < nums.length; index++) {
      if (l[target - nums[index]] !== undefined) return [l[target-nums[index]], index];
      l[nums[index]] = index;
  }
};



// JS faster than 99%
// https://leetcode.com/problems/two-sum/discuss/634639/JS-faster-than-99
const twoSum = (nums, target) => {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len ; i++) {
    if (target - nums[i] in obj) {
    return [obj[target - nums[i]], i];
    }
    obj[nums[i]]=i;
  }
};