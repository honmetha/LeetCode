// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// Constraints:
// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {number[]} nums
// @return {number[]}

// JavaScript Sort
const sortArray = (nums) => nums.sort((a, b) => a - b);

// Selection Sort - O(n^2)
const sortArray = (nums) => {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    const temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
};

// Bubble Sort - Best Case : O (n), Average Case : O (n^2),Worst Case : O (n^ 2)
const sortArray = (nums) => {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let k = nums.length - 1; k >= 1; k--) {
    for (let i = 0; i < k; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1);
      }
    }
  }
  return nums;
};

// Insertion Sort-Best Case : O (n), Average Case : O (n^2),Worst Case : O (n^ 2)
const sortArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];
    let hole = i;
    while (hole > 0 && nums[hole - 1] > value) {
      nums[hole] = nums[hole - 1];
      hole = hole - 1;
    }
    nums[hole] = value;
  }
  return nums;
};

// Merge Sort - Best Case : O(n log n), Average Case :O(n log n), Worst Case : O(n log n)
const sortArray = (nums) => {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  const merge = (left, right) => {
    let result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
    while (l < lLen && r < rLen) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  };

  return merge(sortArray(left), sortArray(right));
};

// Quick Sort - Best Case : O(n log n), Average Case :O(n log n), Worst Case : O(n^2)
const sortArray = (nums) => {
  const quickSortHelper = (nums, start, end) => {
    if (start >= end) return nums;

    const pivotValue = nums[start];
    let smaller = start;
    for (let i = start + 1; i <= end; i++) {
      const bigger = i;
      if (nums[bigger] < pivotValue) {
        smaller++;
        const smallerValue = nums[bigger];
        nums[bigger] = nums[smaller];
        nums[smaller] = smallerValue;
      }
    }
    const smallerCache = nums[smaller];
    nums[smaller] = nums[start];
    nums[start] = smallerCache;

    quickSortHelper(nums, start, smaller - 1);
    quickSortHelper(nums, smaller + 1, end);
    return nums;
  };

  return quickSortHelper(nums, 0, nums.length - 1);
};
