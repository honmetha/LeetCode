import searchMatrix from "./74";

test("test search matrix", () => {
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    )
  ).toBeTruthy();
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13
    )
  ).toBeFalsy();
});
