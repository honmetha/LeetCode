// 852. Peak Index in a Mountain Array

// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:

// Input: [0,1,0]
// Output: 1

// Example 2:

// Input: [0,2,1,0]
// Output: 1

// Note:

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A is a mountain, as defined above.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} A
// @return {number}

// One-Liner
const peakIndexInMountainArray = A => A.indexOf(Math.max(...A));



const peakIndexInMountainArray = A => {
  let max = 0, idx = 0;
  for (i = 0; i < A.length; i++) {
    if (max > A[i]) {
      return idx;
    } else {
      max = A[i];
      idx = i;
    }
  }
};



const peakIndexInMountainArray = A => {
  let idx = 0;
  while (A[idx] < A[idx + 1]) {
    idx++;
  }
  return idx;
};

// test case
// [24,69,100,99,79,78,67,36,26,19]