// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1,
// or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/***********************************************************************
 *  Solution
 **********************************************************************/

const checkInclusion = (s1: string, s2: string): boolean => {
  let charMap: { [key: string]: number } = {};
  let count: number = 0;

  for (let char of s1) {
    if (!charMap[char]) charMap[char] = 1;
    else charMap[char]++;
  }

  let charMapClone: { [key: string]: number } = { ...charMap };

  for (let i = 0; i < s2.length; i++) {
    for (let j = i; j < s2.length; j++) {
      if (!charMapClone[s2[j]]) {
        break;
      } else {
        charMapClone[s2[j]]--;
        count++;
      }
      if (count === s1.length) return true;
    }
    count = 0;
    charMapClone = { ...charMap };
  }
  return false;
};

// Test cases
// "ab", "eidbaooo"
// "ab", "eidboaoo"
// "adc", "dcda"
// "hello", "ooolleoooleh"
// "hello", "eoooleh"

export default checkInclusion;
