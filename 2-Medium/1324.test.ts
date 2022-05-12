import printVertically from "./1324";

test("test print words vertically", () => {
  expect(printVertically("HOW ARE YOU")).toEqual(["HAY", "ORO", "WEU"]);
  expect(printVertically("TO BE OR NOT TO BE")).toEqual([
    "TBONTB",
    "OEROOE",
    "   T",
  ]);
  expect(printVertically("CONTEST IS COMING")).toEqual([
    "CIC",
    "OSO",
    "N M",
    "T I",
    "E N",
    "S G",
    "T",
  ]);
  expect(printVertically("CONTEST")).toEqual([
    "C",
    "O",
    "N",
    "T",
    "E",
    "S",
    "T",
  ]);
});
