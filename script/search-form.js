document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector ('.open-button');
    const searchBtn = document.querySelector ('.search-button');
    const form = document.querySelector ('.header__form-mobile');
    const closeFormBtn = document.querySelector ('.form__close-btn');

    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.add('open-form');
    })

    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      form.classList.add('open-form');
    })

    closeFormBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.remove('open-form');
    })

    // document.addEventListener('click', function(event) {
    //   var e=document.querySelector('.header__form-mobile');
    //   if (!e.contains(event.target)) e.classList.remove('open-form');
    // });
})
