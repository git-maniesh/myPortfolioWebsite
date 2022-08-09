
const hamburger = document.querySelector(".header .navbar .nav-list .hamburger " );
const mobile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('.header.container');
const menu_item = document.querySelector('.header.navbar.nav-list.nav-list ul .a');
hamburger.addEventListener('click' , () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
        }else{
            header.style.backgroundColor = "transparent";
        }
    }
);
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
    
});
