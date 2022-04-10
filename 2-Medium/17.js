// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that
// the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does
// not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:
// - 0 <= digits.length <= 4
// - digits[i] is a digit in the range ['2', '9'].

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} digits
// @return {string[]}

const letterCombinations = (digits) => {
  const telephoneButtons = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let combinations = [];
  let indexToLoop = digits
    .split("")
    .map((digit) => telephoneButtons[digit].length - 1);
  let index = indexToLoop.length - 1;

  while (indexToLoop.length && indexToLoop[0] > -1) {
    let combination = "";
    for (let i = 0; i < indexToLoop.length; i++) {
      combination += telephoneButtons[digits[i]][indexToLoop[i]];
    }
    combinations.push(combination);

    indexToLoop[index]--;
    while (indexToLoop[index] < 0) {
      index--;
      indexToLoop[index]--;
      if (indexToLoop[index] > -1) {
        for (let i = index + 1; i < indexToLoop.length; i++) {
          indexToLoop[i] = telephoneButtons[digits[i]].length - 1;
        }
        index = indexToLoop.length - 1;
      }
    }
  }
  return combinations;
};

// Test cases
// ""
// "2"
// "23"
// "69"
// "88"
// "246"
// "472"
// "789"
// "939"
// "2568"

module.exports = letterCombinations;
