// Same as before, with additional functionality for the shopping cart

// Shopping cart functionality
var cartItems = [];
var cartTotal = 0;

function updateCart() {
  var cartItemsElement = document.getElementById("cartItems");
  var cartTotalElement = document.getElementById("cartTotal");

  cartItemsElement.innerHTML = "";
  cartTotal = 0;

  cartItems.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartItemsElement.appendChild(li);
    cartTotal += item.price;
  });

  cartTotalElement.textContent = "$" + cartTotal.toFixed(2);
}

function addToCart(name, price) {
  cartItems.push({ name: name, price: price });
  updateCart();
}

document.querySelectorAll(".addToCartButton").forEach(function(button) {
  button.addEventListener("click", function() {
    var productName = button.parentNode.querySelector("h3").textContent;
    var productPrice = parseFloat(button.getAttribute("data-price"));
    addToCart(productName, productPrice);
  });
});

// Checkout functionality
document.getElementById("checkoutButton").addEventListener("click", function() {
  alert("Thank you for your purchase! Your total is: $" + cartTotal.toFixed(2));
  cartItems = [];
  updateCart();
});
