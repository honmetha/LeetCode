const isPalindrome = require("./9");

// Negative numbers
test("test negative numbers to be all false", () => {
  expect(isPalindrome(-2147483648)).toBeFalsy();
  expect(isPalindrome(-1500000000)).toBeFalsy();
  expect(isPalindrome(-999999999)).toBeFalsy();
  expect(isPalindrome(-20455402)).toBeFalsy();
  expect(isPalindrome(-1234321)).toBeFalsy();
  expect(isPalindrome(-112211)).toBeFalsy();
  expect(isPalindrome(-22022)).toBeFalsy();
  expect(isPalindrome(-5000)).toBeFalsy();
  expect(isPalindrome(-333)).toBeFalsy();
  expect(isPalindrome(-22)).toBeFalsy();
  expect(isPalindrome(-5)).toBeFalsy();
});

// 0 & Positive numbers
