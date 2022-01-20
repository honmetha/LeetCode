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

// Original
const isAnagram = (s, t) => {
  const sLetters = {};

  for (let letter of s) {
    if (sLetters[letter]) sLetters[letter]++;
    else sLetters[letter] = 1;
  }

  for (let letter of t) {
    if (sLetters[letter] > 1) sLetters[letter]--;
    else if (sLetters[letter] === 1) delete sLetters[letter];
    else return false;
  }

  for (let key in sLetters) return false;

  return true;
};

// Original One-Liner
const isAnagram = (s, t) =>
  s.split("").sort().join("") === t.split("").sort().join("");

// Alternative
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

// Alternative
const isAnagram = (s, t) => {
  if (t.length !== s.length) return false;

  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }

  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }

  return true;
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
