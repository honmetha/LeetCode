// 345. Reverse Vowels of a String

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Input: "hello"
// Output: "holle"

// Example 2:
// Input: "leetcode"
// Output: "leotcede"

// Note:
// The vowels does not include the letter "y".


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {string} s
// @return {string}

const reverseVowels = s => {
  s = s.split("");

  for (i = 0, j = s.length - 1; i < j; i++, j--) {
    while (!/^[aeiou]/i.test(s[i]) && i < j) i++;
    while (!/^[aeiou]/i.test(s[j]) && j > i) j--;
    if (i < j) [s[i], s[j]] = [s[j], s[i]];
  }

  return s.join("");
};

// Test cases
// "halloween"
// "halloiween"
// ""
// " "
// "abc"
// "Micropalaeontology"