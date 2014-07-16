
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
describe("Category.getPurchaseList", function() {
  it("Returns an array with all of the items for purchase in a category", function() {
    var addPurchase1 = Object.create(Purchase);
    var addPurchase2 = Object.create(Purchase);

    addPurchase1.setDescription("pizza");
    addPurchase1.setPrice(20);
    addPurchase2.setDescription("burger");
    addPurchase2.setPrice(10);

    var food = Object.create(Category);

    food.setDescription("Food");
    food.addPurchase(addPurchase1);
    food.addPurchase(addPurchase2);

    food.getPurchaseList().should.eql([addPurchase1, addPurchase2]);
  });
});
