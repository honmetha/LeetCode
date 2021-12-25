const buildArray = require("./1920");

test("test all test cases", () => {
  expect(buildArray([0])).toEqual([0]);
  expect(buildArray([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3]);
  expect(buildArray([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3]);
  expect(buildArray([9, 5, 10, 11, 0, 6, 1, 2, 7, 3, 4, 8])).toEqual([
    3, 6, 4, 8, 9, 1, 5, 10, 2, 11, 0, 7,
  ]);
});
