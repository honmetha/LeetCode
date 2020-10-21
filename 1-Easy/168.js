// 168. Excel Sheet Column Title

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:
//   1 -> A
//   2 -> B
//   3 -> C
//   ...
//   26 -> Z
//   27 -> AA
//   28 -> AB 
//   ...

// Example 1:
// Input: 1
// Output: "A"

// Example 2:
// Input: 28
// Output: "AB"

// Example 3:
// Input: 701
// Output: "ZY"


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {number} n
// @return {string}

// Original
const convertToTitle = (n) => {
  const valueToLetter = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    0: "Z",
  };

  let result = "";

  while (n > 0) {
    result = valueToLetter[n % 26] + result;
    if (n / 26 > 1) n = (n - (n % 26 || 26)) / 26;
    else n -= n % 26 || 26;
  }

  return result;
};


// Javascript : 100% faster, easy to understand code
// https://leetcode.com/problems/excel-sheet-column-title/discuss/354651/Javascript-%3A-100-faster-easy-to-understand-code
const convertToTitle = n => {
  if (n < 27) return String.fromCharCode(n + 64);
  let s = '';

  while (n > 0) {
    let temp = n % 26;
    temp = temp == 0 ? 26 : temp;
    s = String.fromCharCode(temp + 64) + s;
    n -= temp;
    n /= 26;
  }

  return s;
};


// Javascript Solution 99.5% faster
// Runtime: 40 ms, faster than 99.54% of JavaScript online submissions for Excel Sheet Column Title.
// Memory Usage: 33.8 MB, less than 75.00% of JavaScript online submissions for Excel Sheet Column Title.
// https://leetcode.com/problems/excel-sheet-column-title/discuss/453496/Javascript-Solution-99.5-faster
const convertToTitle = n => {
  const charMap = {
    0: "Z",
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y"
  };
  
  let title = "";
  
  if (n <= 26) return charMap[n % 26]
  
  while (n > 0) {
    let r = n % 26;
     
    n = Math.floor(n / 26);
    
    if (r == 0) {
      r = 0;
      n = n - 1;
    }
    title = charMap[r] + title;
  }
  
  return title;
};

// Test cases
// 0
// 5
// 26
// 28
// 52
// 100
// 267
// 701
// 1234
// 98768
// 5678788
// 1000000000
// 1198767876
// 1231111111

const testFunction = () => {
  for (i = 500000; i < 500100; i++) {
    convertToTitle(i);
  }
}