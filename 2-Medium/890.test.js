const findAndReplacePattern = require("./890");

test("test find duplicates", () => {
  expect(
    findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
  ).toEqual(expect.arrayContaining(["mee", "aqq"]));
  expect(findAndReplacePattern(["a", "b", "c"], "a")).toEqual(
    expect.arrayContaining(["a", "b", "c"])
  );
  expect(
    findAndReplacePattern(
      ["jj", "kk", "bb", "io", "pa", "bv", "qz", "hh"],
      "bb"
    )
  ).toEqual(expect.arrayContaining(["jj", "kk", "bb", "hh"]));
  expect(
    findAndReplacePattern(
      ["jj", "kk", "bb", "io", "pa", "bv", "qz", "hh"],
      "op"
    )
  ).toEqual(expect.arrayContaining(["io", "pa", "bv", "qz"]));
  expect(findAndReplacePattern(["one"], "two")).toEqual(
    expect.arrayContaining(["one"])
  );
  expect(
    findAndReplacePattern(["abc", "ggg", "mee", "aqq", "zzz", "pap"], "kkk")
  ).toEqual(expect.arrayContaining(["ggg", "zzz"]));
  expect(
    findAndReplacePattern(
      ["mnbm", "kajk", "kkkk", "akak", "pokp", "poop", "popp"],
      "pqkp"
    )
  ).toEqual(expect.arrayContaining(["mnbm", "kajk", "pokp"]));
  expect(
    findAndReplacePattern(
      ["qwert", "fjfjf", "popap", "akvkv", "ooooo", "paozp"],
      "kakak"
    )
  ).toEqual(expect.arrayContaining(["fjfjf"]));
  expect(
    findAndReplacePattern(
      ["qwqwqws", "oioioip", "popopop", "nvghnvt", "lkkllki", "asadadg"],
      "rtrtrty"
    )
  ).toEqual(expect.arrayContaining(["qwqwqws", "oioioip"]));
  expect(
    findAndReplacePattern(
      ["qwerewq", "zxcvbnm", "asdfghj", "plokijh", "plokpli", "ppppppp"],
      "mnkhjgo"
    )
  ).toEqual(expect.arrayContaining(["zxcvbnm", "asdfghj", "plokijh"]));
});
