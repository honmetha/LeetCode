import checkInclusion from "./567";

test("test permutation in string", () => {
  expect(checkInclusion("ab", "eidbaooo")).toBeTruthy();
  expect(checkInclusion("ab", "eidboaoo")).toBeFalsy();
  expect(checkInclusion("adc", "dcda")).toBeTruthy();
  expect(checkInclusion("hello", "ooolleoooleh")).toBeFalsy();
  expect(checkInclusion("hello", "eoooleh")).toBeFalsy();
});
