import subdomainVisits from "./811";

test("test find duplicates", () => {
  expect(subdomainVisits(["9001 discuss.leetcode.com"])).toEqual(
    expect.arrayContaining([
      "9001 leetcode.com",
      "9001 discuss.leetcode.com",
      "9001 com",
    ])
  );
  expect(
    subdomainVisits([
      "900 google.mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 wiki.org",
    ])
  ).toEqual(
    expect.arrayContaining([
      "901 mail.com",
      "50 yahoo.com",
      "900 google.mail.com",
      "5 wiki.org",
      "5 org",
      "1 intel.mail.com",
      "951 com",
    ])
  );
});
