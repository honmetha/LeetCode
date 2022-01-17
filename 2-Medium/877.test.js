const stoneGame = require("./877");

test("test all test cases", () => {
  expect(stoneGame([5, 3, 4, 10, 6, 9, 20, 8])).toBeTruthy();
  expect(stoneGame([30, 3, 20, 8])).toBeTruthy();
  expect(stoneGame([5, 3, 4, 5])).toBeTruthy();
  expect(stoneGame([3, 7, 2, 3])).toBeTruthy();
  expect(stoneGame([3, 7, 5, 4])).toBeTruthy();
  expect(stoneGame([3, 7, 8, 2, 1, 7, 5, 4])).toBeTruthy();
  expect(stoneGame([1, 4, 10, 8, 3, 2, 4, 1])).toBeTruthy();
});
