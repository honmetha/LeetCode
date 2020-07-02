// 1329. Sort the Matrix Diagonally

// Given a m * n matrix mat of integers, sort it diagonally in ascending order 
// from the top-left to the bottom-right then return the sorted array.


// Example 1:

// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]


// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// 1 <= mat[i][j] <= 100


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number[][]} mat
// @return {number[][]}

const diagonalSort = (mat) => {
  let arr = [];
  console.log(mat);
  
  for (i = (mat[0].length -1); i > -Math.abs(mat.length); i--) {
    let k = 0 + i;

    for (j = 0; j < mat.length; j++) {
      mat[j][k] !== undefined ? arr.push(mat[j][k]) : null;
      k++;
    }

    arr.sort(function(a, b){return a-b});
    let m = 0 + i;

    for (l = 0; l < mat.length; l++) {
      mat[l][m] !== undefined ? mat[l][m] = (arr.shift()) : null;
      m++;
    }

  }
  return mat;
};