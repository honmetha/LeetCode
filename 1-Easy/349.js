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


// JS Three-Liner
// https://leetcode.com/problems/intersection-of-two-arrays/discuss/696724/JS-Three-Liner
const intersection = (nums1, nums2) => {
  let set1 = Array.from(new Set(nums1)), set2 = new Set(nums2);
  return set1.filter(num => set2.has(num));
};


// Javascript idiomatic solution (beats 99% runtime, 100% memory)
// https://leetcode.com/problems/intersection-of-two-arrays/discuss/356426/Javascript-idiomatic-solution-(beats-99-runtime-100-memory)
const intersection = (nums1, nums2) => nums1.filter(n1 => nums2.includes(n1)).filter((e, i, s) => s.indexOf(e) === i);


// JS - Easy, O(n)
// https://leetcode.com/problems/intersection-of-two-arrays/discuss/564847/JS-Easy-O(n)
const intersection = (nums1, nums2) => {
  let map = {}, intersect = {};
  
  for (let i = 0; i < nums1.length; ++ i) {
    map[nums1[i]] = ++ map[nums1[i]] || 1;
  }
  
  for (let i = 0; i < nums2.length; ++ i) {
    if (map[nums2[i]]) {
      -- map[nums2[i]];
      intersect[nums2[i]] = true;
    }
  }
  
  return Object.keys(intersect);
};