// 125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

// Constraints:
// - s consists only of printable ASCII characters.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} s
// @return {boolean}

// Original
const isPalindrome = (s) => {
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const length = s.length;

  if (length % 2 === 0)
    return (
      s.slice(0, length / 2) ===
      s
        .slice(length / 2, length)
        .split("")
        .reverse()
        .join("")
    );
  else
    return (
      s.slice(0, Math.floor(length / 2)) ===
      s
        .slice(Math.ceil(length / 2), length)
        .split("")
        .reverse()
        .join("")
    );
};

// Original 2
const isPalindrome = (s) => {
  s = s
    .replace(/[^0-9a-z]/gi, "")
    .toLowerCase()
    .split("");

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }

  return true;
};

// Alternative
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};

// Alternative
const isPalindrome = (s) => {
  // turn string to lowercase and use regex to remove non-alphanumeric
  s = s.toLowerCase();
  s = s.replace(/[^A-Za-z0-9]/g, "");

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};

// Test cases
// ""
// "      "
// "$$$)( :"
// "$)( :!5"
// "$$%X@#$)( :"
// "A man, a plan, a canal: Panama"
// "race a car"
// "tac a cat"
// "HeLLO WorlD"
// "hellojune"
// "nurses run"
// "334433"
// "12345654321"
// "asdf8fdsa"
// "ui23w23ert"
// ":::He-;LLO,@Mo+oN::"
// "+-a@,bc: @cb;a"
// "ab_a"

module.exports = isPalindrome;
