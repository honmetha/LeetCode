// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// - 1 <= s.length <= 1000
// - s consist of only digits and English letters.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} s
// @return {string}

const longestPalindrome = (s) => {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let lastIndex = s.length - 1;
    while (i <= lastIndex) {
      let start = i;
      let end = lastIndex;
      let isPalindrome = true;
      while (start < end) {
        if (s[start] !== s[end]) {
          isPalindrome = false;
          break;
        }
        start++;
        end--;
      }
      if (isPalindrome) {
        let palindromeString = s.substring(i, lastIndex + 1);
        if (longest.length < palindromeString.length)
          longest = palindromeString;
      }
      lastIndex--;
    }
  }
  return longest;
};

// Test cases
// "babad"
// "cbbd"
// "a"
// "ab"
// "aba"
// "ccc"
// "9119"
// "9bba9"
// "audie123"
// "abacca"
// "abaccaoiwieinjjni21"
// "12abbaxxilliyy"
// "abcdefedcba"
// "abcdggdbct"
// "bbbbbbb"
// "acacac"

module.exports = longestPalindrome;
