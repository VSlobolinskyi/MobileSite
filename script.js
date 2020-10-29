var submenuOrder = ["root"];

function toggle_cart_menu(){
    document.getElementById("cartMenu").classList.remove("cart-menu--undisplay");
    document.getElementById("cartMenu").classList.toggle("cart-menu--visible");
    setTimeout(cart_menu_undisplay, 400);
}
function cart_menu_undisplay(){
    if(!document.getElementById("cartMenu").classList.contains("cart-menu--visible")){
        document.getElementById("cartMenu").classList.add("cart-menu--undisplay");
    }
}
function toggle_menu(){
    document.getElementById("menu").classList.remove("menu--undisplay");
    document.getElementById("menu").classList.toggle("menu--visible");
    if(!(document.getElementById("menu").classList.contains("menu--visible"))){
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
    document.getElementById("menu").classList.add("menu--undisplay");
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
