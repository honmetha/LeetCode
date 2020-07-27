// 520. Detect Capital

// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// 1. All letters in this word are capitals, like "USA".
// 2. All letters in this word are not capitals, like "leetcode".
// 3. Only the first letter in this word is capital, like "Google".

// Otherwise, we define that this word doesn't use capitals in a right way.


// Example 1:

// Input: "USA"
// Output: True


// Example 2:

// Input: "FlaG"
// Output: False
 

// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} word
// @return {boolean}

const detectCapitalUse = word => {
  if (word === word.toUpperCase()) return true;
  if (word === word[0] + word.substr(1).toLowerCase()) return true;
  return false;
};

// One-Liner
const detectCapitalUse = word => word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase() ? true : false;

// Regex Solution
const detectCapitalUse = word => /^[^a-z]*$/.test(word) || /^[a-z]*$/.test(word) || /^[A-Z]{1}[a-z]*$/.test(word);

// Regex Solution
const detectCapitalUse = word => word.replace(/[a-z]/g,'') === '' || word.replace(/[A-Z]/g,'') === '' || word.replace(/^[A-Z][a-z]+/,'') === '';