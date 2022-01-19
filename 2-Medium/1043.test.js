const maxSumAfterPartitioning = require("./1043");

test("test max sum after partitioning", () => {
  expect(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)).toBe(84);
  expect(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)).toBe(
    83
  );
  expect(maxSumAfterPartitioning([1], 1)).toBe(1);
});
