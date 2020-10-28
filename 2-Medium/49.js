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

const groupAnagrams = strs => {
  const anagramGroups = {};
  const sortWord = word => word.split("").sort().join("");

  for (let word of strs) {
    if (anagramGroups[sortWord(word)]) anagramGroups[sortWord(word)].push(word);
    else anagramGroups[sortWord(word)] = [word];
  }

  return Object.values(anagramGroups);
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