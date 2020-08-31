// 674. Longest Continuous Increasing Subsequence

// Given an unsorted array of integers,
// find the length of longest continuous increasing subsequence (subarray).

// Example 1:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
// Even though [1,3,5,7] is also an increasing subsequence,it's not a continuous one where 5 and 7 are separated by 4. 

// Example 2:
// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1.

// Note: Length of the array will not exceed 10,000.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums
// @return {number}

const findLengthOfLCIS = nums => {
  if (nums.length === 0) return 0;

  let maxCount = 1;
  let count = 1;

  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      count++;
    } else {
      if (count > maxCount) maxCount = count;
      count = 1;
    }
  }

  return maxCount;
};

// Test cases
// []
// [0]
// [1,2,3,1,4,5,5,6,7]
// [5,6,3,7,8,9,10]
// [1,8,6,2,6,4,7,8,9,0,12,14,2,3,1]
// [5,7,7,7,8,3,4,9,-6,-5,-4,-3,5,2,6,7]
// [1,1,2,2,3,3,4,4,5,6,5,6,5,6]