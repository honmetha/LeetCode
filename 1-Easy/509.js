// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.

// Given N, calculate F(N).


// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// Note:

// 0 ≤ N ≤ 30.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} N
// @return {number}

// Faster
const fib = N => {
  let arr = [0, 1];
  while (arr.length <= N) arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr[N];
};

// One-Liner
const fib = N => Math.round(Math.pow((Math.sqrt(5) + 1)/2, N) / Math.sqrt(5));