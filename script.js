function closure(){
  var submenuOrder = ["root"];
  var cartMenu = document.getElementById("cartMenu");
  var menu = document.getElementById("menu");
  var back = document.getElementById("back");
  var cross = document.getElementById("cross");
  var bars = document.getElementById("bars");
  var searchIcon = document.getElementById('searchIcon');

  function toggleCartMenu() {
    cartMenu.classList.remove("cart-menu--hidden");
    cartMenu.classList.toggle("cart-menu--fade-in");
    function cartMenuUndisplay() {
      cartMenu = document.getElementById("cartMenu");
      if (!cartMenu.classList.contains("cart-menu--fade-in")) {
        cartMenu.classList.add("cart-menu--hidden");
      }
    }
    setTimeout(cartMenuUndisplay, 400);
  }

  function openMenu() {
    cross.classList.toggle("icons--hidden");
    bars.classList.toggle("icons--hidden");
    menu.classList.remove("menu--hidden");
    menu.classList.toggle("menu--fade-in");
  }

  function closeMenu() {
    cross.classList.toggle("icons--hidden");
    bars.classList.toggle("icons--hidden");
    menu.classList.toggle("menu--fade-in");
    function resetMenu() {
      var clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 1]);
      var clasterToShow = document.getElementById("root");
      clasterToHide.classList.add("item-claster--hidden");
      clasterToHide.classList.remove("item-claster--visible");
      clasterToHide.classList.remove("item-claster--submenu");
      clasterToShow.classList.add("item-claster--visible");
      clasterToShow.classList.remove("item-claster--hidden");
      back.classList.add("back--hidden");
      document.getElementById("menu").classList.add("menu--hidden");
      submenuOrder = ["root"];
    }
    setTimeout(resetMenu, 400);
  }

  function openSubmenu(itemId) {
    submenuOrder.push(itemId+"Submenu");
    var clasterToShow = document.getElementById(submenuOrder[submenuOrder.length - 1]);
    var clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 2]);
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
    var clasterToHide = document.getElementById(submenuOrder[submenuOrder.length - 1]);
    var clasterToShow = document.getElementById(submenuOrder[submenuOrder.length - 2]);
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
    searchIcon.classList.toggle("search__icon--hidden");
  }

  function inputInactive() {
    searchIcon.classList.toggle("search__icon--hidden");
  }
  return [toggleCartMenu, openMenu, closeMenu, openSubmenu, closeSubmenu, inputActive, inputInactive];
}


var functionArray = closure();

document.getElementById("cart").addEventListener("click", functionArray[0]);
document.getElementById("bars").addEventListener("click", functionArray[1]);
document.getElementById("cross").addEventListener("click", functionArray[2]);
document.getElementById("features").addEventListener("click", function() {
  functionArray[3]("features");
});
document.getElementById("back").addEventListener("click", functionArray[4]);
document.getElementById("search").addEventListener("onfocus", functionArray[5]);
document.getElementById("search").addEventListener("onblur", functionArray[6]);
