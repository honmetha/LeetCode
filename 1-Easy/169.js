// 169. Majority Element

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {number}

const majorityElement = nums => nums.sort((a, b) => a - b)[Math.ceil(nums.length / 2) - 1];

// Faster
const majorityElement = nums => {
  if (!nums) return null;

  let count = 1;
  let mElement = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (mElement != nums[i] && count == 0) {
      count++;
      mElement = nums[i];
    } else if (mElement != nums[i] && count != 0) {
      count--;
    } else {
      count++;
    }
  }
  return mElement;
}