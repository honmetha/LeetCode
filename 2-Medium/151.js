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

const reverseWords = s => s.trim().replace(/  +/g, ' ').split(" ").reverse().join(" ");



// JavaScript one liner | Beats 94%
// https://leetcode.com/problems/reverse-words-in-a-string/discuss/622328/JavaScript-one-liner-or-Beats-94
var reverseWords = function(s) {
  return s.replace(/ +(?= )/g,'').trim().split(" ").reverse().join(" ");
};



// Javascript solution 99% faster
// https://leetcode.com/problems/reverse-words-in-a-string/discuss/579495/Javascript-solution-99-faster
var reverseWords = function(s) {
  var x = s.trim().split(" "), y =[]
  for(i=0;i<x.length;i++){
      if(x[i] !=="") y.push(x[i])
  }
 return y.reverse().join(" ");
};