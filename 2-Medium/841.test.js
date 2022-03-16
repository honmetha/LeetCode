const canVisitAllRooms = require("./841");

test("test all test cases", () => {
  expect(canVisitAllRooms([[1], [2], [3], []])).toBeTruthy();
  expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBeFalsy();
});
