document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.event__more-btn');

  btn.addEventListener('click', function () {
    document.querySelectorAll('.event__item').forEach(function(openAll) {
      openAll.style.display = "block"
    })
    btn.style.display = "none"
  })
})

 const slider1 = document.querySelector('.swiper-container1')

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider1.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider1, {
      slidePerView: 1,
      slideClass: 'event__item',
      wrapperClass: 'swiper-wrapper1',
      pagination: {
        el:'swiper-pagination1',
        type: 'bullets',
      }
    });

    slider1.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider1.dataset.mobile = 'false';

    if (slider1.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});



