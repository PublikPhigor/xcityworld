const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('.header');
    const logoPad = document.querySelector('.logo-burger');

    

    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');  
        
        //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        })

        //burger toggle
        burger.classList.toggle('toggle');

        //header toggle
        header.classList.toggle('header-black');
        
        //add padding to header
        logoPad.classList.toggle('logo-burger-pad');

    });

}

navSlide();

const showSlide = () => {
    const slide = document.querySelector('.slideshow-container');
    const viewProlile = document.querySelector('.view-profile-box');
    const darkCont = document.querySelector('.slide-main-cont');
    const slideBurger = document.querySelector('.slide-burger');
    const darkBody = document.querySelector('.body');

    viewProlile.addEventListener('click',()=>{
        //display slide
        slide.classList.toggle('slide-active');


        slideBurger.addEventListener('click',()=>{
            //close slide
            slide.classList.toggle('slide-inactive');
            darkCont.classList.toggle('container-dark-inactive');

            //dark body
            darkBody.classList.toggle('white-body');
        });

    });
    
}

showSlide();

