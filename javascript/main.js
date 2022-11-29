//nav menue===========================================
let menu = document.querySelector(".menu");
let exit = document.querySelector(".exit");
let nav = document.querySelector(".nav");
menu.onclick = function () {
  nav.classList.add("active");
};
exit.onclick = function () {
  nav.classList.remove("active");
};
//search fix============================================
let search = document.querySelector(".search input");
let colorChange = document.querySelector(".color-change");
if (typeof search != "undefined" && search != null) {
  search.onfocus = function () {
    colorChange.classList.add("hide");
  };
  search.onblur = function () {
    colorChange.classList.remove("hide");
  };
}
//products tab ============================================
let allTabs = document.querySelectorAll(".tabs button");
allTabs.forEach((e) => {
  e.addEventListener("click", function (e) {
    allTabs.forEach((s) => {
      s.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// loader==================================================
let landing = document.getElementById("landing");
let mountain = document.getElementById("mountain");
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
//cart ===================================================
//====================increament cart number==============
let addButton = document.querySelectorAll(".add");
let carts = document.querySelectorAll(".cart");
let counter = 0;
let itemCount = window.localStorage.getItem("itemCount");
if (itemCount !== null) {
  counter = itemCount;
}
carts.forEach((e) => e.setAttribute("data-content", counter));
addButton.forEach((e) => {
  e.addEventListener("click", increamentCart);
});
function increamentCart() {
  counter++;
  window.localStorage.setItem("itemCount", counter);
  carts.forEach((e) => e.setAttribute("data-content", counter));
}
//===========add added products to local storage==========
let products = [];
if (window.localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}
addButton.forEach((e) => {
  e.addEventListener("click", function addToLocalStorage(e) {
    let productNumber = 1;
    let id =
      e.currentTarget.parentElement.parentElement.parentElement.getAttribute(
        "id"
      );
    let product = {
      id: id,
      name: document.querySelector(`#${id} .name`).innerHTML,
      type: document.querySelector(`#${id} .type`).innerHTML,
      price: document.querySelector(`#${id} .price span`).innerHTML,
      productNumber: productNumber,
    };

    for (let i = 0; i < products.length; i++) {
      if (id === products[i].id) {
        let my = products[i];
        products.splice(i, 1);
        ++my.productNumber;
        products.push(my);
        window.localStorage.setItem("products", JSON.stringify(products));
        return;
      }
    }
    products.push(product);
    window.localStorage.setItem("products", JSON.stringify(products));
  });
});
//cart scroll appear==============================================================
let fixedCart = document.querySelector(".cart-fixed-icon");
window.onscroll = function () {
  if (fixedCart) {
    if (scrollY > 500) {
      fixedCart.classList.add("in");
    } else {
      fixedCart.classList.remove("in");
    }
  }
};
//add animation==================================================================
addButton.forEach((e) => {
  e.addEventListener("click", function (e) {
    fixedCart.classList.add("animate__swing");
    setTimeout(() => {
      fixedCart.classList.remove("animate__swing");
    }, 1000);
    e.currentTarget.classList.replace(
      "ai-circle-plus-fill",
      "ai-circle-check-fill"
    );
    setTimeout(() => {
      this.classList.replace("ai-circle-check-fill", "ai-circle-plus-fill");
    }, 1000);
  });
});
//login =====================================================
let unhide = document.querySelector(".login form .pass i");
let passField = document.querySelector(".login form .pass input");
if (unhide) {
  unhide.onclick = function () {
    if (passField.getAttribute("type") === "password") {
      passField.setAttribute("type", "text");
      unhide.classList.replace("ai-eye-slashed", "ai-eye-open");
    } else {
      passField.setAttribute("type", "password");
      unhide.classList.replace("ai-eye-open", "ai-eye-slashed");
    }
  };
}
