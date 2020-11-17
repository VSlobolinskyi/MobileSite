
function closure(){
  let submenuOrder = ["root"];
  const cartMenu = document.getElementById("cartMenu");
  const menu = document.getElementById("menu");
  const back = document.getElementById("back");
  const cross = document.getElementById("cross");
  const bars = document.getElementById("bars");
  const searchIcon = document.getElementById('searchIcon');
  const carouselOrder = ["img1", "img2", "img3"];
  let carouselCurrent = 0;

  function toggleCartMenu() {
    cartMenu.classList.remove("cart-menu--hidden");
    cartMenu.classList.toggle("cart-menu--fade");
    function cartMenuUndisplay() {
      if (!cartMenu.classList.contains("cart-menu--fade")) {
        cartMenu.classList.add("cart-menu--hidden");
      }
    }
    setTimeout(cartMenuUndisplay, 400);
  }

  function openMenu() {
    cross.classList.toggle("icons--hidden");
    bars.classList.toggle("icons--hidden");
    menu.classList.remove("menu--hidden");
    menu.classList.toggle("menu--fade");
  }

  function closeMenu() {
    cross.classList.toggle("icons--hidden");
    bars.classList.toggle("icons--hidden");
    menu.classList.toggle("menu--fade");
    function resetMenu() {
      let clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 1]);
      let clasterToShow = document.getElementById("root");
      clasterToHide.classList.add("item-claster--hidden");
      clasterToHide.classList.remove("item-claster--visible");
      clasterToHide.classList.remove("item-claster--submenu");
      clasterToShow.classList.remove("item-claster--hidden");
      back.classList.add("back--hidden");
      menu.classList.add("menu--hidden");
      submenuOrder = ["root"];
    }
    setTimeout(resetMenu, 400);
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

  function carouselRight(){
    if(carouselCurrent == carouselOrder.length-1){
      return;
    }
    document.getElementById(carouselOrder[carouselCurrent]).classList.add("home__img--hidden");
    carouselCurrent++;
    document.getElementById(carouselOrder[carouselCurrent]).classList.remove("home__img--hidden")
  }

  function carouselLeft(){
    if(carouselCurrent == 0){      
      return;
    }
    document.getElementById(carouselOrder[carouselCurrent]).classList.add("home__img--hidden");
    carouselCurrent--;
    document.getElementById(carouselOrder[carouselCurrent]).classList.remove("home__img--hidden")
  }

  function inputActive() {
    searchIcon.classList.toggle("search__icon--hidden");
  }

  function inputInactive() {
    searchIcon.classList.toggle("search__icon--hidden");
  }
  let dict = {
    "toggleCartMenu": toggleCartMenu,
    "openMenu": openMenu,
    "closeMenu": closeMenu, 
    "openSubmenu": openSubmenu,
    "closeSubmenu": closeSubmenu,
    "inputActive": inputActive, 
    "inputInactive": inputInactive,
    "carouselLeft": carouselLeft,
    "carouselRight": carouselRight
  };

  return dict;
}

let functionDict = closure();
document.getElementById("cart").addEventListener("click", functionDict["toggleCartMenu"]);
document.getElementById("bars").addEventListener("click", functionDict["openMenu"]);
document.getElementById("cross").addEventListener("click", functionDict["closeMenu"]);
document.getElementById("features").addEventListener("click", function() {
  functionDict["openSubmenu"]("features");
});
document.getElementById("back").addEventListener("click", functionDict["closeSubmenu"]);
document.getElementById("search").addEventListener("onfocus", functionDict["inputActive"]);
document.getElementById("search").addEventListener("onblur", functionDict["inputInactive"]);
document.getElementById("arrowLeft").addEventListener("click", functionDict["carouselLeft"]);
document.getElementById("arrowRight").addEventListener("click", functionDict["carouselRight"]);

