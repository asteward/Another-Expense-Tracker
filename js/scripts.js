var hammerTime = function() {
    var img = $("#plane"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 5000;

    function animatePlane() {
        img.css("left", -width)
           .animate({
                "left": screenWidth
            }, duration, animatePlane);
    };

    animatePlane();
};


var Purchase = {
  price: parseFloat(0),
  description: "",
  setPrice: function(amount) {
    this.price = parseFloat(amount).toFixed(2);
  },
  setDescription: function(desc) {
    this.description = desc;
  },
  getPrice: function() {
    return parseFloat(this.price).toFixed(2);
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

    if($("input#category").val() === "hammer") {
      hammerTime();
      $("#secret").show();
    }

    $("ul#cat-list").empty();
    categoryList.forEach(function(thisCategory) {
      $("ul#cat-list").append("<li>" + thisCategory.getDescription() + "</li>");

      $("ul#cat-list li").last().click(function() {
        activeCategory = thisCategory;

        $("#purchase-category").text(activeCategory.getDescription());
        $("#latter-columns").show();
        $("tbody#add-table").empty();

        var purchaseTotal = 0.0;
        activeCategory.getPurchaseList().forEach(function(purchase) {
         $("tbody#add-table").append("<tr><td>" + purchase.getDescription() + "</td>" +
                                  "<td class='moneh'>" + purchase.getPrice() + "</td></tr>");
         purchaseTotal += parseFloat(purchase.getPrice());
        });

        $("tbody#add-table").append("<tr><td>Total:</td><td class='moneh'>$" + parseFloat(purchaseTotal) + "</td></tr>");
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

    var purchaseTotal = parseFloat(0);
    activeCategory.getPurchaseList().forEach(function(purchase) {
        $("tbody#add-table").append("<tr><td>" + purchase.getDescription() + "</td>" +
                                  "<td class='moneh'>" + purchase.getPrice() + "</td></tr>");
        purchaseTotal += parseFloat(purchase.getPrice());
    });
    $("tbody#add-table").append("<tr><td>Total:</td><td class='moneh'>$" + parseFloat(purchaseTotal) + "</td></tr>");
    $("#description").focus();

  });
});


