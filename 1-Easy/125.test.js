const isPalindrome = require("./125");

test("test non-alphanumeric strings", () => {
  expect(isPalindrome("")).toBeTruthy();
  expect(isPalindrome("      ")).toBeTruthy();
  expect(isPalindrome("$$$)( :")).toBeTruthy();
});

test("test alphanumeric strings", () => {
  expect(isPalindrome("$)( :!5")).toBeTruthy();
  expect(isPalindrome("$$%X@#$)( :")).toBeTruthy();
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
  expect(isPalindrome("race a car")).toBeFalsy();
  expect(isPalindrome("tac a cat")).toBeTruthy();
  expect(isPalindrome("HeLLO WorlD")).toBeFalsy();
  expect(isPalindrome("hellojune")).toBeFalsy();
  expect(isPalindrome("nurses run")).toBeTruthy();
  expect(isPalindrome("334433")).toBeTruthy();
  expect(isPalindrome("12345654321")).toBeTruthy();
  expect(isPalindrome("asdf8fdsa")).toBeTruthy();
  expect(isPalindrome("ui23w23ert")).toBeFalsy();
  expect(isPalindrome(":::He-;LLO,@Mo+oN::")).toBeFalsy();
  expect(isPalindrome("+-a@,bc: @cb;a")).toBeTruthy();
  expect(isPalindrome("ab_a")).toBeTruthy();
});