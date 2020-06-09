// 151. Reverse Words in a String

// Given an input string, reverse the string word by word.

// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"

// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


// Note:

// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.


/***********************************************************************
 *  Answer
 **********************************************************************/


// @param {string} s
// @return {string}

const reverseWords = s => s.trimStart().trimEnd().replace(/  +/g, ' ').split(" ").reverse().join(" ");



// Javascript This is why Javascript kicks 'ash.  Understandable 1-liner. speed>75% & space>100%
// https://leetcode.com/problems/reverse-words-in-a-string/discuss/632250/Javascript-This-is-why-Javascript-kicks-'ash.-Understandable-1-liner.-speedgreater75-and-spacegreater100
var reverseWords = function(s) {
  return s.trim().replace(/\s+/g, " ").split(' ').reverse().join(' ');
 }



// JavaScript one liner | Beats 94%
// https://leetcode.com/problems/reverse-words-in-a-string/discuss/622328/JavaScript-one-liner-or-Beats-94
var reverseWords = function(s) {
  return s.replace(/ +(?= )/g,'').trim().split(" ").reverse().join(" ");
};