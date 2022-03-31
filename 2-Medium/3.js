// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// - 0 <= s.length <= 5 * 104
// - s consists of English letters, digits, symbols and spaces.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} s
// @return {number}

// My attempt
const lengthOfLongestSubstring = (s) => {
  let count = 0;
  let substr = "";

  for (let char of s) {
    const charIndexInSubstr = substr.indexOf(char);

    if (charIndexInSubstr === -1) substr += char;
    else substr = substr.slice(charIndexInSubstr + 1) + char;

    if (substr.length > count) count = substr.length;
  }
  return count;
};

// Test cases
// ""
// "abcabcbb"
// "bbbbb"
// "pwwkew"
// "ababab"
// "abcabccba"
// "cbaabc"
// "cbaabcd"
// "qwertyuiop"
// "qwertyq"
// "qwertyqwerty"
// "qwertyqasd"

module.exports = lengthOfLongestSubstring;
