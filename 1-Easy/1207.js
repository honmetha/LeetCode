// 1207. Unique Number of Occurrences

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.


// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:

// Input: arr = [1,2]
// Output: false

// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} arr
// @return {boolean}

const uniqueOccurrences = function(arr) {
  let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
  let newArr2 = [];
  for (digit of newArr) {
    let counter = 0;
    for (number of arr) {
      if (digit === number) {
        counter++
      }
    }
    newArr2.push(counter);
  }
  return newArr2.length === new Set(newArr2).size;
};