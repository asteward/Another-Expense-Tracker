
describe("Purchase.getPrice", function() {
  it("Returns the price of a single purchase", function() {
    var purchase = Object.create(Purchase);
    purchase.setPrice(42);
    purchase.getPrice().should.equal(42);
  });
});
describe("Purchase.getDescription", function() {
  it("Returns the description of a single purchase", function() {
    var purchase = Object.create(Purchase);
    purchase.setDescription("pizza");
    purchase.getDescription().should.equal("pizza");
  });
});
