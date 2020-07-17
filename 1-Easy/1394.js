// 1394. Find Lucky Integer in an Array

// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky integers
// return the largest of them. If there is no lucky integer return -1.


// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Example 2:
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Example 3:
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.

// Example 4:
// Input: arr = [5]
// Output: -1

// Example 5:
// Input: arr = [7,7,7,7,7,7,7]
// Output: 7


// Constraints:
// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[]} arr
// @return {number}

const findLucky = arr => {
  let LuckyInt = 0, count = 0, i = arr.length - 1
  arr = arr.sort((a, b) => a - b);

  while (i >= 0) {
    if (LuckyInt !== arr[i]) [LuckyInt, count] = [arr[i], arr[i]];
    if (LuckyInt === arr[i]) count--;
    if (count === 0 && arr[i -1] !== LuckyInt) return LuckyInt;
    i--;
  }

  return -1;
};


// Javascript solution 95.47% time and 100% memory efficient
// https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/622194/Javascript-solution-95.47-time-and-100-memory-efficient
var findLucky = function(arr) {
  let myMap= new Map()
  let max = 0;
  
  //create a map to store frequency counts
  for(let i of arr){
      if(myMap.has(i)){
          myMap.set(i, myMap.get(i)+1);
      }else{
          myMap.set(i,1);
      }
  }
  
  //loop through map to find lucky numbers and modify the max value
  for(let [index, value] of myMap){
      if(index == value){
          max = Math.max(max,value)
      }
  }
  
  return max > 0 ? max : -1;
};


// JavaScript, hash map
// https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/554920/JavaScript-hash-map
var findLucky = function(arr) {
  const map = new Map();
  for (x of arr) {
      map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }
  return Math.max(...arr.filter(e => map.get(e) === e), -1);
};


// [JavaScript] O(n) time & O(1) space
// https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/555950/JavaScript-O(n)-time-and-O(1)-space
function findLucky(arr) {
  const offset = arr.length + 1;
  for (const num of arr) {
    const n = num % offset;
    if (n > arr.length) {
      continue;
    }
    arr[n - 1] += offset;
  }
  for (let n = arr.length; n >= 1; n--) {
    const count = (arr[n - 1] / offset) | 0;
    if (count === n) {
      return n;
    }
  }
  return -1;
}


// two kinds of javascript solution which beat 98%
// https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/623214/two-kinds-of-javascript-solution-which-beat-98
// Runtime: 52 ms, faster than 95.47% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions for Find Lucky Integer in an Array.
var findLucky = function(arr) {
  const map = arr.reduce((map,e) => {
      if (map[e]) {
          map[e]++
      } else {
          map[e] = 1
      }
      return map
  }, {})
  let res = -1
  for (let key in map) {
      if (map[key] == key) {
          res = key
      }
  }
  return res
};