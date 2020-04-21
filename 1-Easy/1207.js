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
  let filteredArr = arr.filter((item, i) => arr.indexOf(item) === i);
  let newArr2 = [];
  for (digit of filteredArr) {
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



// Just map each number to the number of its occurences, and put the values in a set. 
// If two numbers have the same # of occurences, then the size would decrease since set's contain only unique values.
const uniqueOccurrences = arr => {
  const mapOccurrences = {};
  for(let num of arr){
      mapOccurrences[num] = (mapOccurrences[num] || 0) + 1;
      console.log("mapOccurrences[num] =", mapOccurrences[num]);
      console.log("mapOccurrences[num] || 0 =", mapOccurrences[num] || 0);
  }
  console.log(mapOccurrences);
  return Object.keys(mapOccurrences).length === new Set(Object.values(mapOccurrences)).size
};



var uniqueOccurrences = function(arr) {
  var map = {}, occurrences = {};
  
  // First step: 
  // Loop and find each occurrences and store them against their values.
  for (var i = 0; i < arr.length; ++ i) {
      if (map[arr[i]] === undefined) {
          map[arr[i]] = 0;
      }
      ++ map[arr[i]];
  }
  
  // Second step: 
  // Loop the stored map and store the occurrences in another map,
  // While storing check if any value is repeated, if repeated return `false`
  // Else `return true`
  for (var num in map) {
      if (map.hasOwnProperty(num)) {
          if (occurrences[map[num]] !== undefined) {
              return false;
          }
          occurrences[map[num]] = true;
      }
  }
  return true;
};