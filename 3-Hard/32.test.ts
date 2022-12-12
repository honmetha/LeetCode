import longestValidParentheses from "./32";

test("test longest valid parentheses", () => {
  expect(longestValidParentheses("(()")).toBe(2);
  expect(longestValidParentheses(")()())")).toBe(4);
  expect(longestValidParentheses("")).toBe(0);
});
