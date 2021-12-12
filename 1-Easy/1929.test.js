const getConcatenation = require("./1929");

test("test all test cases", () => {
  expect(getConcatenation([1])).toEqual([1, 1]);
  expect(getConcatenation([998])).toEqual([998, 998]);
  expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  expect(getConcatenation([123, 999, 23, 1, 55, 82, 90, 12, 37])).toEqual([
    123, 999, 23, 1, 55, 82, 90, 12, 37, 123, 999, 23, 1, 55, 82, 90, 12, 37,
  ]);
});
