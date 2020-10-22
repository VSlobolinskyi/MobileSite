

function get_menu(bars){
    let menu = document.getElementById('menu');
    if(bars.dataset.state == "closed"){
        menu.style.opacity = "1";
        menu.style.top = "100px";
        document.getElementById("limenu").style.color = "#985E5B";
        bars.dataset.active = "liMenu";
        bars.dataset.state = "open";
    }
    else if(bars.dataset.state == "open"){
        menu.style.opacity = "0";
        menu.style.top = "80px";
        bars.dataset.state = "closed";
        document.getElementById("limenu").style.color = "black";
    }
}

function get_submenu(div){
    document.querySelector("#searchContainer").style.display = "none";
    var liArray = document.getElementsByClassName("menu-item");
    let divID = div.id;
    let liID = divID.slice(3); 
    for(i = 0; i < liArray["length"]; i++){
        liArray[i].style.display = "none";
        if(liArray[i].id.slice(1) == liID+"-submenu" || liArray[i].id == "li"+liID){
            liArray[i].style.display = "block";
        }
    } 
    let arrowContainer = document.querySelector("#arrowContainerFeatures")
    document.getElementById('menu').style.height = "1200px";
    arrowContainer.style.left = "3%";
    arrowContainer.style.right = "auto";
    document.querySelector("#arrowFeatures").className = "fas fa-angle-left li-arrow";
    document.querySelector("#lifeatures").style.textAlign = "right";
    document.querySelector("#lifeatures").innerText = "BACK  ";
    document.querySelector("#home").style.height = document.querySelector("#menu").offsetHeight + "px";


}
function input_active(input){
    document.querySelector('#searchIcon').style.display = "none";
}
function input_inactive(input){
    document.querySelector('#searchIcon').style.display = "inline";
}
