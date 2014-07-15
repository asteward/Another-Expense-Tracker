
describe("countWord", function() {
  it("Returns the number of times a word appears in text", function() {
    countWord('hello world hello hello hello', 'hello').should.equal(4);
  });
})
