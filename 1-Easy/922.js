// 922. Sort Array By Parity II

// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.


// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 

// Note:

// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} A
// @return {number[]}

const sortArrayByParityII = A => {
  let even = 0, odd = 1, output = [];
  for (item of A) {
    if (item % 2 === 0) {
      output[even] = item;
      even += 2
    } else {
      output[odd] = item;
      odd += 2
    }
  }
  return output;
};



// Javascript, beats 97% Time, beats 87% Space
// https://leetcode.com/problems/sort-array-by-parity-ii/discuss/328767/Javascript-beats-97-Time-beats-87-Space
const sortArrayByParityII = A => {
  debugger;
  for(let i = 0; i < A.length - 1; i++){
    if(i % 2 === 0 && A[i] % 2 !== 0){
      let k = i;
      while (A[k] % 2 !== 0) {
        k++;
      }
      let tem = A[i];
      A[i] = A[k];
      A[k] = tem;
    } else if (i % 2 !== 0 && A[i] % 2 === 0) {
      let s = i;
      while (A[s] % 2 === 0) {
        s++;
      }
      let tem = A[i];
      A[i] = A[s];
      A[s] = tem;
    }
  }
  return A;
};