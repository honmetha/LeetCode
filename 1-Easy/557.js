// 557. Reverse Words in a String III

// Given a string, you need to reverse the order of characters in 
// each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Note: In the string, each word is separated by single space and there will not be any extra space in the string.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {string}

const reverseWords = s => s.split(' ').map(word => word.split('').reverse().join('')).join(' ');

// Alternative
const reverseWords = (s) => s.split('').reverse().join('').split(' ').reverse().join(' ');