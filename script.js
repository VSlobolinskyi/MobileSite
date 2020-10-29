var submenuOrder = ["root"];

function toggle_cart_menu(){
    document.getElementById("cartMenu").classList.remove("cart-menu--hidden");
    document.getElementById("cartMenu").classList.toggle("cart-menu--fade-in");
    setTimeout(cart_menu_undisplay, 400);
}
function cart_menu_undisplay(){
    if(!document.getElementById("cartMenu").classList.contains("cart-menu--fade-in")){
        document.getElementById("cartMenu").classList.add("cart-menu--hidden");
    }
}
function toggle_menu(){
    document.getElementById("menu").classList.remove("menu--hidden");
    document.getElementById("menu").classList.toggle("menu--fade-in");
    if(!(document.getElementById("menu").classList.contains("menu--fade-in"))){
        setTimeout(reset_menu, 400);
    }
}
function reset_menu(){
    let clusterToHide = document.getElementById(submenuOrder[submenuOrder.length-1]);
    clusterToHide.classList.add("item-cluster--hidden");
    clusterToHide.classList.remove("item-cluster--visible");
    let clusterToShow = document.getElementById("root");
    clusterToShow.classList.remove("item-cluster--hidden");
    clusterToShow.classList.add("item-cluster--visible");
    document.getElementById("back").classList.remove("back--visible");
    document.getElementById("back").classList.add("back--hidden");
    document.getElementById("menu").classList.add("menu--hidden");
    submenuOrder = ["root"];
}
function open_submenu(item){
    let clusterToHide = document.getElementById(submenuOrder[submenuOrder.length-1]);
    clusterToHide.classList.add("item-cluster--hidden");
    clusterToHide.classList.remove("item-cluster--visible");
    submenuOrder.push(item.getAttribute("id")+"Submenu");
    let clusterToShow = document.getElementById(submenuOrder[submenuOrder.length-1]);
    clusterToShow.classList.remove("item-cluster--hidden");
    clusterToShow.classList.add("item-cluster--visible");
    document.getElementById("back").classList.remove("back--hidden");
    document.getElementById("back").classList.add("back--visible");
}
function close_submenu(){
    let activecluster = document.getElementById(submenuOrder[submenuOrder.length-1]);
    let clusterToShow = document.getElementById(submenuOrder[submenuOrder.length-2]);
    if(submenuOrder[submenuOrder.length-2] == "root"){
        document.getElementById("back").classList.add("back--hidden");
        document.getElementById("back").classList.remove("back--visible");
    }
    activecluster.classList.add("item-cluster--hidden");
    activecluster.classList.remove("item-cluster--visible");
    clusterToShow.classList.remove("item-cluster--hidden");
    clusterToShow.classList.add("item-cluster--visible");
    submenuOrder.pop();
}
function input_active(){
    document.getElementById('searchIcon').classList.remove("search__icon--visible");
    document.getElementById('searchIcon').classList.add("search__icon--hidden");
}
function input_inactive(){
    document.getElementById('searchIcon').classList.add("search__icon--visible");
    document.getElementById('searchIcon').classList.remove("search__icon--hidden");
}
