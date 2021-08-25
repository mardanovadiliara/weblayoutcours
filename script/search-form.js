document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector ('.search-button');
    const form = document.querySelector ('.header__form');
    const closeFormBtn = document.querySelector ('.form__close-btn');

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.add('open-form');
    })

    closeFormBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.remove('open-form');
    })

    document.addEventListener('click', function(event) {
      var e=document.querySelector('.header__form');
      if (!e.contains(event.target)) e.classList.remove('open-form');
    });
})
