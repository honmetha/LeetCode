// 66. Plus One

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list,
// and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.


// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]


// Constraints:
// - 1 <= digits.length <= 100
// - 0 <= digits[i] <= 9


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} digits
// @return {number[]}

// Original
const plusOne = digits => {
  let index = digits.length - 1;

  while (index >= 0 && ++digits[index] === 10) {
    if (digits[0] === 10) {
      digits[index] = 0;
      index--;
      digits.unshift(1);
    } else {
      digits[index] = 0;
      index--;
    }
  }

  return digits;
};


// Simple Direct JavaScript Solution
// https://leetcode.com/problems/plus-one/discuss/24297/Simple-Direct-JavaScript-Solution
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  
  digits.unshift(1);
  return digits;
};


// Simple JavaScript Solution
// https://leetcode.com/problems/plus-one/discuss/24353/Simple-JavaScript-Solution
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
  

// Test cases
// [0]
// [1,2,3]
// [4,3,2,1]
// [5,6,7,8]
// [9,4,9,7]
// [3,4,1,2,5]
// [0,9,9]
// [9,9,9,9]
// [5,3,2,3,4,8,7,9,0,7,6,9,9,9,9,9,9,9,9,5,4,3,2,1,3,4,4,4,3,3,3,3,4,4,3,3,3,4,4,9,9,9,9,9,9,9]
// [4,3,2,1,2,3,4,5,6,7,7,8,9,0,9,8,7,7,6,5,5,4,3,2,3,4,5,7,8,9,7,8,9,7,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,2,3,1,3,2,2,2,3,4,5,6,7,7,8,9,9,0,1,6,5,4,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
// [1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]