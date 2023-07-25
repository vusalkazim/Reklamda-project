const navBars = document.querySelector(".btn-bars");
const navResponse = document.querySelector(".nav-responsive");
const barsClose = document.querySelector(".bars-close");
const leftNavClose = document.querySelector(".logo");
const QeydiyyaT = document.querySelector(".qeydiyyat");
const formCloseBtn = document.querySelector(".form-close-btn");
const formOpenBtn = document.querySelector(".btn_signIn");
const BtnWatchlist = document.querySelector(".btn_watchlist");
const WatchList = document.querySelector(".watchlist_menu");
const BtnWatchlistClose = document.querySelector(".watchlist_close_menu");
const Delete = document.querySelector(".delete");
const Delete2 = document.querySelector(".delete2");
const Delete4 = document.querySelector(".delete4");
const Delete3 = document.querySelector(".delete3");
const Movie = document.querySelector(".movie");
const Movie2 = document.querySelector(".movie2");
const Movie3 = document.querySelector(".movie3");
const Movie4 = document.querySelector(".movie4");
const MovieClose = document.querySelector(".movie--close");




Delete.addEventListener("click",function(){
  Movie.classList.add("movie--close");
})
Delete2.addEventListener("click",function(){
  Movie2.classList.add("movie--close2");
})
Delete3.addEventListener("click",function(){
  Movie3.classList.add("movie--close3");
})
Delete4.addEventListener("click",function(){
  Movie4.classList.add("movie--close4");
})
BtnWatchlist.addEventListener("click",function(){
  WatchList.classList.add('watchlist_menu-open');
})
BtnWatchlistClose.addEventListener("click",function(){
  WatchList.classList.remove('watchlist_menu-open');
})
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
