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

