describe("wordOrder", function() {
  it("Returns each word in a block of text as an array of strings", function() {
    wordOrder("hello world").should.eql(['hello', 'world']);
  });
  it("Returns each word as an array of strings, with punctuation removed", function() {
    wordOrder("hello, world").should.eql(['hello', 'world']);
  });
 /* it("Returns each word as an array of strings, converting all to lower-case", function() {
    wordOrder("Hello, World!")
  }); */
});











