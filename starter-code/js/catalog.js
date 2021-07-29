/* global Product, Cart */

"use strict";

// Set up an empty cart for use on this page.
const cart = new Cart([]);
/// ----------------------------- cart is and instance of a CART -------------------////
/// ------------------- use cmd/ctl f to look for words in your code ------------------///

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //DONE: Add an <option> tag inside the form's select for each product
  const selectElem = document.getElementById("items");
  for (let i in Product.allProducts) {
    // console.log(Product.allProducts[i]);
    let optionElem = document.createElement("option");
    optionElem.textContent = Product.allProducts[i].name;
    optionElem.value = Product.allProducts[i].name;
    selectElem.appendChild(optionElem);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.items.value);
  console.log(event.target.quantity.value);
  let items = event.target.items.value;
  let quantity = event.target.quantity.value;

  // DONE: Prevent the page from reloading
  /// --------------- at this point you know which item was picked from the list, how many ----------- ///
  // Do all the things ...

  addSelectedItemToCart(items, quantity);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart(items, quantity) {
  cart.addItem(items, quantity);
  console.log(cart);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  Cart.itemCount
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  // let tableElem = document.getElementById('cart');
  // for (let i in Product.allProducts) {
  //   let rowElem = document.getElementById('tr');
  //   tableElem.appendChild(rowElem);
  //   let tdElem = document.getElementById('td');
  //   tdElem.textContent = CartItem;
  //   // tdElem.value = CartItem[i];
  //   rowElem.appendChild(tdElem);
  // }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById("catalog");
catalogForm.addEventListener("submit", handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
