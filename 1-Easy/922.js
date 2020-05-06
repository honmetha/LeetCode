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
  for(let i = 0; i < A.length - 1; i++){
    if(i % 2 === 0 && A[i] % 2 !== 0){
      let x = i;
      while (A[x] % 2 !== 0) {
        x++;
      }
      let temporary = A[i];
      A[i] = A[x];
      A[x] = temporary;
    } else if (i % 2 !== 0 && A[i] % 2 === 0) {
      let y = i;
      while (A[y] % 2 === 0) {
        y++;
      }
      let temporary = A[i];
      A[i] = A[y];
      A[y] = temporary;
    }
  }
  return A;
};