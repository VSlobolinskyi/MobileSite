var submenuOrder = ["root"];

function toggleCartMenu() {
  cartMenu = document.getElementById("cartMenu");
  cartMenu.classList.remove("cart-menu--hidden");
  cartMenu.classList.toggle("cart-menu--fade-in");
  setTimeout(cartMenuUndisplay, 400);
}

function cartMenuUndisplay() {
  cartMenu = document.getElementById("cartMenu");
  if (!cartMenu.classList.contains("cart-menu--fade-in")) {
    cartMenu.classList.add("cart-menu--hidden");
  }
}

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.remove("menu--hidden");
  menu.classList.toggle("menu--fade-in");
  if (!(menu.classList.contains("menu--fade-in"))) {
    setTimeout(resetMenu, 400);
  }
}

function resetMenu() {
  let clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 1]);
  let back = document.getElementById("back");
  let clasterToShow = document.getElementById("root");
  clasterToHide.classList.add("item-claster--hidden");
  clasterToHide.classList.remove("item-claster--visible");
  clasterToHide.classList.remove("item-claster--submenu");
  clasterToShow.classList.add("item-claster--visible");
  clasterToShow.classList.remove("item-claster--hidden");
  back.classList.add("back--hidden");
  document.getElementById("menu").classList.add("menu--hidden");
  submenuOrder = ["root"];
}

function openSubmenu(item) {
  console.log(item.getAttribute("id"))
  submenuOrder.push(item.getAttribute("id") + "Submenu");
  let clasterToShow = document.getElementById(submenuOrder[submenuOrder.length - 1]);
  let clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 2]);
  let back = document.getElementById("back");
  clasterToHide.classList.add("item-claster--hidden");
  clasterToHide.classList.remove("item-claster--visible");
  clasterToHide.classList.remove("item-claster--submenu");
  clasterToShow.classList.add("item-claster--visible");
  clasterToShow.classList.remove("item-claster--hidden");
  clasterToShow.classList.add("item-claster--submenu");
  back.classList.remove("back--hidden");
  back.classList.add("back--visible");
}

function closeSubmenu() {
  let clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 1]);
  let clasterToShow = document.getElementById(submenuOrder[submenuOrder.length - 2]);
  clasterToHide.classList.add("item-claster--hidden");
  clasterToHide.classList.remove("item-claster--visible");
  clasterToShow.classList.remove("item-claster--submenu");
  clasterToShow.classList.add("item-claster--visible");
  clasterToShow.classList.remove("item-claster--hidden");
  clasterToShow.classList.add("item-claster--submenu");
  if (submenuOrder[submenuOrder.length - 2] == "root") {
    document.getElementById("back").classList.toggle("back--hidden");
    clasterToShow.classList.remove("item-claster--submenu");
  }
  submenuOrder.pop();
}

function inputActive() {
  let searchIcon = document.getElementById('searchIcon');
  searchIcon.classList.toggle("search__icon--hidden");
}

function inputInactive() {
  let searchIcon = document.getElementById('searchIcon');
  searchIcon.classList.toggle("search__icon--hidden");
}