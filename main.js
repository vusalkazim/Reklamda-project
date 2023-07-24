const navBars = document.querySelector(".btn-bars");
const navResponse = document.querySelector(".nav-responsive");
const barsClose = document.querySelector(".bars-close");
const leftNavClose = document.querySelector(".logo");
const QeydiyyaT = document.querySelector(".qeydiyyat");
const formCloseBtn = document.querySelector(".form-close-btn");
const formOpenBtn = document.querySelector(".btn_signIn");


navBars.addEventListener("click",function(){
  navResponse.classList.add('nav-responsive-open');
  leftNavClose.classList.add("left_nav-close");

})
barsClose.addEventListener("click",function(){
  navResponse.classList.remove('nav-responsive-open');
  leftNavClose.classList.remove("left_nav-close");
})
formOpenBtn.addEventListener("click",function(){
  QeydiyyaT.classList.add("qeydiyyat-open")
})
formCloseBtn.addEventListener("click",function(){
  QeydiyyaT.classList.remove("qeydiyyat-open")
})





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
