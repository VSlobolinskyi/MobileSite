function toggle_cartMenu(){
    document.getElementById("cartMenu").classList.toggle("cart-menu--visible")
}

function toggle_menu(){
    document.getElementById("menu").classList.toggle("menu--visible");
    setTimeout(reset_menu, 400);
}
function reset_menu(){
    let clasterToHide = document.getElementsByClassName("item-claster--visible");
    clasterToHide[0].classList.add("item-claster--hidden");
    clasterToHide[0].classList.remove("item-claster--visible");
    let clasterToShow = document.getElementById("root");
    clasterToShow.classList.remove("item-claster--hidden");
    clasterToShow.classList.add("item-claster--visible");
    document.getElementById("back").classList.remove("back--visible");
    document.getElementById("back").classList.add("back--hidden");
}
function open_submenu(item){
    let clasterToHide = document.getElementsByClassName("item-claster--visible");
    clasterToHide[0].classList.add("item-claster--hidden");
    clasterToHide[0].classList.remove("item-claster--visible");
    let clasterToShow = document.getElementById(item.getAttribute("name"));
    clasterToShow.classList.remove("item-claster--hidden");
    clasterToShow.classList.add("item-claster--visible");
    document.getElementById("back").classList.remove("back--hidden")
    document.getElementById("back").classList.add("back--visible")
}
function close_submenu(){
    let activeClaster = document.getElementsByClassName("item-claster--visible");
    let clasterToShow = document.getElementById(activeClaster[0].getAttribute("name"));
    if(activeClaster[0].getAttribute("name") == "root"){
        document.getElementById("back").classList.add("back--hidden");
        document.getElementById("back").classList.remove("back--visible");
    }
    activeClaster[0].classList.add("item-claster--hidden");
    activeClaster[0].classList.remove("item-claster--visible");
    clasterToShow.classList.remove("item-claster--hidden");
    clasterToShow.classList.add("item-claster--visible");
    
    
}
function input_active(){
    document.getElementById('searchIcon').classList.remove("search__icon--visible");
    document.getElementById('searchIcon').classList.add("search__icon--hidden");
    
}
function input_inactive(){
    document.getElementById('searchIcon').classList.add("search__icon--visible");
    document.getElementById('searchIcon').classList.remove("search__icon--hidden");
}
