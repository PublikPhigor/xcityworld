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



//frames on homepage and work page
const openFrame = () => {
    const frame = document.querySelector('#frame');
    const frameButton = document.querySelector('.frame-button');
    const closeFrameButton = document.querySelector('.close-btn');
    
    //display frame
    frameButton.addEventListener('click', () => {
        frame.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton.addEventListener('click', () => {
        frame.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame1 = () => {
    const frame1 = document.querySelector('#frame1');
    const frameButton1 = document.querySelector('.frame-button-1');
    const closeFrameButton1 = document.querySelector('.close-btn-1');
    
    //display frame
    frameButton1.addEventListener('click', () => {
        frame1.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton1.addEventListener('click', () => {
        frame1.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame2 = () => {
    const frame2 = document.querySelector('#frame2');
    const frameButton2 = document.querySelector('.frame-button-2');
    const closeFrameButton2 = document.querySelector('.close-btn-2');
    
    //display frame
    frameButton2.addEventListener('click', () => {
        frame2.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton2.addEventListener('click', () => {
        frame2.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame3 = () => {
    const frame3 = document.querySelector('#frame3');
    const frameButton3 = document.querySelector('.frame-button-3');
    const closeFrameButton3 = document.querySelector('.close-btn-3');
    
    //display frame
    frameButton3.addEventListener('click', () => {
        frame3.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton3.addEventListener('click', () => {
        frame3.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame4 = () => {
    const frame4 = document.querySelector('#frame4');
    const frameButton4 = document.querySelector('.frame-button-4');
    const closeFrameButton4 = document.querySelector('.close-btn-4');
    
    //display frame
    frameButton4.addEventListener('click', () => {
        frame4.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton4.addEventListener('click', () => {
        frame4.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame5 = () => {
    const frame5 = document.querySelector('#frame5');
    const frameButton5 = document.querySelector('.frame-button-5');
    const closeFrameButton5 = document.querySelector('.close-btn-5');
    
    //display frame
    frameButton5.addEventListener('click', () => {
        frame5.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton5.addEventListener('click', () => {
        frame5.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame6 = () => {
    const frame6 = document.querySelector('#frame6');
    const frameButton6 = document.querySelector('.frame-button-6');
    const closeFrameButton6 = document.querySelector('.close-btn-6');
    
    //display frame
    frameButton6.addEventListener('click', () => {
        frame6.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton6.addEventListener('click', () => {
        frame6.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame7 = () => {
    const frame7 = document.querySelector('#frame7');
    const frameButton7 = document.querySelector('.frame-button-7');
    const closeFrameButton7 = document.querySelector('.close-btn-7');
    
    //display frame
    frameButton7.addEventListener('click', () => {
        frame7.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton7.addEventListener('click', () => {
        frame7.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame8 = () => {
    const frame8 = document.querySelector('#frame8');
    const frameButton8 = document.querySelector('.frame-button-8');
    const closeFrameButton8 = document.querySelector('.close-btn-8');
    
    //display frame
    frameButton8.addEventListener('click', () => {
        frame8.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton8.addEventListener('click', () => {
        frame8.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame9 = () => {
    const frame9 = document.querySelector('#frame9');
    const frameButton9 = document.querySelector('.frame-button-9');
    const closeFrameButton9 = document.querySelector('.close-btn-9');
    
    //display frame
    frameButton9.addEventListener('click', () => {
        frame9.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton9.addEventListener('click', () => {
        frame9.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrame10 = () => {
    const frame10 = document.querySelector('#frame10');
    const frameButton10 = document.querySelector('.frame-button-10');
    const closeFrameButton10 = document.querySelector('.close-btn-10');
    
    //display frame
    frameButton10.addEventListener('click', () => {
        frame10.classList.add('active');
        overlay.classList.add('active');
    });

    //close frame
    closeFrameButton10.addEventListener('click', () => {
        frame10.classList.remove('active');
        overlay.classList.remove('active');
    });
}

const openFrames = () => {
    openFrame();
    openFrame1();
    openFrame2();
    openFrame3();
    openFrame4();
    openFrame5();
    openFrame6();
    openFrame7();
    openFrame8();
    openFrame9();
    openFrame10();
}

openFrames();