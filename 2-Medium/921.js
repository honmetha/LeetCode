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

// My attempt + community
const minAddToMakeValid = (S) => {
  let open = 0;
  let close = 0;

  for (let s of S) {
    if (s === "(") open++;
    else if (!open) close++;
    else open--;
  }
  return open + close;
};

// Alternative 1
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

// Alternative 2
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
