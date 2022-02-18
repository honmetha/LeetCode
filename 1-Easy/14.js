// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// - 1 <= strs.length <= 200
// - 0 <= strs[i].length <= 200
// - strs[i] consists of only lower-case English letters.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string[]} strs
// @return {string}

// Original
const longestCommonPrefix = (strs) => {
  if (strs.length === 1) return strs[0];

  const firstWord = strs.shift();
  let output = "";

  for (let i = 0; i < firstWord.length; i++) {
    for (const word of strs) {
      if (firstWord[i] !== word[i]) return output;
    }
    output += firstWord[i];
  }

  return output;
};

// Faster
const longestCommonPrefix = (strs) => {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};

// Alternative
const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) return s.slice(0, i);
    }
  }
  return strs[0];
};

// Test cases
// [""]
// ["", ""]
// ["", "ab"]
// ["", "", ""]
// ["hello"]
// ["a", "ab", "bc"]
// ["cat", "bat", "hat"]
// ["flower", "flow", "flight"]
// ["dog", "racecar", "car"]
// ["antivirus", "antiviral", "anticipate", "antioxidant"]
// ["aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa"]
// ["aaaaaaaa", "aaaaaaa", "aaaaaa", "aaaaa"]
// ["aaa", "aaa", "aab", "aba"]
// ["aaa", "aaa", "aaa", ""]

module.exports = longestCommonPrefix;
