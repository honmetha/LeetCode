// 1347. Minimum Number of Steps to Make Two Strings Anagram

// You are given two strings of the same length s and t. In one step you can choose any
// character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different
// (or the same) ordering.

// Example 1:
// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

// Example 2:
// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

// Example 3:
// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams.

// Constraints:
// 1 <= s.length <= 5 * 104
// s.length == t.length
// s and t consist of lowercase English letters only.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} s
// @param {string} t
// @return {number}

// My attempt
const minSteps = (s, t) => {
  let newS = s;
  for (let char of t) newS = newS.replace(char, "");
  return newS.length;
};

// Test cases
// "bab", "aba"
// "leetcode", "practice"
// "anagram", "mangaar"
// "qwertyuiop", "asdfghjklz"
// "aaaaa", "aaaaa"
// "aaaaa", "ababa"
// "aaaaa", "bbbbb"
// "ababa", "babab"
// "dog", "cat"
// "rabbit", "rappid"
// "create", "etaerc"
// "beeeet", "ebetee"
// "abcda", "adsfg"
// "abcde", "asdaf"

module.exports = minSteps;
