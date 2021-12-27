const maximumWealth = require("./1672");

test("test maximum wealth", () => {
  expect(maximumWealth([[1]])).toBe(1);
  expect(
    maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ])
  ).toBe(6);
  expect(
    maximumWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ])
  ).toBe(10);
  expect(
    maximumWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ])
  ).toBe(17);
  expect(
    maximumWealth([
      [13, 11, 12, 15, 2],
      [9, 4, 3, 6, 89],
      [51, 1, 1, 9, 5],
    ])
  ).toBe(111);
});
