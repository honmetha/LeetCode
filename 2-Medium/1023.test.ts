import camelMatch from "./1023";

test("test camelcase matching", () => {
  expect(
    camelMatch(
      ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
      "FB"
    )
  ).toEqual([true, false, true, true, false]);
  expect(
    camelMatch(
      ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
      "FoBa"
    )
  ).toEqual([true, false, true, false, false]);
  expect(
    camelMatch(
      ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
      "FoBaT"
    )
  ).toEqual([false, true, false, false, false]);
  expect(
    camelMatch(
      ["CompetitiveProgramming", "CounterPick", "ControlPanel"],
      "CooP"
    )
  ).toEqual([false, false, true]);
  expect(
    camelMatch(
      [
        "CompetitiveProgramming",
        "CounterPicka",
        "ControlPanel",
        "CocoPicker",
        "CocoPiano",
        "CompanyPark",
        "CocoPickerKing",
      ],
      "CooPa"
    )
  ).toEqual([false, false, true, false, true, false, false]);
  expect(
    camelMatch(
      [
        "mifeqvzphnrv",
        "mieqxvrvhnrv",
        "mhieqovhnryv",
        "mieqekvhnrpv",
        "miueqrvfhnrv",
        "mieqpvhzntrv",
        "gmimeqvphnrv",
        "mieqvhqyunrv",
      ],
      "mieqvhnrv"
    )
  ).toEqual([true, true, true, true, true, true, true, true]);
});
