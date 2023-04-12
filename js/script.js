const menu = document.getElementById("nav-menu");
const nav_close = document.getElementById("nav-close");
const nav_toggle = document.getElementById("nav-toggle");
const overlay = document.getElementById("overlay");
const navLink = document.querySelectorAll('.menu-link')


if(nav_toggle){
    nav_toggle.addEventListener('click', () =>{
        menu.classList.add('open-menu');
        overlay.style.display = 'block';
    })
}

if(nav_close){
    nav_close.addEventListener('click', () =>{
        menu.classList.remove('open-menu');
        overlay.style.display = 'none';
    })
}

const linkAction = () =>{
    menu.classList.remove('open-menu');
    overlay.style.display = 'none';
}
navLink.forEach(n => n.addEventListener('click', linkAction));