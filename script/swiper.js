document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
