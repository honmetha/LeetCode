const longestPalindrome = require("./5");

test("test longest palindrome", () => {
  expect(longestPalindrome("babad")).toMatch(/(bab|aba)/i);
  expect(longestPalindrome("cbbd")).toBe("bb");
  expect(longestPalindrome("a")).toBe("a");
  expect(longestPalindrome("ab")).toMatch(/(a|b)/i);
  expect(longestPalindrome("aba")).toBe("aba");
  expect(longestPalindrome("ccc")).toBe("ccc");
  expect(longestPalindrome("9119")).toBe("9119");
  expect(longestPalindrome("9bba9")).toBe("bb");
  expect(longestPalindrome("audie123")).toMatch(/(a|u|d|i|e|1|2|3)/i);
  expect(longestPalindrome("abacca")).toBe("acca");
  expect(longestPalindrome("abaccaoiwieinjjni21")).toBe("injjni");
  expect(longestPalindrome("12abbaxxilliyy")).toMatch(/(abba|illi)/i);
  expect(longestPalindrome("abcdefedcba")).toBe("abcdefedcba");
  expect(longestPalindrome("abcdggdbct")).toBe("dggd");
  expect(longestPalindrome("bbbbbbb")).toBe("bbbbbbb");
  expect(longestPalindrome("acacac")).toMatch(/(acaca|cacac)/i);
});
