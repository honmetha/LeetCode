// 2023. Number of Pairs of Strings With Concatenation Equal to Target

// Given an array of digit strings nums and a digit string target, return the number of pairs of
// indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

// Example 1:
// Input: nums = ["777","7","77","77"], target = "7777"
// Output: 4
// Explanation: Valid pairs are:
// - (0, 1): "777" + "7"
// - (1, 0): "7" + "777"
// - (2, 3): "77" + "77"
// - (3, 2): "77" + "77"

// Example 2:
// Input: nums = ["123","4","12","34"], target = "1234"
// Output: 2
// Explanation: Valid pairs are:
// - (0, 1): "123" + "4"
// - (2, 3): "12" + "34"

// Example 3:
// Input: nums = ["1","1","1"], target = "11"
// Output: 6
// Explanation: Valid pairs are:
// - (0, 1): "1" + "1"
// - (1, 0): "1" + "1"
// - (0, 2): "1" + "1"
// - (2, 0): "1" + "1"
// - (1, 2): "1" + "1"
// - (2, 1): "1" + "1"

// Constraints:
// 2 <= nums.length <= 100
// 1 <= nums[i].length <= 100
// 2 <= target.length <= 100
// nums[i] and target consist of digits.
// nums[i] and target do not have leading zeros.

/***********************************************************************
 *  Solution
 **********************************************************************/

// My attempt
const numOfPairs = (nums: string[], target: string): number => {
  let map: {[key: string]: number} = {};
  let count: number = 0;

  for (let num of nums) {
    let numsToSearch: string[] = [];

    if (target.startsWith(num)) numsToSearch.push(target.slice(num.length));
    if (target.endsWith(num))
      numsToSearch.push(target.slice(0, -Math.abs(num.length)));

    for (let numToSearch of numsToSearch) {
      if (map[numToSearch]) count += map[numToSearch];
    }

    if (!map[num]) map[num] = 1;
    else map[num]++;
  }
  return count;
};

// Alternative 1
const numOfPairs = (nums, target) => {
  let count = 0;
  let x = 0;
  while (x < nums.length) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[x] + nums[y] == target) {
        count += 1;
        if (x == y) {
          count -= 1;
        }
      }
    }
    x++;
  }
  return count;
};

// Alternative 2
const numOfPairs = (nums, target) => {
  let n = nums.length,
    res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      if (nums[i] + nums[j] == target) res++;
    }
  }
  return res;
};

// Test cases
// ["777","7","77","77"], "7777"
// ["123","4","12","34"], "1234"
// ["1","1","1"], "11"
// ["9","8","7"], "20"

export default numOfPairs;
