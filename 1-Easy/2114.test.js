const mostWordsFound = require("./2114");

test("test most words found", () => {
  expect(mostWordsFound(["alice"])).toBe(1);
  expect(mostWordsFound(["a", "abc", "ab a c"])).toBe(3);
  expect(mostWordsFound(["alice", "hello alice", "good morning alice"])).toBe(
    3
  );
  expect(mostWordsFound(["good morning alice", "hello alice", "alice"])).toBe(
    3
  );
  expect(
    mostWordsFound([
      "alice and bob love leetcode",
      "i think so too",
      "this is great thanks very much",
    ])
  ).toBe(6);
  expect(
    mostWordsFound(["please wait", "continue to fight", "continue to win"])
  ).toBe(3);
  expect(
    mostWordsFound([
      "incomprehensibility",
      "my very photogenic mother died in a freak accident",
    ])
  ).toBe(9);
  expect(
    mostWordsFound([
      "antidisestablishmentarianism antidisestablishmentarianism",
      "rat cat dog",
      "bat mat hat vat",
    ])
  ).toBe(4);
});
