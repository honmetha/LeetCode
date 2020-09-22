// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].
// An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.


// Example 1:
// Input: [1,2,2,3]
// Output: true

// Example 2:
// Input: [6,5,4,4]
// Output: true

// Example 3:
// Input: [1,3,2]
// Output: false

// Example 4:
// Input: [1,2,4,5]
// Output: true

// Example 5:
// Input: [1,1,1]
// Output: true


// Note:
// 1. 1 <= A.length <= 50000
// 2. -100000 <= A[i] <= 100000


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} A
// @return {boolean}

// Original
const isMonotonic = A => {
  let monotone = A[0] < A[A.length - 1] ? "increasing" : "decreasing";
  if (A[0] === A[A.length - 1]) monotone = "";

  for (i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) continue;
    if (A[i] > A[i - 1] && monotone !== "increasing") return false;
    if (A[i] < A[i - 1] && monotone !== "decreasing") return false;
  }

  return true;
};

// Cleaner
const isMonotonic = A => {
  let increasing = true, decreasing = true;
  
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i+1]) increasing = false;
    if (A[i] < A[i+1]) decreasing = false;
  }
  
  return increasing || decreasing 
};

// One-Liner
const isMonotonic = A => A.every((value, index) => index === 0 || value <= A[index - 1]) || A.every((value, index) => index === 0 || value >= A[index - 1]);