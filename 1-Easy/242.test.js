const isAnagram = require("./242");

test("test empty strings and spaces", () => {
  expect(isAnagram("", "")).toBeTruthy();
  expect(isAnagram("  ", " ")).toBeFalsy();
  expect(isAnagram(" ", " ")).toBeTruthy();
});

test("test strings", () => {
  expect(isAnagram("anagram", "nagaram")).toBeTruthy();
  expect(isAnagram("rat", "car")).toBeFalsy();
  expect(isAnagram("hello", "hell")).toBeFalsy();
  expect(isAnagram("pot", "top")).toBeTruthy();
  expect(isAnagram("hippopotamus", "hippopotamus")).toBeTruthy();
  expect(isAnagram("hipopotamus", "hippopotamus")).toBeFalsy();
  expect(isAnagram("uncopyrightable", "ablecopyrightun")).toBeTruthy();
  expect(isAnagram("uncopyrightable", "uncopyright")).toBeFalsy();
  expect(isAnagram("aaaaaaaaa", "aaaaaaaaaa")).toBeFalsy();
  expect(isAnagram("aaaaaaaaaa", "aaaabaaaaa")).toBeFalsy();
  expect(isAnagram("aaaaaaaaaa", "aaaaaaaaaa")).toBeTruthy();
});

test("test unicode characters", () => {
  expect(isAnagram("௸߶©", "௸߶©")).toBeTruthy();
  expect(isAnagram("୰൏༓༴", "୰༓༴")).toBeFalsy();
});