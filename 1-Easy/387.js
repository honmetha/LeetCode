// 387. First Unique Character in a String

// Given a string, find the first non-repeating character in it and return its index.
// If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


// Note: You may assume the string contains only lowercase English letters.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {number}

const firstUniqChar = s => {
  let m = new Map();
  for (i = 0; i < s.length; i++) {
    if (!m.has(s[i])) m.set(s[i], i);
    else m.set(s[i], -1);
  }

  let indices = Array.from(m.values());
  for (index of indices) {
    if (index >= 0) return index;
  }

  return -1;
};