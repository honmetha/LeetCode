const findDuplicates = require("./442");

test("test find duplicates", () => {
  expect(
    findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  ).toEqual(expect.arrayContaining([9, 8, 7, 6, 5, 4, 3, 2, 1]));
  expect(
    findDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 3, 2, 1])
  ).toEqual(expect.arrayContaining([8, 7, 6, 5, 3, 2, 1]));
  expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual(
    expect.arrayContaining([2, 3])
  );
  expect(findDuplicates([1, 1, 2])).toEqual(expect.arrayContaining([1]));
  expect(findDuplicates([1])).toEqual(expect.arrayContaining([]));
});
