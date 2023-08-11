const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Hide menu after clicking a link
menulinks.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menulinks.classList.remove('active');
});

// Show active menu when scrolling
const highlightMenu = () => {
    const homeMenu = document.querySelector('.home-page');
    const pushMenu = document.querySelector('.push-page');
    const pullMenu = document.querySelector('.pull-page');
    const legsMenu = document.querySelector('.legs-page');
    const absMenu = document.querySelector('.abs-page');
    const gymMusicMenu = document.querySelector('.gymMusic-page');
    let scrollPos = window.scrollY;
};

