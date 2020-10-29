const reverseParentheses = require('./1190');

test("test all test cases", () => {
  expect(reverseParentheses("")).toBe("");
  expect(reverseParentheses("()")).toBe("");
  expect(reverseParentheses("()(((((((((((())))))))))))")).toBe("");
  expect(reverseParentheses("t(b)((((((dfd(((((()))))yelp))))a))help)")).toBe("tbplehadfdpley");
  expect(reverseParentheses("halloween")).toBe("halloween");
  expect(reverseParentheses("h(()((abdsdsbs)))pp")).toBe("hsbsdsdbapp");
  expect(reverseParentheses("(abcd)")).toBe("dcba");
  expect(reverseParentheses("(u(love)i)")).toBe("iloveu");
  expect(reverseParentheses("(ed(et(oc))el)")).toBe("leetcode");
  expect(reverseParentheses("a(bcdefghijkl(mno)p)q")).toBe("apmnolkjihgfedcbq");
  expect(reverseParentheses("a(bc(def)gh(i)jkl(mno)p)q")).toBe("apmnolkjihgdefcbq");
  expect(reverseParentheses("z(as()adw)h(f)(woei(wof)i)(jh(eow)f)")).toBe("zwdasahfiwofieowfeowhj");
  expect(reverseParentheses("((wersdfw)asdfwe(a)d()(()((((a))))(abc)as())(fd)()()a()wer)")).toBe("rewafdacbaasdaewfdsawersdfw");
});