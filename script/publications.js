document.addEventListener('DOMContentLoaded', function() {

const delBtn = document.querySelectorAll('.categories__delete-btn');
const label = document.querySelectorAll('.categories__item');
const input = document.querySelectorAll('.categories__input');


const slider = document.querySelector('.swiper-container2')

let bookSwiper;

function bookSlider() {
  if (window.innerWidth > 767 ) {
    bookSwiper = new Swiper(slider, {
      breakpoints: {
        768: {
        slidePerView: 2,
        spaceBetween: 34,
        },
        1024: {
          spaceBetween: 50,
        },
        1280: {
          slidePerView: 3,
        }
      },
      slideClass: 'publications__books-item',
      wrapperClass: 'swiper-wrapper2',
      pagination: {
        el: 'swiper-pagination2',
        type: 'fraction'
      }
    });
  }
  if (window.innerWidth < 767) {

    if (slider.classList.contains('swiper-container-initialized')) {
      bookSwiper.destroy();
    }
  }
}

bookSlider();

window.addEventListener('resize', () => {
  bookSlider();
});

});
