document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.event__more-btn');

  btn.addEventListener('click', function () {
    document.querySelectorAll('.event__item').forEach(function(openAll) {
      openAll.style.display = "block"
    })
    btn.style.display = "none"
  })
})

 const slider = document.querySelector('.swiper-container1')

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidePerView: 1,
      slideClass: 'event__item',
      wrapperClass: 'swiper-wrapper1',
      pagination: {
        el:'swiper-pagination1',
        type: 'bullets',
      }
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});



