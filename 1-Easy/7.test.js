const reverse = require("./7");

test("test negative integers", () => {
  expect(reverse(-2147483647)).toBe(0);
  expect(reverse(-514748364)).toBe(-463847415);
  expect(reverse(-714748364)).toBe(-463847417);
  expect(reverse(-28379229)).toBe(-92297382);
  expect(reverse(-98799877)).toBe(-77899789);
  expect(reverse(-5649873)).toBe(-3789465);
  expect(reverse(-834598)).toBe(-895438);
  expect(reverse(-11231)).toBe(-13211);
  expect(reverse(-9823)).toBe(-3289);
  expect(reverse(-1200)).toBe(-21);
  expect(reverse(-123)).toBe(-321);
  expect(reverse(-58)).toBe(-85);
  expect(reverse(-5)).toBe(-5);
});

test("test 0 and positive integers", () => {
  expect(reverse(0)).toBe(0);
  expect(reverse(6)).toBe(6);
  expect(reverse(38)).toBe(83);
  expect(reverse(120)).toBe(21);
  expect(reverse(123)).toBe(321);
  expect(reverse(894)).toBe(498);
  expect(reverse(7692)).toBe(2967);
  expect(reverse(6774)).toBe(4776);
  expect(reverse(10329)).toBe(92301);
  expect(reverse(84874)).toBe(47848);
  expect(reverse(547858)).toBe(858745);
  expect(reverse(2030182)).toBe(2810302);
  expect(reverse(92381280)).toBe(8218329);
  expect(reverse(12345213)).toBe(31254321);
  expect(reverse(747564748)).toBe(847465747);
  expect(reverse(998877665)).toBe(566778899);
  expect(reverse(1142233447)).toBe(0);
  expect(reverse(2147483647)).toBe(0);
});
