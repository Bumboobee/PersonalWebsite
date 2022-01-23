const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector(".navbarr__menu");

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
ScrollReveal({ 
    reset: true, 
    distance: '60px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('.about', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.content', { delay: 400, origin: 'left'});
ScrollReveal().reveal('.skills', { delay: 900, origin: 'left'});
ScrollReveal().reveal('.main__img--container', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.work, .time.right-side', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.time', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.title', { delay: 400, origin: 'right'});