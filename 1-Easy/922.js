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
  let odd = [], even = [], output = [];
  for (item of A) {
    if (item % 2 !== 0) {
      odd.push(item);
    } else {
      even.push(item);
    }
  }
  for (i = 0; i < even.length; i++) {
    output.push(even[i]);
    output.push(odd[i]);
  }
  return output;
};



// Javascript, beats 97% Time, beats 87% Space
// https://leetcode.com/problems/sort-array-by-parity-ii/discuss/328767/Javascript-beats-97-Time-beats-87-Space
var sortArrayByParityII = function(A) {
  for(var i=0; i<A.length-1; i++){
      if(i %2 ==0 && A[i]%2 !=0){
          var k=i;
          while(A[k]%2 !=0){
              k++;
          }
          var tem=A[i];
          A[i]=A[k];
          A[k]=tem;
      }else if(i%2 !=0 && A[i]%2 ==0){
          var s=i;
          while(A[s]%2 ==0){
              s++;
          }
          var tem=A[i];
          A[i]=A[s];
          A[s]=tem;
      }
  }
  return A;
};



// JavaScript Solution, 88 ms
// Runtime: 88 ms, faster than 94.53% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 54.55% of JavaScript online submissions
// https://leetcode.com/problems/sort-array-by-parity-ii/discuss/508832/JavaScript-Solution-88-ms
const sortArrayByParityII = a => {
  let [e, o] = [0, 1];
  while (e < a.length && o < a.length) {
    if (1 === a[e] % 2 && 0 === a[o] % 2) {
      [a[e], a[o]] = [a[o], a[e]];
      [e, o] = [e + 2, o + 2];
    } else {
      if (0 === a[e] % 2) e += 2;
      if (1 === a[o] % 2) o += 2;
    }
  }
  return a;
};



// [JavaScript] One loop solution
// https://leetcode.com/problems/sort-array-by-parity-ii/discuss/397526/JavaScript-One-loop-solution
const sortArrayByParityII = arr => {
  let res = []
  let evenIndex = 0
  let oddIndex = 1
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          res[evenIndex] = arr[i]
          evenIndex = evenIndex + 2
      } else {
          res[oddIndex] = arr[i]
          oddIndex = oddIndex + 2
      }
  }
  return res
}