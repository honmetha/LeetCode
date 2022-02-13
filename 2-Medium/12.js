// 12. Integer to Roman

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written
// as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for
// four is not IIII. Instead, the number four is written as IV. Because the one is before the five
// we subtract it making four. The same principle applies to the number nine, which is written as
// IX. There are six instances where subtraction is used:

// - I can be placed before V (5) and X (10) to make 4 and 9.
// - X can be placed before L (50) and C (100) to make 40 and 90.
// - C can be placed before D (500) and M (1000) to make 400 and 900.

// Given an integer, convert it to a roman numeral.

// Example 1:
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// - 1 <= num <= 3999

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {number} num
// @return {string}

// Original
const intToRoman = (num) => {
  const romanNums = ["I", "V", "X", "L", "C", "D", "M"];
  const numArr = num.toString().split("").reverse();

  for (let i = 0, j = 0; i < numArr.length; i++, j += 2) {
    const currentNum = Number(numArr[i]);
    if (currentNum === 0) numArr[i] = "";
    else {
      if (currentNum < 5) {
        if (currentNum === 4) numArr[i] = romanNums[j] + romanNums[j + 1];
        else numArr[i] = romanNums[j].repeat(numArr[i]);
      } else {
        if (currentNum === 5) numArr[i] = romanNums[j + 1];
        else if (currentNum === 9) numArr[i] = romanNums[j] + romanNums[j + 2];
        else numArr[i] = romanNums[j + 1] + romanNums[j].repeat(numArr[i] - 5);
      }
    }
  }

  return numArr.reverse().join("");
};

// Alternative
const intToRoman = (num) => {
  const symbolToValue = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let finalStr = "";
  for (s in symbolToValue) {
    const v = symbolToValue[s];
    while (num >= v) {
      num -= v;
      finalStr += s;
    }
  }
  return finalStr;
};

// Test cases
// 1
// 3
// 7
// 9
// 58
// 70
// 100
// 110
// 111
// 456
// 499
// 500
// 501
// 567
// 999
// 1000
// 1008
// 1009
// 1010
// 1994
// 2000
// 2490
// 2500
// 2597
// 3989
// 3990
// 3991
// 3992
// 3993
// 3994
// 3995
// 3996
// 3997
// 3998
// 3999

module.exports = intToRoman;
