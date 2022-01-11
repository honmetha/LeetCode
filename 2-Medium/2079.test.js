const wateringPlants = require("./2079");

test("test watering plants", () => {
  expect(wateringPlants([2, 2, 3, 3], 5)).toBe(14);
  expect(wateringPlants([1, 1, 1, 4, 2, 3], 4)).toBe(30);
  expect(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)).toBe(49);
});
