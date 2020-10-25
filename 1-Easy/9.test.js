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
test("test 0 and positive numbers to be palindrome", () => {
  expect(isPalindrome(0)).toBeTruthy();
  expect(isPalindrome(5)).toBeTruthy();
  expect(isPalindrome(15)).toBeFalsy();
  expect(isPalindrome(77)).toBeTruthy();
  expect(isPalindrome(838)).toBeTruthy();
  expect(isPalindrome(9876)).toBeFalsy();
  expect(isPalindrome(12021)).toBeTruthy();
  expect(isPalindrome(48789)).toBeFalsy();
  expect(isPalindrome(456654)).toBeTruthy();
  expect(isPalindrome(8888888)).toBeTruthy();
  expect(isPalindrome(1892371)).toBeFalsy();
  expect(isPalindrome(97979797)).toBeFalsy();
  expect(isPalindrome(33344333)).toBeTruthy();
  expect(isPalindrome(555555555)).toBeTruthy();
  expect(isPalindrome(894949389)).toBeFalsy();
  expect(isPalindrome(1234554321)).toBeTruthy();
  expect(isPalindrome(1234564321)).toBeFalsy();
  expect(isPalindrome(2147483647)).toBeFalsy();
});