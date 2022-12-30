import fullJustify from "./68";

test("test text justification", () => {
  expect(
    fullJustify(
      ["This", "is", "an", "example", "of", "text", "justification."],
      16
    )
  ).toEqual(
    expect.arrayContaining([
      "This    is    an",
      "example  of text",
      "justification.  ",
    ])
  );
  expect(
    fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
  ).toEqual(
    expect.arrayContaining([
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ])
  );
  expect(
    fullJustify(
      [
        "Science",
        "is",
        "what",
        "we",
        "understand",
        "well",
        "enough",
        "to",
        "explain",
        "to",
        "a",
        "computer.",
        "Art",
        "is",
        "everything",
        "else",
        "we",
        "do",
      ],
      20
    )
  ).toEqual(
    expect.arrayContaining([
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do                  ",
    ])
  );
  expect(
    fullJustify(
      [
        "ask",
        "not",
        "what",
        "your",
        "country",
        "can",
        "do",
        "for",
        "you",
        "ask",
        "what",
        "you",
        "can",
        "do",
        "for",
        "your",
        "country",
      ],
      16
    )
  ).toEqual(
    expect.arrayContaining([
      "ask   not   what",
      "your country can",
      "do  for  you ask",
      "what  you can do",
      "for your country",
    ])
  );
});
