// 32. Longest Valid Parentheses

// Given a string containing just the characters '(' and ')', return the length of the longest
// valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

/***********************************************************************
 *  Solution
 **********************************************************************/

// My attempt
const longestValidParentheses = (s: string): number => {
  let validations: boolean[] = Array.from({length: s.length});
  let opens: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      opens.push(i);
    } else {
      if (opens.length > 0) {
        const openIndex = opens.pop();
        validations[openIndex] = true;
        validations[i] = true;
      } else {
        validations[i] = false;
      }
    }
  }

  for (let i = 0; i < opens.length; i++) {
    const falseIndex = opens[i];
    validations[falseIndex] = false;
  }

  let max: number = 0;
  let count: number = 0;
  for (let i = 0; i < validations.length; i++) {
    if (validations[i]) {
      count++;
      if (count > max) max = count;
    } else {
      count = 0;
    }
  }

  return max;
};

// Test cases
// "(()"
// ")()())"
// ""
// ")()()()("
// ")(()()()((("
// "()))(()())("
// "()()()"
// ")()()()"
// "()()())"
// "((()()))))()"

export default longestValidParentheses;
