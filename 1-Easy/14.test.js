const longestCommonPrefix = require("./14");

test("test longest common prefix", () => {
  expect(longestCommonPrefix([""])).toBe("");
  expect(longestCommonPrefix(["", ""])).toBe("");
  expect(longestCommonPrefix(["", "ab"])).toBe("");
  expect(longestCommonPrefix(["", "", ""])).toBe("");
  expect(longestCommonPrefix(["hello"])).toBe("hello");
  expect(longestCommonPrefix(["a", "ab", "bc"])).toBe("");
  expect(longestCommonPrefix(["cat", "bat", "hat"])).toBe("");
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(
    longestCommonPrefix(["antivirus", "antiviral", "anticipate", "antioxidant"])
  ).toBe("anti");
  expect(longestCommonPrefix(["aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa"])).toBe(
    "aaaaa"
  );
  expect(longestCommonPrefix(["aaa", "aaa", "aab", "aba"])).toBe("a");
  expect(longestCommonPrefix(["aaa", "aaa", "aaa", ""])).toBe("");
});
