document.addEventListener('DOMContentLoaded', function() {


  const btn = document.querySelector('.categories__top');
  const blocks = document.querySelectorAll('.categories__item');

  btn.addEventListener('click', () => {
    if (!btn.classList.contains('categories-active')) {
      blocks.forEach(el => {
        el.classList.add('categories__item-active');
      });

      btn.classList.add('categories-active');
    } else {
      blocks.forEach(el => {
        el.classList.remove('categories__item-active');
        if (el.querySelector('input').checked) {
          el.classList.add('categories__item-active');
        }
      });

      btn.classList.remove('categories-active');
    }

  });

const bookSwiper = document.querySelector('.swiper-container2')

let mySwiper2;

function desctopSlider() {
    if (window.innerWidth > 767 && bookSwiper.dataset.mobile == 'true') {
      mySwiper2 = new Swiper(bookSwiper, {
        slidesPerView: 2,
        spaceBetween: 34,
        slideClass: 'publications__books-item',
        wrapperClass: 'swiper-wrapper2',
        pagination: {
          el: '.swiper-pagination2',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 34,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 44
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 35
          },
          1710: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
      });

      bookSwiper.dataset.mobile = 'false';
    }

    if (window.innerWidth < 767) {
      bookSwiper.dataset.mobile = 'true';

      if (bookSwiper.classList.contains('swiper-container-initialized')) {
        mySwiper2.destroy();
      }
    }
  }

  desctopSlider();

  window.addEventListener('resize', () => {
    desctopSlider();
  });
});
