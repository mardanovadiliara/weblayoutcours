document.addEventListener('DOMContentLoaded', function () {

  const openBtn = document.querySelector ('.open-button');
  const searchBtn = document.querySelector ('.search-button');
  const form = document.querySelector ('.header__form-mobile');
  const closeFormBtn = document.querySelector ('.form__close-btn');

  let isOpened = false;

  openBtn.addEventListener('click', function(e) {
    e.preventDefault();

    form.classList.add('open-form');

    isOpened = true;
  })

  searchBtn.addEventListener('click', function(e) {
    e.preventDefault();

    form.classList.add('open-form');

    isOpened = true;
  })

  closeFormBtn.addEventListener('click', function(e) {
    e.preventDefault();

    form.classList.remove('open-form');

    isOpened = false;
  })
});

  document.addEventListener('click', function(e) {
    console.log(e.target.classList.contains('header__form-mobile'))

    console.log(e.target.closest('.header__form-mobile'))

    if (!e.target.classList.contains('header__form-mobile') && !e.target.classList.contains('open-button') && !e.target.closest('.header__form-mobile') && isOpened) {
      form.classList.remove('open-form');
    }
  });


