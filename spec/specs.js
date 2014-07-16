
describe("countWord", function() {
  it("Returns the number of times a word appears in text", function() {
    countWord('hello world hello hello hello', 'hello').should.equal(4);
  });
})

describe("wordOrder", function() {
  it("Returns an array of words in text sorted alphabetically", function() {
    wordOrder("world hello").should.eql(['hello', 'world']);
  });
});