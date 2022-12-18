import trap from "./42";

test("test water trap", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  expect(trap([9, 2, 7, 3, 2, 6])).toBe(12);
  expect(trap([0, 0, 0, 1, 6, 7, 8, 3, 2, 0])).toBe(0);
  expect(trap([0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(0);
  expect(trap([7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7])).toBe(49);
  expect(trap([4, 2, 4, 2, 4, 1, 4, 1, 4, 0, 4])).toBe(14);
  expect(trap([0, 0, 0, 0, 0])).toBe(0);
  expect(trap([1, 1])).toBe(0);
  expect(trap([0])).toBe(0);
  expect(trap([2])).toBe(0);
});
