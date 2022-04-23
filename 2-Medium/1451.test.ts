import arrangeWords from "./1451";

test("test arrange words", () => {
  expect(arrangeWords("Leetcode is cool")).toBe("Is cool leetcode");
  expect(arrangeWords("Keep calm and code on")).toBe("On and keep calm code");
  expect(arrangeWords("To be or not to be")).toBe("To be or to be not");
});
