// 1299. Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element 
// among the elements to its right, and replace the last element with -1.

// After doing so, return the array.


// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
 

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[]} arr
// @return {number[]}

const replaceElements = arr => {
  let a = 0, b = null, output = arr;
  for (i = 0; i < arr.length; i++) {
    for (j = (i + 1); j < arr.length; j++) {
      if (output[i] < output[j] && output[j] > a) {
        a = output[j];
        b = j;
      }
    }
    if (b !== null) {
      for (k = i; k < b; k++) {
        output[k] = a;
      }
      output[b] = 0;
      console.log(output);
      i = i + (b - i - 1);
      a = 0;
      b = null;
    }
  }
  output[output.length-1] = -1;
  return output;
};



// JS faster than 99% less than 100%
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/discuss/571234/JS-faster-than-99-less-than-100
const replaceElements = arr => {
  let greatest = arr[arr.length - 1]
  let temp;
  for (let i = arr.length - 2; i >= 0; i--){
    temp = arr[i]
    arr[i] = greatest;  
    if (temp > greatest){
      greatest = temp
    }
  }
  arr[arr.length - 1] = -1
  return arr
};



// Easy Javascript: Time O(N) Space O(1)
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/discuss/463649/Easy-Javascript%3A-Time-O(N)-Space-O(1)
const replaceElements = arr => {
  let prev = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    arr[i] = prev;
    prev = Math.max(prev, cur);
  }
  return arr;
};