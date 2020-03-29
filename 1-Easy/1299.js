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

const replaceElements = function(arr) {

  let a = 0, b = null, output = arr;

  for (i = 0; i < arr.length; i++) {
    for (j = (i + 1); j < arr.length; j++) {
      if (output[i] < output[j] && output[j] > a) {
        a = output[j];
        b = j;
        // console.log(i, j, a, b,output);
      }
    }
    if (b !== null) {
      for (k = i; k < b; k++) {
        output[k] = a;
        // console.log(i, k, a, b, output);
      }
      output[b] = 0;
      console.log(output);
      i = i + (b - i - 1);
      a = 0;
      b = null;
      // console.log(i, a, b, output);
    }
  }
  output[output.length-1] = -1;
  return output;
};