const maxCoins = require("./1561");

test("test max coins", () => {
  expect(maxCoins([1, 1, 2])).toBe(1);
  expect(maxCoins([2, 2, 2])).toBe(2);
  expect(maxCoins([1, 2, 3])).toBe(2);
  expect(maxCoins([1, 1, 1, 1, 1, 1, 2, 3, 1])).toBe(4);
  expect(maxCoins([2, 4, 1, 2, 7, 8])).toBe(9);
  expect(maxCoins([2, 4, 5])).toBe(4);
  expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])).toBe(18);
  expect(maxCoins([123, 111, 110, 50, 69, 71, 80, 97, 34])).toBe(279);
  expect(maxCoins([10, 9, 9, 1, 1, 7, 3, 10, 1])).toBe(22);
  expect(maxCoins([10, 9, 9, 8, 8, 7, 6, 6, 6])).toBe(24);
});
