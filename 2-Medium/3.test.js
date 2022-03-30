const lengthOfLongestSubstring = require("./3");

test("test length of longest substring", () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("ababab")).toBe(2);
  expect(lengthOfLongestSubstring("abcabccba")).toBe(3);
  expect(lengthOfLongestSubstring("cbaabc")).toBe(3);
  expect(lengthOfLongestSubstring("cbaabcd")).toBe(4);
  expect(lengthOfLongestSubstring("qwertyuiop")).toBe(10);
  expect(lengthOfLongestSubstring("qwertyq")).toBe(6);
  expect(lengthOfLongestSubstring("qwertyqwerty")).toBe(6);
  expect(lengthOfLongestSubstring("qwertyqasd")).toBe(9);
  expect(lengthOfLongestSubstring("aabbccaabcdaaccbb")).toBe(4);
});
