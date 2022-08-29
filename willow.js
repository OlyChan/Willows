
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function (){
menu_btn.classList.toggle('is-active');
mobile_menu.classList.toggle('is-active');
})

let btn = document.querySelector('.hamburger');
let menus = document.querySelector('.nav');
btn.addEventListener('click', e => {
    console.log(menus);
    console.log(menus.style);
    console.log(menus.style.display);
   
    
   
    if(menus.style.display === '' || menus.style.display === "none"){
        menus.style.display = 'block';

    }
    else{
        menus.style.display = 'none';
    }

})
