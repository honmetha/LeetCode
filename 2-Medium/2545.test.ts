import sortTheStudents from "./2545";

test("test sort the students by their kth score", () => {
  expect(
    sortTheStudents(
      [
        [10, 6, 9, 1],
        [7, 5, 11, 2],
        [4, 8, 3, 15],
      ],
      2
    )
  ).toEqual([
    [7, 5, 11, 2],
    [10, 6, 9, 1],
    [4, 8, 3, 15],
  ]);
  expect(
    sortTheStudents(
      [
        [3, 4],
        [5, 6],
      ],
      0
    )
  ).toEqual([
    [5, 6],
    [3, 4],
  ]);
  expect(
    sortTheStudents(
      [
        [15, 3, 12, 4, 14],
        [13, 7, 8, 1, 5],
        [11, 2, 6, 10, 9],
      ],
      4
    )
  ).toEqual([
    [15, 3, 12, 4, 14],
    [11, 2, 6, 10, 9],
    [13, 7, 8, 1, 5],
  ]);
  expect(
    sortTheStudents(
      [
        [3, 4, 1],
        [5, 6, 8],
        [2, 7, 9],
      ],
      1
    )
  ).toEqual([
    [2, 7, 9],
    [5, 6, 8],
    [3, 4, 1],
  ]);
  expect(
    sortTheStudents(
      [
        [2, 7, 9],
        [5, 6, 8],
        [3, 4, 1],
      ],
      1
    )
  ).toEqual([
    [2, 7, 9],
    [5, 6, 8],
    [3, 4, 1],
  ]);
});
