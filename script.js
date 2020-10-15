
function main(){
    let width = window.innerWidth;
    let height = window.innerHeight;

    let renome1 = document.querySelector('img.logo-header');
    let icons = document.querySelector("div.icons");
    icons.style.left = window.innerWidth*0.93-icons.offsetWidth-parseInt(getComputedStyle(renome1).width) + "px";

    let img = document.querySelector('img.collage1');
    let wrapper = document.querySelector('div.wrapper')
    wrapper.style.height =  getComputedStyle(img).height;
    wrapper.style.width = getComputedStyle(img).width;
    let arrows = document.querySelector("div.arrows");
    arrows.style.bottom = parseInt(getComputedStyle(img).height)*0.1;

    let renome2 = document.querySelector('img.logo-footer');
    renome2.style.paddingLeft = (window.innerWidth*0.96 - parseInt(getComputedStyle(renome2).width))/2 +"px";

    let footerIcons = document.querySelector('div.footer-icons');
    footerIcons.style.paddingLeft = (window.innerWidth*0.96 - parseInt(getComputedStyle(footerIcons).width))/2 +"px";

    let c2Img2 = document.querySelector('img.c2-img2');
    c2Img2.style.bottom =  parseInt(getComputedStyle(c2Img2).height)*0.21+"px";
}   

function get_menu(menu){
    if(menu.id == "inactive"){
        document.querySelector('ul.menu').style.display = "inline-block";
        menu.id = "active";
    }
    else if(menu.id == "active"){
        document.querySelector('ul.menu').style.display = "none";
        menu.id = "inactive";
    }
}