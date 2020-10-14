// 58. Length of Last Word

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return
// the length of last word (last word means the last appearing word if we loop from left to right) in the
// string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {number}

// Original
const lengthOfLastWord = s => /^[a-z]/i.test(s.replace(/ /g,"")) ? s.split(" ").filter(item => /^[a-z]/i.test(item)).pop().length : 0;

// Simple One-Liner
const lengthOfLastWord = s => s.trim().split(" ").pop().length;


// JavaScript Solution O(n) Left-to-Right
// https://leetcode.com/problems/length-of-last-word/discuss/509411/JavaScript-Solution-O(n)-Left-to-Right
const lengthOfLastWord = s => {
  let length = 0,
  max = 0;
  for (let i = 0; i < s.length; i++)
    if (s[i] !== " ") length++, (max = length);
    else length = 0;
  return max;
};

// Test cases
// ""
// " "
// "         "
// "  DADDY  "
// "YaKuZaaaaaA"
// "Hello World"
// " dfAASDASDASDB"
// "polite  sider  gold  "
// "If you dont like toenails you probably shouldnt look at your feet"
// "     AS  The tattered  work   gloves speak of the     many hours of hard labor  he endured   throughout his life        "
// "                                                                                                                        A                                                                                                                               B                                                                                                                                C                                                                                              D D  D   D    D     D      D      D         D                                                                                                                                  E                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Z                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "