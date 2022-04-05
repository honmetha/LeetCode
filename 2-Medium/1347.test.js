const minSteps = require("./1347");

test("test minimum number of steps to make two strings anagram", () => {
  expect(minSteps("bab", "aba")).toBe(1);
  expect(minSteps("leetcode", "practice")).toBe(5);
  expect(minSteps("anagram", "mangaar")).toBe(0);
  expect(minSteps("qwertyuiop", "asdfghjklz")).toBe(10);
  expect(minSteps("aaaaa", "aaaaa")).toBe(0);
  expect(minSteps("aaaaa", "ababa")).toBe(2);
  expect(minSteps("aaaaa", "bbbbb")).toBe(5);
  expect(minSteps("ababa", "babab")).toBe(1);
  expect(minSteps("dog", "cat")).toBe(3);
  expect(minSteps("rabbit", "rappid")).toBe(3);
  expect(minSteps("create", "etaerc")).toBe(0);
  expect(minSteps("beeeet", "ebetee")).toBe(0);
  expect(minSteps("abcda", "adsfg")).toBe(3);
  expect(minSteps("abcde", "asdaf")).toBe(3);
});
