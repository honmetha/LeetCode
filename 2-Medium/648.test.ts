import replaceWords from "./648";

test("test replace words", () => {
  expect(
    replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
  ).toBe("the cat was rat by the bat");
  expect(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")).toBe(
    "a a b c"
  );
  expect(
    replaceWords(
      ["cat", "bat", "rat", "ratt"],
      "the cattle was rattled by the battery"
    )
  ).toBe("the cat was rat by the bat");
});
