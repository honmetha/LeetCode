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

// My attempt
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

// Alternative
const longestPalindrome = (s) => {
  let ll = 0,
    rr = 0;

  for (let i = 0; i < s.length; i++)
    for (let j of [i, i + 1])
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];

  return s.substring(ll, rr + 1);
};

// Alternative
const longestPalindrome = (s) => {
  let maxSub = "";

  const bubbleFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const sub1 = bubbleFromCenter(i, i);
    const sub2 = bubbleFromCenter(i, i + 1);
    const sub = sub1.length > sub2.length ? sub1 : sub2;
    if (sub.length > maxSub.length) {
      maxSub = sub;
    }
  }
  return maxSub;
};

// Alternative
const longestPalindrome = (s) => {
  for (let j = s.length - 1; j >= 0; j--) {
    let i = 0,
      k = j;
    while (k < s.length) {
      let substr = s.substring(i, k + 1);
      if (isPalindrome(substr)) return substr;
      i++, k++;
    }
  }
  return "";
};

const isPalindrome = (str) => {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++, r--;
  }
  return true;
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
