let swiperSlides = document.querySelector(".swiper-container0").querySelectorAll(".swiper-slide");
let modal = document.querySelector(".gallery_modal-container");
let modalBtn = modal.querySelector(".modal_close-btn");
swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    console.log(modal.querySelector("img"));
    modal.classList.add("modal-active");
    modal.querySelector("img").setAttribute("src", link);
  })
})
modalBtn.addEventListener("click", function() {
  modal.classList.remove("modal-active");
});
