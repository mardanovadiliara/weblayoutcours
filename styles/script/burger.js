document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector ('.header__top-nav');
    const burger = document.querySelector ('.burger');
    const close = document.querySelector ('.close-btn');

    burger.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.add('burger--open');
    })

    close.addEventListener('click', function(e) {
        navMenu.classList.remove('burger--open');
    })
})
