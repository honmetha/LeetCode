// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:
// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/***********************************************************************
 *  Solution
 **********************************************************************/

const setZeroes = (matrix: number[][]): void => {
  const column = new Set<number>();

  for (let i = 0; i < matrix.length; i++) {
    let hasZero = false;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hasZero = true;
        column.add(j);
      }
    }
    if (hasZero) matrix[i] = Array(matrix[i].length).fill(0);
  }

  for (let row of matrix) {
    for (let index of Array.from(column.values())) {
      row[index] = 0;
    }
  }
};

// Test cases
// [[1,1,1],[1,0,1],[1,1,1]]
// [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

export default setZeroes;
