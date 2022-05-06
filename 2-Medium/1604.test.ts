import alertNames from "./1604";

test("test alert using same key-card three or more times in a one hour period", () => {
  expect(
    alertNames(
      ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"],
      ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]
    )
  ).toEqual(expect.arrayContaining(["daniel"]));
  expect(
    alertNames(
      ["alice", "alice", "alice", "bob", "bob", "bob", "bob"],
      ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"]
    )
  ).toEqual(expect.arrayContaining(["bob"]));
  expect(
    alertNames(
      ["ken", "ryu", "ken", "ryu", "ken", "ryu", "ken"],
      ["00:00", "00:02", "01:20", "23:58", "23:45", "23:33", "00:40"]
    )
  ).toEqual(expect.arrayContaining([]));
});
