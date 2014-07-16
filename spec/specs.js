
describe("countWord", function() {
  it("Returns the number of times a word appears in text", function() {
    countWord('hello world hello hello hello', 'hello').should.equal(4);
  });
  it("Returns the number of times a word appears in text, case insensitive", function() {
    countWord('heLLo WORld Hello HELLO hello woRLD', 'world').should.equal(2);
  });
})

describe("wordOrder", function() {
  it("Returns an array of words in order of appearance", function() {
    wordOrder("hello world").should.eql(['hello', 'world']);
  });
  it("Returns an array of of words sorted in order of appearance, with no duplicates", function() {
    wordOrder('hello world hello world').should.eql(['hello', 'world']);;
  });
  it("Returns an array of words sorted by A) number of occurences in the given text (then) B) order of appearance", function() {
    wordOrder('hello world hello world yikes world').should.eql(['world', 'hello', 'yikes']);
  }); 
});