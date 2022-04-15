import removeOccurrences from "./1910";

test("test remove occurrences", () => {
  expect(removeOccurrences("daabcbaabcbc", "abc")).toBe("dab");
  expect(removeOccurrences("axxxxyyyyb", "xy")).toBe("ab");
  expect(removeOccurrences("a", "a")).toBe("");
  expect(removeOccurrences("abbaabbabb", "bb")).toBe("aaaa");
  expect(removeOccurrences("bbbbbbb", "bb")).toBe("b");
  expect(removeOccurrences("bbabbbabb", "bb")).toBe("aba");
  expect(removeOccurrences("abcbcaacbabcaabccc", "abc")).toBe("bcaacbacc");
  expect(removeOccurrences("abckabcbcabc", "abc")).toBe("kbc");
  expect(removeOccurrences("kkkjjjkkklll", "kk")).toBe("kjjjklll");
  expect(removeOccurrences("kkkjjjkkklll", "j")).toBe("kkkkkklll");
  expect(removeOccurrences("dcoadotdtodododogo", "do")).toBe("dcoatdtogo");
});
