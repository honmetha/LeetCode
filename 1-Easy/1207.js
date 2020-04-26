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

const uniqueOccurrences = (arr) => {
  const obj = {};
  for (num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return Object.keys(obj).length === new Set(Object.values(obj)).size;
};



const uniqueOccurrences = (arr) => {
  let map = {}, occurrences = {};
  
  // First step: 
  // Loop and find each occurrences and store them against their values.
  for (let i = 0; i < arr.length; ++ i) {
      if (map[arr[i]] === undefined) {
          map[arr[i]] = 0;
      }
      ++ map[arr[i]];
  }
  
  // Second step: 
  // Loop the stored map and store the occurrences in another map,
  // While storing check if any value is repeated, if repeated return `false`
  // Else `return true`
  for (let num in map) {
      if (map.hasOwnProperty(num)) {
          if (occurrences[map[num]] !== undefined) {
              return false;
          }
          occurrences[map[num]] = true;
      }
  }
  return true;
};