// 242. Valid Anagram

// Given two strings s and t, write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string} s
// @param {string} t
// @return {boolean}

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const counts = {};
  for (let letter of s) {
    counts[letter] = (counts[letter] || 0) + 1;
  }

  for (let letter of t) {
    if (!counts[letter]) return false;
    counts[letter]--;
  }

  return true;
};

// One-Liner
const isAnagram = (s, t) =>
  s.split("").sort().join("") === t.split("").sort().join("");

// Faster
const isAnagram = (s, t) => {
  if (s.length != t.length) {
    return false;
  }

  const h = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    h[s.charCodeAt(i) - 97]++;
    h[t.charCodeAt(i) - 97]--;
  }
  return h.every((n) => n === 0);
};

// Test cases
// "", ""
// "  ", " "
// " ", " "
// "anagram", "nagaram"
// "rat", "car"
// "hello", "hell"
// "pot", "top"
// "hippopotamus", "hippopotamus"
// "hipopotamus", "hippopotamus"
// "uncopyrightable", "ablecopyrightun"
// "uncopyrightable", "uncopyright"
// "aaaaaaaaa", "aaaaaaaaaa"
// "aaaaaaaaaa", "aaaabaaaaa"
// "aaaaaaaaaa", "aaaaaaaaaa"
// "௸߶©", "௸߶©"
// "୰൏༓༴", "୰༓༴"
// "୰൏༓༴", "༴൏༓୰"

module.exports = isAnagram;
