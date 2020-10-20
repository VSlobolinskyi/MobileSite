
function main(){
    let renome1 = document.querySelector("#headerImg");
    let icons = document.querySelector("#headerIcons");
    icons.style.left = window.innerWidth*0.94-icons.offsetWidth-parseInt(getComputedStyle(renome1).width) + "px";
    icons.style.visibility = "visible";

    let home = document.querySelector("#home");
    let collage1 = document.querySelector("#collage1");
    home.style.height = collage1.offsetHeight + "px";

    let img = document.querySelector('#c1Img');
    let wrapper = document.querySelector('#wrapper');
    wrapper.style.height =  getComputedStyle(img).height;
    wrapper.style.width = getComputedStyle(img).width;
    let arrows = document.querySelector("#c1Arrows");
    let arrowsBottom = parseInt(getComputedStyle(img).height)*0.1;
    arrows.style.bottom = arrowsBottom + "px";
    let c1Text = document.querySelector("#c1Text");
    c1Text.style.bottom = arrowsBottom + arrows.offsetHeight + "px";
    c1Text.style.width = img.offsetWidth - window.innerWidth*0.05 + "px";

    let renome2 = document.querySelector('#footerLogo');
    renome2.style.paddingLeft = (window.innerWidth*0.96 - parseInt(getComputedStyle(renome2).width))/2 +"px";
    let footerIcons = document.querySelector('#footerIcons');
    footerIcons.style.paddingLeft = (window.innerWidth*0.96 - parseInt(getComputedStyle(footerIcons).width))/2 +"px";

    let c2Img2 = document.querySelector('#c2Img2');
    c2Img2.style.bottom =  parseInt(getComputedStyle(c2Img2).height)*0.21+"px";
}   

function get_menu(bars){
    if(bars.dataset.state == "inactive"){
        document.querySelector('#menu').style.display = "inline-block";
        document.querySelector('#collage1').style.display = "none";
        bars.dataset.state = "active";
        document.querySelector("#liMenu").style.color = "#985E5B";
        bars.dataset.active = "liMenu";
        document.querySelector("#home").style.height = document.querySelector('ul.menu').offsetHeight + 16 + "px";
    }
    else if(bars.dataset.state == "active"){
        document.querySelector('#menu').style.display = "none";
        document.querySelector('#collage1').style.display = "block";
        bars.dataset.state = "inactive";
        document.querySelector("#home").style.height = document.querySelector('div.collage1').offsetHeight + "px";
        document.querySelector("#liMenu").style.color = "black";
        bars.dataset.active = "liHome";
    }
}

function get_submenu(div){
    document.querySelector("#searchContainer").style.display = "none";
    var liArray = document.getElementsByClassName("menu-item");
    let divID = div.id;
    let liID = divID.slice(3); 
    for(i = 0; i < liArray["length"]; i++){
        liArray[i].style.display = "none";
        console.log(liArray[i].id);
        if(liArray[i].id.slice(1) == liID+"-submenu" || liArray[i].id == "li"+liID){
            liArray[i].style.display = "block";
        }
    } 
    let arrowContainer = document.querySelector("#arrowContainerFeatures")
    
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
