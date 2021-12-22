const buildArray = require("./1920");

test("test all test cases", () => {
  expect(buildArray([0])).toEqual([0]);
  expect(buildArray([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3]);
  expect(buildArray([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3]);
});
