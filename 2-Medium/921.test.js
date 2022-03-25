const minAddToMakeValid = require("./921");

test("test all test cases", () => {
  expect(minAddToMakeValid("())")).toBe(1);
  expect(minAddToMakeValid("(((")).toBe(3);
  expect(minAddToMakeValid("()")).toBe(0);
  expect(minAddToMakeValid("()))((")).toBe(4);
});
