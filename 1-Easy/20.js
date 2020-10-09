// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.


// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true


// Constraints:
// - 1 <= s.length <= 104
// - s consists of parentheses only '()[]{}'.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {boolean}

// Original
const isValid = s => {
  let obj = {"(": ")", "{": "}", "[": "]"}
  let arr = [];

  for (parenthesis of s) {
    if (obj[parenthesis]) {
      arr.push(parenthesis);
    } else {
      if (obj[arr[arr.length - 1]] !== parenthesis) return false;
      arr.pop();
    }
  }

  return arr.length === 0 ? true : false;
};

// Test cases
// "{[()]}"
// "[{]}"
// "{[(){}[]]}"
// "{[()()()]}"
// "{{}}()[]"
// "{{{[[[((()))]]]}}}"
// "{}{[][]{}}{()()())()}"
// "["
// "}"