// 1287. Element Appearing More Than 25% In Sorted Array

// Given an integer array sorted in non-decreasing order, 
// there is exactly one integer in the array that occurs more than 25% of the time.

// Return that integer.


// Example 1:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6


// Constraints:
// 1 <= arr.length <= 10^4
// 0 <= arr[i] <= 10^5


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} arr
// @return {number}

const findSpecialInteger = arr => {
  let i = count = 0, currentNumber = -1;
  let length = arr.length, oneFourth =  arr.length * 0.25;

  while (i < length) {
    if (arr[i] !== currentNumber) {
      count = 1;
      currentNumber = arr[i];
    } else {
      count++;
    }
    if (count > oneFourth) return currentNumber;
    i++
  }
};


// JavaScript 1-Line Regex Solution
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/discuss/527661/JavaScript-1-Line-Regex-Solution
// Runtime: 64 ms, faster than 52.15% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions
const findSpecialInteger = arr =>
  Number(
    ` ${arr.join('  ')} `
      .match(
        new RegExp(`( \\d+ )${'\\1'.repeat(Math.trunc(arr.length / 4))}`),
      )[1]
      .trim(),
  );