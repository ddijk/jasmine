function add(a,b) {
   return a+b;
}

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("Verify add", function() {
    expect(add(2,4)).toBe(6);
  });
});
