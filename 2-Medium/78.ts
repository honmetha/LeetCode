// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

/***********************************************************************
 *  Solution
 **********************************************************************/

const subsets = (nums: number[]): number[][] => {
  let output = [[]];
  let initialStart = [];
  let end = [];

  while (end[0] !== 0) {
    initialStart.push(initialStart.length);
    end.unshift(nums.length - 1 - end.length);

    let start = [...initialStart];
    let currentIndex = initialStart.length - 1;

    while (start[0] <= end[0]) {
      let subset = [];
      for (let i = 0; i < start.length; i++) {
        subset.push(nums[start[i]]);
      }
      output.push(subset);

      start[currentIndex]++;
      while (start[currentIndex] > end[currentIndex]) {
        currentIndex--;
        start[currentIndex]++;
      }
      while (currentIndex < start.length - 1) {
        currentIndex++;
        start[currentIndex] = start[currentIndex - 1] + 1;
      }
    }
  }

  return output;
};

// Test cases
// [1,2,3]
// [0]

export default subsets;
