import suggestedProducts from "./1268";

test("test search suggestions system", () => {
  expect(
    suggestedProducts(
      ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
      "mouse"
    )
  ).toEqual([
    ["mobile", "moneypot", "monitor"],
    ["mobile", "moneypot", "monitor"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
  ]);
  expect(suggestedProducts(["havana"], "havana")).toEqual([
    ["havana"],
    ["havana"],
    ["havana"],
    ["havana"],
    ["havana"],
    ["havana"],
  ]);
  expect(
    suggestedProducts(["bags", "baggage", "banner", "box", "cloths"], "bags")
  ).toEqual([
    ["baggage", "bags", "banner"],
    ["baggage", "bags", "banner"],
    ["baggage", "bags"],
    ["bags"],
  ]);
});
