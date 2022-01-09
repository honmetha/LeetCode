const firstPalindrome = require("./2108");

test("test first palindrome", () => {
  expect(firstPalindrome(["a"])).toBe("a");
  expect(firstPalindrome(["a", "b", "c"])).toBe("a");
  expect(firstPalindrome(["cat", "bat", "rat"])).toBe("");
  expect(firstPalindrome(["gag", "pap", "sat"])).toBe("gag");
  expect(firstPalindrome(["bat", "cat", "dog", "nan"])).toBe("nan");
  expect(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])).toBe("ada");
  expect(firstPalindrome(["notapalindrome", "racecar"])).toBe("racecar");
  expect(firstPalindrome(["def", "ghi"])).toBe("");
  expect(firstPalindrome(["redivider", "cap", "refer"])).toBe("redivider");
  expect(firstPalindrome(["a", "radar", "b"])).toBe("a");
});
