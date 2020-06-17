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



// JS oneliner using reduce as object
// https://leetcode.com/problems/single-number-iii/discuss/591899/JS-oneliner-using-reduce-as-object
// I believe complexity of this is O(n) for reduce iteration + O(n) for Object.keys iteration on result of reduce.
// O(n) for space though :c
const singleNumber = nums => Object.keys(nums.reduce((acc, n) => (acc[n] ? delete acc[n] : acc[n] = 1, acc) ,{}))



// Javascript Solution but only faster than 38.98%
// https://leetcode.com/problems/single-number-iii/discuss/686573/Javascript-Solution-but-only-faster-than-38.98
const singleNumber = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      delete map[nums[i]];
      continue;
    }
    map[nums[i]] = true;
  }
  return Object.keys(map).map(item => Number(item));
};



// JS Solution using Map: faster than 100%
// https://leetcode.com/problems/single-number-iii/discuss/553308/JS-Solution-using-Map%3A-faster-than-100
const singleNumber = nums => {
  let m = new Map();
  nums.forEach(x => (!m.has(x)) ? m.set(x, 1): m.delete(x));
  return Array.from(m.keys());
};



// Track values of A in a set seen. If a value x has been seen twice, remove x from the set. Return the values remaining in the set.
// https://leetcode.com/problems/single-number-iii/discuss/476086/Javascript-and-C%2B%2B-solutions
let singleNumber = (A, seen = new Set()) => {
  for (let x of A)
    if (seen.has(x)) seen.delete(x);
    else seen.add(x);
  return [...seen];
};



// Javascript, beats 97%, two pass for get result
// https://leetcode.com/problems/single-number-iii/discuss/327146/Javascript-beats-97-two-pass-for-get-result
const singleNumber = nums => {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    diff^=nums[i];
  }
  diff&=-diff;
  let res1 = 0;
  let res2 = 0;
  for (let j = 0; j < nums.length; j++) {
    if ((nums[j]&diff) == 0) {
      res1^=nums[j];
    } else {
      res2^=nums[j];
    }
  }
  return [res1, res2];
};