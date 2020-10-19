// 171. Excel Sheet Column Number

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:
//   A -> 1
//   B -> 2
//   C -> 3
//   ...
//   Z -> 26
//   AA -> 27
//   AB -> 28 
//   ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701


// Constraints:
// - 1 <= s.length <= 7
// - s consists only of uppercase English letters.
// - s is between "A" and "FXSHRXW".


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {number}

// Original
const titleToNumber = (s) => {
  const letters = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let result = 0;
  let numberToPower = 0;

  for (i = s.length - 1; i >= 0; i--) {
    result += letters[s[i]] * 26 ** numberToPower;
    numberToPower++;
  };

  return result;
};

// Alternative
const titleToNumber = s => {
  const charCodeBase = 'A'.charCodeAt(0) - 1;
  const n = s.length;
  let number = 0;

  for (let i = 0; i < n; i++) number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);
  
  return number;
};

// Alternative 2
const titleToNumber = s => {
  let columnNumber = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[(s.length - 1) - i];
    columnNumber += Math.pow(26, i) * (char.charCodeAt(0) - 64);
  } 
  
  return columnNumber;
};

// Test cases
// "F"
// "AB"
// "ZY"
// "DDD"
// "UYRG"
// "XEXQX"
// "RTYUBN"
// "ABSFDSF"
// "FXSHRXW"