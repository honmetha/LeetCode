// 921. Minimum Add to Make Parentheses Valid

// A parentheses string is valid if and only if:
// - It is the empty string,
// - It can be written as AB (A concatenated with B), where A and B are valid strings, or
// - It can be written as (A), where A is a valid string.

// You are given a parentheses string s. In one move, you can insert a parenthesis at any position
// of the string.
// - For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a
// closing parenthesis to be "())))".

// Return the minimum number of moves required to make s valid.

// Example 1:
// Input: s = "())"
// Output: 1

// Example 2:
// Input: s = "((("
// Output: 3

// Constraints:
// - 1 <= s.length <= 1000
// - s[i] is either '(' or ')'.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} S
// @return {number}

// My attempt
const minAddToMakeValid = (S) => {
  let openBracketCount = 0;
  let closeBracketCount = 0;

  for (i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      openBracketCount++;
    } else if (S[i] === ")" && !openBracketCount) {
      closeBracketCount++;
    } else {
      openBracketCount--;
    }
  }

  return openBracketCount + closeBracketCount;
};

// Alternative
const minAddToMakeValid = (S) => {
  let open = 0,
    close = 0;

  for (let c of S) {
    if (c === "(") open++;
    else if (!open) close++;
    else open--;
  }
  return open + close;
};

// Alternative
const minAddToMakeValid = (S) => {
  let ans = 0,
    bal = 0;
  for (let i = 0; i < S.length; i++) {
    bal += S[i] == "(" ? 1 : -1;
    if (bal == -1) {
      ans++;
      bal++;
    }
  }
  return ans + bal;
};

// Alternative
const minAddToMakeValid = (S) => {
  const stack = [];
  for (let s of S) {
    if (s === ")" && stack[stack.length - 1] === "(") stack.pop();
    else stack.push(s);
  }
  return stack.length;
};

// Test cases
// "())"
// "((("
// "()"
// "()))(("
// "))))()()(((("
// "))()))(("
// "))((()(("
// "(()()())"

module.exports = minAddToMakeValid;
