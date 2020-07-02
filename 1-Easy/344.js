// 344. Reverse String

// Write a function that reverses a string. The input string is given as 
// an array of characters char[].

// Do not allocate extra space for another array, you must do this by 
// modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.


// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


/***********************************************************************
 *  Solution
 **********************************************************************/


// @param {character[]} s
// @return {void} Do not return anything, modify s in-place instead.

// One-Liner
const reverseString = s => s.reverse();

// Alternative (for)
const reverseString = s => {
  let x = Math.floor(s.length / 2)
  for (i = 0; i < x; i++) {
    let y = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = y;
  }
  return s;
};

// Alternative (for/shorter)
const reverseString = s => {
  let x = Math.floor(s.length / 2)
  for (i = 0; i < x; i++) [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  return s;
};

// Alternative (while)
const reverseString = s => {
  let start = 0, end = s.length - 1;
  while (start <= end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};