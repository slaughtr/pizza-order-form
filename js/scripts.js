//business logic
//pizza constructor
function Pizza(size, toppings, sides) {
  this.size = size;
  this.toppings = toppings;
  this.sides = sides;
  this.orderNumber = Math.floor(Math.random()*1000);
}

var price = 0;

//pizza prototype to calculate price
Pizza.prototype = {
  totalPrice: function() {
    var sizeMult = 0; //let's charge more or less for toppings based on size
    if (this.size = "large") {
      price = 15;
      sizeMult = 2;
    } else if (this.size = "medium") {
      price = 12;
      sizeMult = 1;
    } else if (this.size = "small") {
      price = 8;
      sizeMult = .75;
    }

    this.toppings.forEach(function(topping) {
      //sauces
      if (topping === "hotSauce") price = price + (.5*sizeMult);
      if (topping === "extraSauce") price += (.25*sizeMult);
      //veggies
      if (topping === "roastedToms") price += (.5*sizeMult);
      if (topping === "cherryToms") price += (.3*sizeMult);
      if (topping === "olives") price += (.5*sizeMult);
      if (topping === "onions") price += (.1*sizeMult);
      if (topping === "roastedGarlic") price += (.3*sizeMult);
      if (topping === "pepperocinis") price += (.3*sizeMult);
      if (topping === "bellPeppers") price += (.1*sizeMult);
      if (topping === "serranoPeppers") price += (.25*sizeMult);
      if (topping === "jalapenoPeppers") price += (.2*sizeMult);
      if (topping === "habaneroPeppers") price += (.3*sizeMult);
      if (topping === "broccoli") price -= (1*sizeMult);
      if (topping === "spinach") price += (.1*sizeMult);
      if (topping === "asparagus") price += (5*sizeMult);
      if (topping === "artichoke") price += (.4*sizeMult);
      //"meats"
      if (topping === "jackfruit") price += (.35*sizeMult);
      if (topping === "bbqJackfruit") price += (.4*sizeMult);
      if (topping === "buffaloJackfruit") price += (.4*sizeMult);
      if (topping === "soyrizo") price += (.3*sizeMult);
      if (topping === "pepperoni") price += (.3*sizeMult);
      if (topping === "meatballs") price += (.4*sizeMult);
      if (topping === "fieldRoast") price += (.5*sizeMult);
      if (topping === "seitan") price += (.25*sizeMult);
      if (topping === "bbqSeitan") price += (.3*sizeMult);
      if (topping === "buffaloSeitan") price += (.3*sizeMult);
      if (topping === "tofu") price += (.25*sizeMult);
      if (topping === "bbqTofu") price += (.3*sizeMult);
      if (topping === "buffaloTofu") price += (.3*sizeMult);
    });

    price += (.5*this.sides);
    return price.toFixed(2);
  },
  populateToppingsArray: function() {
    var self = this;

    $("input[type=checkbox]:checked").each(function(){
      self.toppings.push($(this).val());
    });
  },
  populateSidesArray: function() {
    var ranchSelect = document.getElementById("ranchNum");
    var ranches =  parseInt(ranchSelect.options[ranchSelect.selectedIndex].value);
    var buffSelect = document.getElementById("buffaloNum");
    var buffs =  parseInt(buffSelect.options[buffSelect.selectedIndex].value);
    var bbqSelect = document.getElementById("bbqNum");
    var bbqs =  parseInt(bbqSelect.options[bbqSelect.selectedIndex].value);
    var hotSelect = document.getElementById("hotSauceNum");
    var hots =  parseInt(hotSelect.options[hotSelect.selectedIndex].value);

    this.sides = ranches+buffs+bbqs+hots;

  }
}

function receiptDisplay(custName, pizza) {
  $(".custNameDisp").text(custName);
  $(".pizzaSizeDisp").text(pizza.size);
  $(".numToppingsDisp").text(pizza.toppings.length);
  $(".numSidesDisp").text(pizza.sides);
  $(".pizzaPriceDisp").text(pizza.totalPrice());
}


//user interface logic
$(function() {
    $("#pizzaOrderForm").submit(function(){
    event.preventDefault();
    var custName = $("#customerName").val();
    var sizeSelector = document.getElementById("selectSize");
    var pizzaSize =  sizeSelector.options[sizeSelector.selectedIndex].value;
    var pizza = new Pizza(pizzaSize, [], 0);
    var pizzaObj = pizza;
    pizza.populateToppingsArray();
    pizza.populateSidesArray();
    $("#pizzaOrderForm").hide();
    receiptDisplay(custName, pizzaObj);
    $(".receipt").show();
  });
});
