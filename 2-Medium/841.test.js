const canVisitAllRooms = require("./841");

test("test all test cases", () => {
  expect(canVisitAllRooms([[1], [2], [3], []])).toBeTruthy();
  expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBeFalsy();
  expect(canVisitAllRooms([[], [1]])).toBeFalsy();
  expect(canVisitAllRooms([[], [1], [2], [3]])).toBeFalsy();
  expect(canVisitAllRooms([[1, 2, 3, 4], [], [], [], []])).toBeTruthy();
  expect(
    canVisitAllRooms([[5], [2], [3], [4], [1, 2, 3, 4], [1]])
  ).toBeTruthy();
});
