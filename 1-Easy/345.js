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

// Original
const reverseVowels = s => {
  s = s.split("");

  for (i = 0, j = s.length - 1; i < j; i++, j--) {
    while (!/^[aeiou]/i.test(s[i]) && i < j) i++;
    while (!/^[aeiou]/i.test(s[j]) && j > i) j--;
    if (i < j) [s[i], s[j]] = [s[j], s[i]];
  }

  return s.join("");
};

// Less memory
const reverseVowels = s => {
  if (s === null || s.length === 0) return s;

  let chars = s.split('');
  let low = 0;
  let high = s.length - 1;
  let vowels = "aeiouAEIOU";
  let tmp;

  while (low < high) {
    while (low < high && vowels.indexOf(chars[low]) === -1) low++;
    while (low < high && vowels.indexOf(chars[high]) === -1) high--;
      
    tmp = chars[high];
    chars[high] = chars[low];
    chars[low] = tmp;
    low++;
    high--;
  }
  
  return chars.join('');
};

// Test cases
// "halloween"
// "halloiween"
// ""
// " "
// "abc"
// "Micropalaeontology"