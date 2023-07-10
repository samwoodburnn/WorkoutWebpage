const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('.home-page');
    const pushMenu = document.querySelector('.push-page');
    const pullMenu = document.querySelector('.pull-page');    
    const legsMenu = document.querySelector('.legs-page');  
    const absMenu = document.querySelector('.abs-page'); 
    let scollPos = windor.scrollY;

    //adds the highlight class to my menu items
  //  if(window.innerWidth > 960 )
}