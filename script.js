let submenuOrder = ["root"];
const cartMenu = document.getElementById("cartMenu");
const menu = document.getElementById("root");
const back = document.getElementById("back");
const cross = document.getElementById("cross");
const bars = document.getElementById("bars");
const searchIcon = document.getElementById('searchIcon');
const carouselOrder = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")];
const body = document.getElementById("body");
let carouselCurrent = 0;

function toggleCartMenu() {
  cartMenu.classList.remove("cart-menu--hidden");
  cartMenu.classList.toggle("cart-menu--fade");
  function cartMenuUndisplay() {
    if (!cartMenu.classList.contains("cart-menu--fade")) {
      cartMenu.classList.add("cart-menu--hidden");
    }
    clearTimeout(cartTimout);
  }
  let cartTimout = setTimeout(cartMenuUndisplay, 400);
}

function openMenu() {
  cross.classList.toggle("icons--hidden");
  bars.classList.toggle("icons--hidden");
  body.classList.add("body--disable-scroll");
  menu.classList.add("item-claster--visible");
  menu.classList.remove("menu--hidden");
  menu.classList.toggle("menu--fade");
}

function closeMenu() {
  cross.classList.toggle("icons--hidden");
  bars.classList.toggle("icons--hidden");
  menu.classList.toggle("menu--fade");
  body.classList.remove("body--disable-scroll");
  function resetMenu() {
    let clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 1]);
    clasterToHide.classList.add("item-claster--hidden");
    clasterToHide.classList.remove("item-claster--visible");
    submenuOrder.forEach( submenuId => {
      if(submenuId != "root") { 
        document.getElementById(submenuId).classList.add("item-claster--submenu");
      }
    });
    menu.classList.remove("item-claster--hidden");
    menu.classList.remove("item-claster--visible");
    back.classList.add("back--hidden");
    back.classList.remove("back--visibles");
    menu.classList.add("menu--hidden");
    submenuOrder = ["root"];
    clearTimeout(navigationTimout);
  }
  let navigationTimout = setTimeout(resetMenu, 400);
}

function openSubmenu(itemId) {
  submenuOrder.push(itemId+"Submenu");
  let clasterToShow = document.getElementById(submenuOrder[submenuOrder.length - 1]);
  let clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 2]);
  clasterToHide.classList.add("item-claster--hidden");
  clasterToHide.classList.remove("item-claster--visible");
  clasterToHide.classList.remove("item-claster--submenu");
  clasterToShow.classList.add("item-claster--visible");
  clasterToShow.classList.remove("item-claster--hidden");
  clasterToShow.classList.add("item-claster--submenu");
  back.classList.remove("back--hidden");
  back.classList.add("back--visible");
}

function submenuSwitch() {
  if(event.target.parentElement.id == "features") {
    openSubmenu("features");
  }
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
    back.classList.add("back--hidden");
    back.classList.remove("back--visible");
    clasterToShow.classList.remove("item-claster--submenu");
  }
  submenuOrder.pop();
}

function carouselRight() {
  carouselOrder[carouselCurrent].classList.remove("home__img-container--top");
  carouselOrder[carouselCurrent].classList.add("home__img-container--hidden");
  if(carouselCurrent == carouselOrder.length-1) {
    carouselCurrent = 0;
  }
  else {
    carouselCurrent++;
  }
  carouselOrder[carouselCurrent].classList.add("home__img-container--top");
  carouselOrder[carouselCurrent].classList.remove("home__img-container--hidden");
}

function carouselLeft() {
  carouselOrder[carouselCurrent].classList.add("home__img-container--top");
  carouselOrder[carouselCurrent].classList.add("home__img-container--hidden");
  if(carouselCurrent == 0) { 
    carouselCurrent = carouselOrder.length-1;
  }
  else {
    carouselCurrent--;
  }
  carouselOrder[carouselCurrent].classList.remove("home__img-container--top");
  carouselOrder[carouselCurrent].classList.remove("home__img-container--hidden");     
}

function inputActive() {
  searchIcon.classList.toggle("search__icon--hidden");
}

function inputInactive() {
  searchIcon.classList.toggle("search__icon--hidden");
}


document.getElementById("cart").addEventListener("click", toggleCartMenu);
bars.addEventListener("click", openMenu);
cross.addEventListener("click", closeMenu);
menu.addEventListener("click", submenuSwitch);
back.addEventListener("click", closeSubmenu);
document.getElementById("search").addEventListener("focus", inputActive);
document.getElementById("search").addEventListener("blur", inputInactive);
document.getElementById("arrowLeft").addEventListener("click", carouselLeft);
document.getElementById("arrowRight").addEventListener("click", carouselRight);

