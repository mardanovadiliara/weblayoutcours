document.addEventListener('DOMContentLoaded', function() {

const delBtn = document.querySelectorAll('.categories__delete-btn');
const label = document.querySelectorAll('.categories__item');
const input = document.querySelectorAll('.categories__input');


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


// const Swiper2 = new Swiper('.swiper-container3', {
//   slidePerView: 1,
//   slideClass: 'projects__partners-item',
//   wrapperClass: 'swiper-wrapper3',
//   pagination: {
//     el: '.swiper-pagination2',
//     type: 'fraction'
//   },
// });

// const slider = document.querySelector('.swiper-container1')

// let mySwiper;

// function mobileSlider() {
//   if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
//     mySwiper = new Swiper(slider, {
//       slidePerView: 1,
//       slideClass: 'event__item',
//       wrapperClass: 'swiper-wrapper1',
//       pagination: {
//         el:'swiper-pagination',
//         type: 'bullets',
//       }
//     });

//     slider.dataset.mobile = 'true';
//   }

//   if (window.innerWidth > 767) {
//     slider.dataset.mobile = 'false';

//     if (slider.classList.contains('swiper-container-initialized')) {
//       mySwiper.destroy();
//     }
//   }
// }

// mobileSlider();

// window.addEventListener('resize', () => {
//   mobileSlider();
// });
});
