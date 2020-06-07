// 1043. Partition Array for Maximum Sum

// Given an integer array A, you partition the array into (contiguous) subarrays of length at most K.
// After partitioning, each subarray has their values changed to become the maximum value of that subarray.

// Return the largest sum of the given array after partitioning.


// Example 1:

// Input: A = [1,15,7,9,2,5,10], K = 3
// Output: 84
// Explanation: A becomes [15,15,15,9,10,10,10]
 

// Note:

// 1 <= K <= A.length <= 500
// 0 <= A[i] <= 10^6


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} A
// @param {number} K
// @return {number}

const maxSumAfterPartitioning = (A, K) => {
  let max = 0, count = 0, output = 0;
  for (i = 0; i < K; i++) {
    if (max < A[i]) max = A[i];
    count++;
  }
  
  output = (max * count) + A[K];
  max = 0;
  count = 0;

  for (i = K + 1; i < A.length; i++) {
    if (max < A[i]) max = A[i];
    count++;
  }

  return output + (max * count);
};

// Test cases
// A = [1,15,7,9,2,5,10], K = 3
// A = [1,4,1,5,7,3,6,1,9,9,3], K = 4
// A = [10,4,1,9,7,3,6,1,2,2,3], K = 4

const maxSumAfterPartitioning = (A, K) => {
  let sort = A.sort((a, b) => b - a);
  return sort;
};