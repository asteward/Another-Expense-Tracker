
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
  description: '',
  purchaseList: [],

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

    // what is the difference if any between these two approaches?
    //return this.purchaseList.slice(0);
    return this.purchaseList;
  }

};

$(document).ready(function() {
  var purchaseList = [];

  $('#add-purchase-form').submit(function(event) {
    event.preventDefault();

    var newPurchase = Object.create(Purchase);
    newPurchase.setPrice($("#price").val());
    newPurchase.setDescription($("#description").val());

    purchaseList.push(newPurchase);

    $("#price").val("");
    $("#description").val("");

    $("tbody#add-table").empty();

    purchaseList.forEach(function(purchase) {
      $("tbody#add-table").append("<tr><td>" + purchase.getDescription() + "</td>" +
                                  "<td>" + purchase.getPrice() + "</td></tr>");
    });

    $("#description").focus();

  });
});

