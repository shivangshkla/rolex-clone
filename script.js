const header = document.querySelector(".header");
const body = document.querySelector(".body")
const shadow = document.querySelector(".shadow");
const footer_btn = document.querySelector(".footer-btm");
const nav_menu = document.querySelector(".nav-menu");
const down_arrow = document.querySelector(".down-arrow");
function showMenu(){
    if(nav_menu.classList.contains("nav-opn")){
        nav_menu.classList.toggle("nav-opn");
        setTimeout(function () {
            shadow.classList.toggle("shadow-on");
            header.classList.toggle("nav-opn-header");
        }, 300); 
    } 
    else{
        header.classList.toggle("nav-opn-header");
        shadow.classList.toggle("shadow-on");
        setTimeout(function () {
            nav_menu.classList.toggle("nav-opn");
        }, 300);
    }
}
function showOptions(){
    down_arrow.classList.toggle("down-arrow-rotate");
    footer_btn.classList.toggle("acc-show");
}
window.onscroll = () => {
    if (window.scrollY > 150) {
        header.classList.add("nav-opn-header");
    } else {
        header.classList.remove("nav-opn-header");
    }
};
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  } 
