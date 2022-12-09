// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/***********************************************************************
 *  Solution
 **********************************************************************/

// My attempt
const permute = (nums: number[]): number[][] => {
  if (nums.length < 2) return [nums];

  let output: number[][] = [];
  let LengthList: number[] = [0, 1, 2, 6, 24, 120, 720];
  let pointer: number = nums.length;

  const outputLength = LengthList[pointer];
  pointer--;
  const previousLength = LengthList[pointer];
  const initialLoop = outputLength / previousLength;
  for (let i = 0; i < initialLoop; i++) {
    output = output.concat(
      Array.from({length: previousLength}, () => [nums[i]])
    );
  }

  while (pointer > 0) {
    let index = 0;
    let count = 0;
    pointer--;
    let limit = LengthList[pointer];

    for (let i = 0; i < output.length; i++) {
      while (output[i].includes(nums[index])) {
        index++;
        if (index > nums.length - 1) index = 0;
      }

      output[i].push(nums[index]);
      count++;
      if (count >= limit) {
        index++;
        if (index > nums.length - 1) index = 0;
        count = 0;
      }
    }
  }

  return output;
};

// Test cases
// [1]
// [0,1]
// [1,2,3]
// [1,2,3,4]
// [1,2,3,4,10]
// [0,5,4,3,2,7]

export default permute;
