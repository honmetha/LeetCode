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

const convertToTitle = n => {
  const valueToLetter = {1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H", 9:"I", 10:"J", 11:"K", 12:"L", 13:"M", 14:"N", 15:"O", 16:"P", 17:"Q", 18:"R", 19:"S", 20:"T", 21:"U", 22:"V", 23:"W", 24:"X", 25:"Y", 0:"Z"};
  let result = "";

  while (n > 0) {
    result = valueToLetter[n % 26] + result;
    if (n / 26 > 1) n = (n - (n % 26 || 26)) / 26;
    else n -= (n % 26 || 26);
  }

  return result;
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