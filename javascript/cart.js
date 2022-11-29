//import products to page =====================================
let total = 0;
let totalLabel = document.querySelector(".total span");
let itemsContainer = document.querySelector(".items");
if (products.length === 0) {
  itemsContainer.innerHTML = `<h2 class="empty-label">Empty</h2>`;
}
for (let i = 0; i < products.length; i++) {
  let item = document.createElement("div");
  item.setAttribute("class", "item");
  item.setAttribute("id", products[i].id);
  item.innerHTML = `<div class="image">
  <img src="images/${products[i].id}-image.png" alt="">
</div>
<div class="info">
  <span class="type">${products[i].type}</span>
  <span class="name">${products[i].name}</span>
  <span class="price">$${products[i].price}</span>
  <span class="quantity"><span>Quantity:</span>${products[i].productNumber}</span>
</div>`;
  itemsContainer.appendChild(item);
  console.log(products[i].price);
  let itemTotal = products[i].price * +products[i].productNumber;
  total = total + itemTotal;
  totalLabel.innerHTML = total.toFixed(2);
}
//empty cart============================================
let emptyButt = document.querySelector(".empty-cart-butt");
emptyButt.onclick = function () {
  counter = 0;
  window.localStorage.setItem("itemCount", 0);
  carts.forEach((e) => e.setAttribute("data-content", counter));
  itemsContainer.innerHTML = `<h2 class="empty-label">Empty</h2>`;
  totalLabel.innerHTML = "00";
  products.length = 0;
  window.localStorage.setItem("products", JSON.stringify(products));
};
