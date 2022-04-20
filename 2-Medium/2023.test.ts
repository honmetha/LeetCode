import numOfPairs from "./2023";

test("test number of pairs", () => {
  expect(numOfPairs(["777", "7", "77", "77"], "7777")).toBe(4);
  expect(numOfPairs(["123", "4", "12", "34"], "1234")).toBe(2);
  expect(numOfPairs(["1", "1", "1"], "11")).toBe(6);
  expect(numOfPairs(["9", "8", "7"], "20")).toBe(0);
});
