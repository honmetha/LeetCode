import frequencySort from "./451";

test("test sort characters by frequency", () => {
  expect(frequencySort("tree")).toBe("eetr");
  expect(frequencySort("cccaaa")).toBe("cccaaa");
  expect(frequencySort("Aabb")).toBe("bbAa");
});
