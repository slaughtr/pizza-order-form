//business logic
//pizza constructor
function Pizza() {
  this.size = "";
  this.toppings = [];
  this.orderNumber = Math.floor(Math.random()*1000);
}


//pizza prototype to calculate price
Pizza.prototype.totalPrice = function() {
  let price = 0;
  let sizeMult = 0; //let's charge more or less for toppings based on size
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
    if (topping = "hotSauce") price += (.5*sizeMult);
    if (topping = "extraSauce") price += (.25*sizeMult);
    //veggies
    if (topping = "roastedToms") price += (.5*sizeMult);
    if (topping = "cherryToms") price += (.3*sizeMult);
    if (topping = "olives") price += (.5*sizeMult);
    if (topping = "onions") price += (.1*sizeMult);
    if (topping = "roastedGarlic") price += (.3*sizeMult);
    if (topping = "pepperoncinis") price += (.3*sizeMult);
    if (topping = "bellPeppers") price += (.1*sizeMult);
    if (topping = "serranoPeppers") price += (.25*sizeMult);
    if (topping = "jalapenoPeppers") price += (.2*sizeMult);
    if (topping = "habaneroPeppers") price += (.3*sizeMult);
    if (topping = "broccoli") price += (.5*sizeMult);
    if (topping = "spinach") price += (.1*sizeMult);
    if (topping = "asparagus") price += (.4*sizeMult);
    if (topping = "artichoke") price += (.4*sizeMult);
    //"meats"
    if (topping = "jackfruit") price += (.35*sizeMult);
    if (topping = "bbqJackfruit") price += (.4*sizeMult);
    if (topping = "buffaloJackfruit") price += (.4*sizeMult);
    if (topping = "soyrizo") price += (.3*sizeMult);
    if (topping = "pepperoni") price += (.3*sizeMult);
    if (topping = "meatballs") price += (.4*sizeMult);
    if (topping = "fieldRoast") price += (.5*sizeMult);
    if (topping = "seitan") price += (.25*sizeMult);
    if (topping = "tofu") price += (.25*sizeMult);
    if (topping = "bbqTofu") price += (.3*sizeMult);
    if (topping = "buffaloTofu") price += (.3*sizeMult);
  });
}







//user interface logic
