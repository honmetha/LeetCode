// 349. Intersection of Two Arrays

// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Note:
// Each element in the result must be unique.
// The result can be in any order.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} nums1
// @param {number[]} nums2
// @return {number[]}

const intersection = (nums1, nums2) => {
  let obj = {};
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));

  for (i = 0; i < nums1.length; i++) {
    obj[nums1[i]] = 1;
  }

  for (j = 0; j < nums2.length; j) {
    obj[nums2[j]] ? j++ : nums2.splice(j, 1);
  }

  return nums2;
};