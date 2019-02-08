// Select items from the DOM (document object model)
//All of the classes being selected can be found in index.html
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

//Selects it all, like an array
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of the Menu
let showMenu = false; //"let" allows us to change the value later, const would not.

//When someone clicks the button, toggle the menu
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!showMenu){ 
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //For each item in item.classList, add the class 'show'
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        //For each item in item.classList, add the class 'show'
        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
}