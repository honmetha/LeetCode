// 389. Find the Difference

// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:
// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {string} s
// @param {string} t
// @return {character}

// Faster
const findTheDifference = (s, t) => {
  for (item of s) t = t.replace(item, "");
  return t;
};

const findTheDifference = (s, t) => {
  let newS = s.split('').sort();
  let newT = t.split('').sort();
  let i = 0;

  while (i < t.length) {
    if (newT[i] === newS[i]) {
      i++
    } else {
      return newT[i]
    }
  }
};

// Test cases
// "hello", "olhlel"
// "yolo", "oylyo"
// "leetcode", "ecodetelz"