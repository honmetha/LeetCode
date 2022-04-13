// 890. Find and Replace Pattern

// Given a list of strings words and a string pattern, return a list of words[i] that match
// pattern. You may return the answer in any order.

// A word matches the pattern if there exists a permutation of letters p so that after replacing every
// letter x in the pattern with p(x), we get the desired word.

// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to
// another letter, and no two letters map to the same letter.

// Example 1:
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a
// permutation, since a and b map to the same letter.

// Example 2:
// Input: words = ["a","b","c"], pattern = "a"
// Output: ["a","b","c"]

// Constraints:
// 1 <= pattern.length <= 20
// 1 <= words.length <= 50
// words[i].length == pattern.length
// pattern and words[i] are lowercase English letters.

/***********************************************************************
 *  Solution
 **********************************************************************/

// @param {string[]} words
// @param {string} pattern
// @return {string[]}

const findAndReplacePattern = (words, pattern) => {
  let map = {};
  let pat = "";
  let output = [];

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (map[char] === undefined) {
      map[char] = i;
      pat += i;
    } else {
      pat += map[char];
    }
  }

  for (let word of words) {
    let wordMap = {};
    let wordPat = "";
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (wordMap[char] === undefined) {
        wordMap[char] = i;
        wordPat += i;
      } else {
        wordPat += wordMap[char];
      }
    }
    if (pat === wordPat) output.push(word);
  }

  return output;
};

// Test cases
// ["abc","deq","mee","aqq","dkd","ccc"], "abb"
// ["a","b","c"], "a"
// ["jj","kk","bb","io","pa","bv","qz","hh"], "bb"
// ["jj","kk","bb","io","pa","bv","qz","hh"], "op"
// ["one"], "two"
// ["abc","ggg","mee","aqq","zzz","pap"], "kkk"
// ["mnbm","kajk","kkkk","akak","pokp","poop", "popp"], "pqkp"
// ["qwert","fjfjf","popap","akvkv","ooooo","paozp"], "kakak"
// ["qwqwqws", "oioioip", "popopop", "nvghnvt", "lkkllki", "asadadg"], "rtrtrty"
// ["qwerewq", "zxcvbnm", "asdfghj", "plokijh", "plokpli", "ppppppp"], "mnkhjgo"

module.exports = findAndReplacePattern;
