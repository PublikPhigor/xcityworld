const navSlide = () => {
    const burger = document.querySelector('.burger');
    const closeNav = document.querySelector('.nav-burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links li');
    // const header = document.querySelector('.header');
    // const logoPad = document.querySelector('.logo-burger');

    

    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.add('nav-active');  
        
        //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        })

        closeNav.addEventListener('click', () => {
            nav.classList.remove('nav-active');

        });

    });

}

navSlide();

const showSlide = () => {
    const modal = document.querySelector('.modal');
    const openButton = document.querySelector('.open-button-1');
    const closeButton = document.querySelector('.close-btn');
    const overlay = document.querySelector('#overlay');

    openButton.addEventListener('click',()=>{
        //display slide
        modal.classList.add('active');
        overlay.classList.add('active');


        closeButton.addEventListener('click',()=>{
            //close slide
            modal.classList.remove('active');
            overlay.classList.remove('active');
            
        });

    });
    
}

showSlide();

//make the header fixed after scroll of 100px
const myHeader = document.querySelector('.logo-burger');
window.onscroll = function() {
    fixedHeader();
};

function fixedHeader() {
    if (document.body.scrollTop > 100) {
        myHeader.classList.add('fixed-header');
    } else {
        myHeader.classList.remove('fixed-header');
    }
};

//the code above does not work and I don't know whyyy.