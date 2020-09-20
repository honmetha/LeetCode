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

// Original (Fast)
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

// Fast + Less Memory
const intersection = (nums1, nums2) => {
  let map = {}, intersect = {};
  
  for (let i = 0; i < nums1.length; ++i) {
    map[nums1[i]] = ++map[nums1[i]] || 1;
  }
  
  for (let i = 0; i < nums2.length; ++i) {
    if (map[nums2[i]]) {
      --map[nums2[i]];
      intersect[nums2[i]] = true;
    }
  }
  
  return Object.keys(intersect);
};

// One-Liner
const intersection = (nums1, nums2) => nums1.filter(num1 => nums2.includes(num1)).filter((number, index, array) => array.indexOf(number) === index);