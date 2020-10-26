function toggle_cartMenu(){
    let cartMenu = document.getElementById("cartMenu")
    if(cartMenu.classList.contains("cart-menu--hidden")){
        cartMenu.classList.remove("cart-menu--hidden");
        cartMenu.classList.add("cart-menu--visible");
    }
    else if(cartMenu.classList.contains("cart-menu--visible")){
        cartMenu.classList.remove("cart-menu--visible");
        cartMenu.classList.add("cart-menu--hidden");
    }
}

function toggle_menu(){
    let menu = document.getElementById("menu");
    if(menu.classList.contains("menu--hidden")){
        menu.classList.remove("menu--hidden");
        menu.classList.add("menu--visible");
    }
    else if(menu.classList.contains("menu--visible")){
        menu.classList.remove("menu--visible");
        menu.classList.add("menu--hidden");
        setTimeout(reset_menu, 400);
    }
}
function reset_menu(){
    let submenuItems = document.getElementsByClassName("menu__submenu-item");
    for(i = 0; i < submenuItems.length; i++){
        submenuItems[i].classList.add("item--hidden");
        submenuItems[i].classList.remove("item--visible");
    }
    let menuItems = document.getElementsByName("rootItem");
    for(i = 0; i < menuItems.length; i++){
        menuItems[i].classList.remove("item--hidden");
        menuItems[i].classList.add("item--visible");
    }
    document.getElementById("back").classList.remove("item--visible");
    document.getElementById("back").classList.add("item--hidden");
}
function open_submenu(item){
    itemsToHide = document.getElementsByName(item.getAttribute("name"));
    for(i = 0; i < itemsToHide.length; i++){
        itemsToHide[i].classList.remove("item--visible")
        itemsToHide[i].classList.add("item--hidden");
    } 
    document.getElementById("back").classList.remove("item--hidden")
    document.getElementById("back").classList.add("item--visible")
    itemsToShow = document.getElementsByName(item.getAttribute("id"))
    for(i = 0; i < itemsToShow.length; i++){
        itemsToShow[i].classList.remove("item--hidden");
        itemsToShow[i].classList.add("item--visible");
    } 
}
function close_submenu(){
    let itemsToHide = document.getElementsByClassName("menu__submenu-item item--visible");
    itemsToHide = document.getElementsByName(itemsToHide[0].getAttribute("name"));
    for(i = 0; i < itemsToHide.length; i++){
        itemsToHide[i].classList.remove("item--visible");
        itemsToHide[i].classList.add("item--hidden");
    } 
    let itemToShow = document.getElementById(itemsToHide[0].getAttribute("name"));
    let itemsToShow = document.getElementsByName(itemToShow.getAttribute("name"));
    if(itemToShow.getAttribute("name") == "rootItem"){
        document.getElementById("back").classList.remove("item--visible")
        document.getElementById("back").classList.add("item--hidden")
    }
    for(i = 0; i < itemsToShow.length; i++){
        itemsToShow[i].classList.remove("item--hidden");
        itemsToShow[i].classList.add("item--visible");
    } 
}
function input_active(input){
    document.querySelector('#searchIcon').style.display = "none";
}
function input_inactive(input){
    document.querySelector('#searchIcon').style.display = "inline";
}
