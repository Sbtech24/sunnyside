const menuButton=document.querySelector('.menu-button');
const navLinks=document.querySelector('.header__nav');

menuButton.addEventListener('click',()=>{
    // if it is scale(1) excute scale(0)else navlinks should be scale(1)
    if(navLinks.style.transform==='scaleY(1)'){
        navLinks.style.transform='scaleY(0)';
    }else{
        navLinks.style.transform='scaleY(1)';
    }
});