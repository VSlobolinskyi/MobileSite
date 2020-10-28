function toggle_cart_menu(){
    document.getElementById("cartMenu").classList.toggle("cart-menu--visible")
}

function toggle_menu(){
    document.getElementById("menu").classList.toggle("menu--visible");
    setTimeout(reset_menu, 400);
}
function reset_menu(){
    let clusterToHide = document.getElementsByClassName("item-cluster--visible");
    clusterToHide[0].classList.add("item-cluster--hidden");
    clusterToHide[0].classList.remove("item-cluster--visible");
    let clusterToShow = document.getElementById("root");
    clusterToShow.classList.remove("item-cluster--hidden");
    clusterToShow.classList.add("item-cluster--visible");
    document.getElementById("back").classList.remove("back--visible");
    document.getElementById("back").classList.add("back--hidden");
}
function open_submenu(item){
    let clusterToHide = document.getElementsByClassName("item-cluster--visible");
    clusterToHide[0].classList.add("item-cluster--hidden");
    clusterToHide[0].classList.remove("item-cluster--visible");
    let clusterToShow = document.getElementById(item.getAttribute("name"));
    clusterToShow.classList.remove("item-cluster--hidden");
    clusterToShow.classList.add("item-cluster--visible");
    document.getElementById("back").classList.remove("back--hidden")
    document.getElementById("back").classList.add("back--visible")
}
function close_submenu(){
    let activecluster = document.getElementsByClassName("item-cluster--visible");
    let clusterToShow = document.getElementById(activecluster[0].getAttribute("name"));
    if(activecluster[0].getAttribute("name") == "root"){
        document.getElementById("back").classList.add("back--hidden");
        document.getElementById("back").classList.remove("back--visible");
    }
    activecluster[0].classList.add("item-cluster--hidden");
    activecluster[0].classList.remove("item-cluster--visible");
    clusterToShow.classList.remove("item-cluster--hidden");
    clusterToShow.classList.add("item-cluster--visible");
    
    
}
function input_active(){
    document.getElementById('searchIcon').classList.remove("search__icon--visible");
    document.getElementById('searchIcon').classList.add("search__icon--hidden");
    
}
function input_inactive(){
    document.getElementById('searchIcon').classList.add("search__icon--visible");
    document.getElementById('searchIcon').classList.remove("search__icon--hidden");
}
