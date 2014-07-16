
var Purchase = {
  price: 0,
  description: "",
  setPrice: function(amount) {
    this.price = amount;
  },
  setDescription: function(desc) {
    this.description = desc;
  },
  getPrice: function() {
    return this.price;
  },
  getDescription: function() {
    return this.description;
  }
};

var Category = {
  initialize: function(description) {
    this.purchaseList = [];
    this.description = description;
  },
  setDescription: function(desc) {
    this.description = desc;
  },
  getDescription: function() {
    return this.description;
  },
  addPurchase: function(purchaseObj) {
    this.purchaseList.push(purchaseObj);
  },
  getPurchaseList: function() {
    return this.purchaseList.slice(0);
  },
};



$(document).ready(function() {
  var categoryList = [];
  var activeCategory = null;

  $("form#add-category").submit(function(event) {
    event.preventDefault();

    var newCategory = Object.create(Category);
    newCategory.initialize($("input#category").val());
    categoryList.push(newCategory);

    $("ul#cat-list").empty();
    categoryList.forEach(function(thisCategory) {
      $("ul#cat-list").append("<li>" + thisCategory.getDescription() + "</li>");

      $("ul#cat-list li").last().click(function() {
        activeCategory = thisCategory;

        $("#purchase-category").text(activeCategory.getDescription());
        $("#latter-columns").show();
        $("tbody#add-table").empty();
        activeCategory.getPurchaseList().forEach(function(purchase) {
         $("tbody#add-table").append("<tr><td>" + purchase.getDescription() + "</td>" +
                                  "<td>" + purchase.getPrice() + "</td></tr>");
        });
        $("#description").focus();
      });
    });

    $("input#category").val("");
    $("input#category").focus();
  });


  $('#add-purchase-form').submit(function(event) {
    event.preventDefault();

    var newPurchase = Object.create(Purchase);
    newPurchase.setPrice($("#price").val());
    newPurchase.setDescription($("#description").val());

    activeCategory.addPurchase(newPurchase);

    $("#price").val("");
    $("#description").val("");

    $("tbody#add-table").empty();

    activeCategory.getPurchaseList().forEach(function(purchase) {
        $("tbody#add-table").append("<tr><td>" + purchase.getDescription() + "</td>" +
                                  "<td>" + purchase.getPrice() + "</td></tr>");
    });

    $("#description").focus();

  });
});

