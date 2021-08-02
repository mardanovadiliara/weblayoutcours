const projectSwiper = new Swiper('.swiper-container3', {
  direction: 'horizontal',
  wrapperClass: 'swiper-wrapper3',

  slidesPerView: 1,
  slideClass: 'projects__partners-item',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 2,
      spaceBetween:20
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 33
    },

    1710: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

const tollBtn = document.querySelectorAll('.tooltip');
const card = document.querySelectorAll('.tooltip__card');
const closeToolBtn = document.querySelectorAll('.tooltip__close');
const tooltip = document.querySelectorAll('.tooltip__container')


