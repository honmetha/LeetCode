import findMedianSortedArrays from "./4";

test("test median of two sorted arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});
