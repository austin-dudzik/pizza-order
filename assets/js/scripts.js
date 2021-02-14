$(document).ready(function() {

  // Fix bug with Bootstrap tabs
  $("button").click(function() {
    $(".active").removeClass("active");
  })

  // Run calculatePizza on form change
  $("form").change(calculatePizza);

  // Define calculatePizza function
  function calculatePizza() {

    // Find which pizza size is selected
    let selectedSize = $("input[name=size]:checked");

    // Get the selected pizza size
    let pizzaType = selectedSize.data("size");

    // Get the selected pizza price
    let pizzaPrice = selectedSize.data("price");

    // Find which pizza crust is selected
    let selectedCrust = $("input[name=crust]:checked");

    // Get the selected crust name
    let pizzaCrust = selectedCrust.data("crust");

    // Set meats variable
    let meats = "";

    // Set veggies variable
    let veggies = "";

    // Find which meats are selected
    let selectedMeats = $("input[name=meats]:checked");

    // Find which veggies are selected
    let selectedVeggies = $("input[name=veggies]:checked");

    // Set initial meat cost to 0
    let totalMeatCost = 0;

    selectedMeats.each(function() {

      // Add new selections to total cost of meat
      totalMeatCost += $(this).data("price");

      // Add meat selection names to list
      meats += $(this).val();
      meats += ", ";

    });


    // Set initial veggie cost to 0
    let totalVeggieCost = 0;

    selectedVeggies.each(function() {

      // Add new selections to total cost of veggies
      totalVeggieCost += $(this).data("price");

      // Add veggie selection names to list
      veggies += $(this).val();
      veggies += ", ";

    });

    // Calculate the order subtotal
    let subtotal = pizzaPrice + totalMeatCost + totalVeggieCost;

    // Format subtotal to two decimal places
    let subtotalDisplay = subtotal.toFixed(2);

    // Calculate order tax
    let tax = subtotal * 0.051;

    // Format tax to two decimal places
    let taxDisplay = tax.toFixed(2);

    // Set the delivery fee
    let deliveryFee = 2;

    // Set the delivery fee to display
    let deliveryDisplay = "2.00";

    // Calculate the final total
    let finalTotal = subtotal + tax + deliveryFee;

    // Format final total to two decimal places
    finalTotal = finalTotal.toFixed(2);

    // Add subtotal to page
    $("span#subtotal").text("$" + subtotalDisplay);

    // Add tax total to page
    $("span#taxTotal").text("$" + taxDisplay);

    // Add delivery fee cost to page
    $("span#deliveryFee").text("$" + deliveryDisplay);

    // Add final total to page
    $("span#orderTotal").text("$" + finalTotal);

    // Define the order name
    let orderName = `${pizzaType} ${pizzaCrust} Crust Pizza`;

    // Add order name to review page
    $("h6#orderName").text(orderName);

    // Convert pizza type to lowercase
    let convertType = pizzaType.toLowerCase();

    // Set pizza image to selected pizza size
    $("img#pizzaImg").attr("src", "assets/img/pizza-" + convertType + ".png");

    // Add list of meats to page
    $("span#meats").text(meats);

    // Add list of veggies to page
    $("span#veggies").text(veggies);

    // Generate a random order number
    let orderNumber = Math.random() * (67239629736790237672 - 1368237823623) + 1368237823623;

    // Define variables from delivery info page
    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();
    let phone = $("input#phone").val();
    let address = $("input#address").val();
    let city = $("input#city").val();
    let zipCode = $("input#zipCode").val();

    // Display first and last name on page
    $("h6#displayName").text(`${firstName} ${lastName}`);

    // Display address on page
    $("p#displayAddress").text(`${address} ${city}, WI ${zipCode}`);

    // Display phone number on page
    $("span#displayPhone").text(phone);

    // Display order number on page
    $("span#orderNum").text(orderNumber);

  }

});