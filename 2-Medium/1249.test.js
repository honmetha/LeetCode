const minRemoveToMakeValid = require("./1249");

test("test all test cases", () => {
  expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
  expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
  expect(minRemoveToMakeValid("))((")).toBe("");
  expect(minRemoveToMakeValid("(a(b(c)d)")).toBe("a(b(c)d)");
});
