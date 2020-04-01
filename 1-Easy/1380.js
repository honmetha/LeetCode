// 1380. Lucky Numbers in a Matrix

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.


// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]


// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 10^5.
// All elements in the matrix are distinct.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {number[][]} matrix
// @return {number[]}

const luckyNumbers  = (matrix) => {
  let allMax = 0, luckyArray = 0, luckyNumber = 0;

  for (i = 0; i < matrix.length; i++) {
    let sort = matrix[i].sort(function(a, b){return a-b});
    let max = sort[matrix[i].length - 1];
    if (allMax < max) {
      allMax = max;
      luckyArray = i;
      luckyNumber = sort[0]
    }
  }

  let output = [luckyNumber];
  for (k = 0; k < matrix.length; k++) {
    if (k !== luckyArray) {
      if (matrix[k][matrix[k].length - 1] > output[0]) {
        output = [];
        break;
      }
    }
  }
  
  return output;
};