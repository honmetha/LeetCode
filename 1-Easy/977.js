// 977. Squares of a Sorted Array

// Given an array of integers A sorted in non-decreasing order, return an 
// array of the squares of each number, also in sorted non-decreasing order.


// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} A
// @return {number[]}

// Solution 1
const sortedSquares = A => A.map(num => num ** 2).sort((a, b) => a - b);

// Solution 2 (faster)
const sortedSquares = A => {
  let result = [];
  let zeroIndex = A.length - 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      zeroIndex = i;
      break;
    }
  }
  let i = zeroIndex - 1, j = zeroIndex;
  let x, y;
  while (i >= 0 || j <= A.length - 1) {
    x = i >= 0 ? Math.pow(A[i], 2) : undefined;
    y = j < A.length ? Math.pow(A[j], 2) : undefined;
    if ((!x)|| x > y) {
      result.push(y);
      j++;
    } else if (!y || y === x || y > x) {
      result.push(x);
      i--;
    }
  }
  return result;
};