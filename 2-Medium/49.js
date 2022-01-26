// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// - 1 <= strs.length <= 104
// - 0 <= strs[i].length <= 100
// - strs[i] consists of lower-case English letters.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string[]} strs
// @return {string[][]}

// Original
const groupAnagrams = (strs) => {
  const anagramGroups = {};
  for (let word of strs) {
    const sortedWord = word.split("").sort().join("");
    if (anagramGroups[sortedWord]) anagramGroups[sortedWord].push(word);
    else anagramGroups[sortedWord] = [word];
  }
  return Object.values(anagramGroups);
};

// Faster
const groupAnagrams = (strs) => {
  const map = {};
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];
  strs.forEach((str) => {
    let prod = str
      .split("")
      .reduce((acc, letter) => acc * primes[letter.charCodeAt() - 97], 1);
    map[prod] ? map[prod].push(str) : (map[prod] = [str]);
  });
  return Object.values(map);
};

// Test cases
// ["a"]
// [""]
// ["",""]
// ["","","","hello","ehllo"]
// ["a","c","d","a","cd","c","ad","ac","b",""]
// ["eat","tea","tan","ate","nat","bat"]
// ["anagram","nagaram","cat","tac","act","hack","rack","back","slack"]
// ["uncopyrightable", "ablecopyrightun","able","copyable","uncopyableright","a","b","copy"]
// ["aaaaaa","aaaaa","aaaa","aaa","aa","aaaaa"]

module.exports = groupAnagrams;
