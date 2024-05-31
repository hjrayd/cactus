const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*============BLUR HEADER==========================*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListenerListener('scroll, blurHeader')

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')

}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        
        if(scrollDown> sectionTop && scrollDown<= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr=ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    reset: true,

})

sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500})
sr.reveal(`.new__card`, {delay: 500, interval: 100})
sr.reveal(`.shop__card`, {interval: 100})
