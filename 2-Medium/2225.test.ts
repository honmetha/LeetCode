import findWinners from "./2225";

test("test find players with zero or one losses", () => {
  expect(
    findWinners([
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ])
  ).toEqual([
    [1, 2, 10],
    [4, 5, 7, 8],
  ]);
  expect(
    findWinners([
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ])
  ).toEqual([[1, 2, 5, 6], []]);
});
