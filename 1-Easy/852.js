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
  let idx = 0;
  while (A[idx] < A[idx + 1]) idx++;
  return idx;
};

// test case
// [24,69,100,99,79,78,67,36,26,19]



// JavaScript 48ms
// https://leetcode.com/problems/peak-index-in-a-mountain-array/discuss/610561/JavaScript-48ms
var peakIndexInMountainArray = function(A) {
  let left = 0;
  let right = A.length-1;

  while(left<=right){
      let mid = Math.floor(left + ((right-left)>>2))
      if(A[mid] >A[mid-1] && A[mid]>A[mid+1] ){
          return mid;
      }else if(A[mid+1] > A[mid]){
          left = mid+1;
      }else {
          right = mid-1;
      }
  }
  return 0;
};


// JavaScript One-Line Solution with Reduce
// https://leetcode.com/problems/peak-index-in-a-mountain-array/discuss/513235/JavaScript-One-Line-Solution-with-Reduce
// This should be a better than the "index of spread max" one-line solution.
// Runtime: 52 ms, faster than 88.71% of JavaScript online submissions
// Memory Usage: 35 MB, less than 70.00% of JavaScript online submissions
const peakIndexInMountainArray = A => A.reduce((acc, curr, i) => (A[acc] < curr ? i : acc), 0);