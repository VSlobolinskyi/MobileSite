var submenuOrder = ["root"];

function toggleCartMenu(){
    cartMenu = document.getElementById("cartMenu");
    cartMenu.classList.remove("cart-menu--hidden");
    cartMenu.classList.toggle("cart-menu--fade-in");
    setTimeout(cartMenuUndisplay, 400);
}

function cartMenuUndisplay(){
    cartMenu = document.getElementById("cartMenu");
    if(!cartMenu.classList.contains("cart-menu--fade-in")){
        cartMenu.classList.add("cart-menu--hidden");
    }
}

function toggleMenu(){
    let menu = document.getElementById("menu");
    menu.classList.remove("menu--hidden");
    menu.classList.toggle("menu--fade-in");
    if(!(menu.classList.contains("menu--fade-in"))){
        setTimeout(resetMenu, 400);
    }
}

function resetMenu(){
    let clusterToHide = document.getElementById(submenuOrder[submenuOrder.length-1]);
    let back = document.getElementById("back").classList;
    let clusterToShow = document.getElementById("root");
    clusterToHide.classList.toggle("item-cluster--hidden");
    clusterToShow.classList.toggle("item-cluster--hidden");
    back.classList.remove("back--visible");
    back.classList.add("back--hidden");
    document.getElementById("menu").classList.add("menu--hidden");
    submenuOrder = ["root"];
}

function openSubmenu(item){
    submenuOrder.push(item.getAttribute("id")+"Submenu");
    let clusterToShow = document.getElementById(submenuOrder[submenuOrder.length-1]);
    let clusterToHide = document.getElementById(submenuOrder[submenuOrder.length-2]);
    let back = document.getElementById("back").classList;
    clusterToHide.classList.toggle("item-cluster--hidden");
    clusterToShow.classList.toggle("item-cluster--hidden");
    back.remove("back--hidden");
    back.classList.add("back--visible");
}

function closeSubmenu(){
    let activecluster = document.getElementById(submenuOrder[submenuOrder.length-1]);
    let clusterToShow = document.getElementById(submenuOrder[submenuOrder.length-2]);
    if(submenuOrder[submenuOrder.length-2] == "root"){
        document.getElementById("back").classList.toggle("back--hidden");
    }
    activecluster.classList.toggle("item-cluster--hidden");
    clusterToShow.classList.toggle("item-cluster--hidden");
    submenuOrder.pop();
}

function inputActive(){
    let searchIcon = document.getElementById('searchIcon');
    searchIcon.classList.remove("search__icon--visible");
    searchIcon.classList.add("search__icon--hidden");
}

function input_inactive(){
    let searchIcon = document.getElementById('searchIcon');
    searchIcon.classList.add("search__icon--visible");
    searchIcon.classList.remove("search__icon--hidden");
}
