// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array
// [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section)
// are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/***********************************************************************
 *  Solution
 **********************************************************************/

// My attempt
const trap = (height: number[]): number => {
  let total = 0;
  let trapHeight = [...height];

  while (trapHeight[0] === 0 || trapHeight[trapHeight.length - 1] === 0) {
    if (trapHeight[0] === 0) trapHeight.shift();
    if (trapHeight[trapHeight.length - 1] === 0) trapHeight.pop();
  }

  if (trapHeight.length <= 2) return total;

  let max: number[] = [];
  let secondMax: number[] = [];
  const minLength = 2;

  while (trapHeight.length > minLength) {
    if (trapHeight[0] > trapHeight[1]) {
      max = [trapHeight[0], 0];
      secondMax = [trapHeight[1], 1];
    } else {
      max = [trapHeight[1], 1];
      secondMax = [trapHeight[0], 0];
    }

    for (let i = 2; i < trapHeight.length; i++) {
      if (trapHeight[i] > max[0]) {
        secondMax = [...max];
        max = [trapHeight[i], i];
      } else if (trapHeight[i] > secondMax[0]) {
        secondMax = [trapHeight[i], i];
      }
    }

    let subArr: number[];
    const [, maxIdx] = max;
    const [secondMaxNum, secondMaxIdx] = secondMax;

    subArr =
      maxIdx > secondMaxIdx
        ? trapHeight.splice(secondMaxIdx + 1, maxIdx - secondMaxIdx)
        : trapHeight.splice(maxIdx, secondMaxIdx - maxIdx);

    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] > secondMaxNum) continue;
      total += secondMaxNum - subArr[j];
    }
  }

  return total;
};

// Test cases
// [0,1,0,2,1,0,1,3,2,1,2,1]
// [4,2,0,3,2,5]
// [9,2,7,3,2,6]
// [0,0,0,1,6,7,8,3,2,0]
// [0,1,2,3,4,5,6,7,6,5,4,3,2,1,0]
// [7,6,5,4,3,2,1,0,1,2,3,4,5,6,7]
// [4,2,4,2,4,1,4,1,4,0,4]
// [0,0,0,0,0]
// [1,1]
// [0]
// [2]

export default trap;
