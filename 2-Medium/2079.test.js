const wateringPlants = require("./2079");

test("test watering plants", () => {
  expect(wateringPlants([5], 5)).toBe(1);
  expect(wateringPlants([5], 10)).toBe(1);
  expect(wateringPlants([1, 2, 3, 4], 4)).toBe(14);
  expect(wateringPlants([2, 2, 3, 3], 10)).toBe(4);
  expect(wateringPlants([2, 2, 3, 3], 5)).toBe(14);
  expect(wateringPlants([1, 1, 1, 4, 2, 3], 4)).toBe(30);
  expect(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)).toBe(49);
  expect(wateringPlants([7, 7, 7, 7, 7, 7, 7], 100)).toBe(7);
  expect(wateringPlants([11, 13, 9, 7, 5, 4, 3, 1], 14)).toBe(30);
  expect(wateringPlants([11, 13, 9, 7, 5, 3, 3, 3], 20)).toBe(22);
  expect(wateringPlants([11, 13, 11, 13, 11, 13, 11, 13, 2], 15)).toBe(65);
});
