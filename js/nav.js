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


const overlay = document.querySelector('#overlay');

const showSlide = () => {
    const modal = document.querySelector('#modal');
    const openButton = document.querySelectorAll('.open-button-1');
    const closeButton = document.querySelector('.close-btn');

    openButton.forEach(openButton => {
        openButton.addEventListener('click', () => {
            //display slide
            modal.classList.add('active'); 
            overlay.classList.add('active');

            closeButton.addEventListener('click',()=>{
            //close slide
            modal.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlide1 = () => {
    const modal1 = document.querySelector('#modal-1');
    const openButton1 = document.querySelectorAll('.open-button-2');
    const closeButton1 = document.querySelector('.close-btn-1');

    openButton1.forEach(openButton1 => {
        openButton1.addEventListener('click', () => {
            //display slide
            modal1.classList.add('active'); 
            overlay.classList.add('active');

            closeButton1.addEventListener('click',()=>{
            //close slide
            modal1.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlide2 = () => {
    const modal2 = document.querySelector('#modal-2');
    const openButton2 = document.querySelectorAll('.open-button-3');
    const closeButton2 = document.querySelector('.close-btn-2');

    openButton2.forEach(openButton2 => {
        openButton2.addEventListener('click', () => {
            //display slide
            modal2.classList.add('active'); 
            overlay.classList.add('active');

            closeButton2.addEventListener('click',()=>{
            //close slide
            modal2.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlide3 = () => {
    const modal3 = document.querySelector('#modal-3');
    const openButton3 = document.querySelectorAll('.open-button-4');
    const closeButton3 = document.querySelector('.close-btn-3');

    openButton3.forEach(openButton3 => {
        openButton3.addEventListener('click', () => {
            //display slide
            modal3.classList.add('active'); 
            overlay.classList.add('active');

            closeButton3.addEventListener('click',()=>{
            //close slide
            modal3.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlide4 = () => {
    const modal4 = document.querySelector('#modal-4');
    const openButton4 = document.querySelectorAll('.open-button-5');
    const closeButton4 = document.querySelector('.close-btn-4');

    openButton4.forEach(openButton4 => {
        openButton4.addEventListener('click', () => {
            //display slide
            modal4.classList.add('active'); 
            overlay.classList.add('active');

            closeButton4.addEventListener('click',()=>{
            //close slide
            modal4.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlide5 = () => {
    const modal5 = document.querySelector('#modal-5');
    const openButton5 = document.querySelectorAll('.open-button-6');
    const closeButton5 = document.querySelector('.close-btn-5');

    openButton5.forEach(openButton5 => {
        openButton5.addEventListener('click', () => {
            //display slide
            modal5.classList.add('active'); 
            overlay.classList.add('active');

            closeButton5.addEventListener('click',()=>{
            //close slide
            modal5.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlide6 = () => {
    const modal6 = document.querySelector('#modal-6');
    const openButton6 = document.querySelectorAll('.open-button-7');
    const closeButton6 = document.querySelector('.close-btn-6');

    openButton6.forEach(openButton6 => {
        openButton6.addEventListener('click', () => {
            //display slide
            modal6.classList.add('active'); 
            overlay.classList.add('active');

            closeButton6.addEventListener('click',()=>{
            //close slide
            modal6.classList.remove('active');
            overlay.classList.remove('active');    
            })
        });
    });
      
}

const showSlides = () => {
    showSlide();
    showSlide1();
    showSlide2();
    showSlide3();
    showSlide4();
    showSlide5();
    showSlide6();
}

showSlides();

