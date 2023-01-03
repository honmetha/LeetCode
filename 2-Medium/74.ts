// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
// This matrix has the following properties:

// - Integers in each row are sorted from left to right.
// - The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/***********************************************************************
 *  Solution
 **********************************************************************/

const searchMatrix = (matrix: number[][], target: number): boolean => {
  let targetArr: number;

  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0]) {
      targetArr = i;
    } else {
      break;
    }
  }

  if (targetArr !== undefined) {
    for (const num of matrix[targetArr]) {
      if (target === num) return true;
    }
  }

  return false;
};

// Test cases
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13

export default searchMatrix;
