document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container0', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination0',
          type: 'fraction'
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next0',
          prevEl: '.swiper-button-prev0',
        },

        breakpoints: {

          767: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 33
          },

          1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 33
          },

          1280: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 33
          },

          1710: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 50
          }
        }
      });
})
