import wordPattern from "./290";

test("test word pattern", () => {
  expect(wordPattern("abba", "dog cat cat dog")).toBeTruthy();
  expect(wordPattern("abba", "dog cat cat fish")).toBeFalsy();
  expect(wordPattern("aaaa", "dog cat cat dog")).toBeFalsy();
});
