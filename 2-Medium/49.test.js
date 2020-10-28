const groupAnagrams = require("./49");

test("test groupAnagrams", () => {
  expect(groupAnagrams(["a"])).toEqual([["a"]]);
  expect(groupAnagrams([""])).toEqual([[""]]);
  expect(groupAnagrams(["", ""])).toEqual([["", ""]]);
  expect(groupAnagrams(["", "", "", "hello", "ehllo"])).toEqual([
    ["", "", ""],
    ["hello", "ehllo"],
  ]);
  expect(
    groupAnagrams(["a", "c", "d", "a", "cd", "c", "ad", "ac", "b", ""])
  ).toEqual([
    ["a", "a"],
    ["c", "c"],
    ["d"],
    ["cd"],
    ["ad"],
    ["ac"],
    ["b"],
    [""],
  ]);
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
  expect(
    groupAnagrams([
      "anagram",
      "nagaram",
      "cat",
      "tac",
      "act",
      "hack",
      "rack",
      "back",
      "slack",
    ])
  ).toEqual([
    ["anagram", "nagaram"],
    ["cat", "tac", "act"],
    ["hack"],
    ["rack"],
    ["back"],
    ["slack"],
  ]);
  expect(
    groupAnagrams([
      "uncopyrightable",
      "ablecopyrightun",
      "able",
      "copyable",
      "uncopyableright",
      "a",
      "b",
      "copy",
    ])
  ).toEqual([
    ["uncopyrightable", "ablecopyrightun", "uncopyableright"],
    ["able"],
    ["copyable"],
    ["a"],
    ["b"],
    ["copy"],
  ]);
  expect(
    groupAnagrams(["aaaaaa", "aaaaa", "aaaa", "aaa", "aa", "aaaaa"])
  ).toEqual([["aaaaaa"], ["aaaaa", "aaaaa"], ["aaaa"], ["aaa"], ["aa"]]);
});
