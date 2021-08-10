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
})
