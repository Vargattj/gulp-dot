var mySwiper = new Swiper(".section-one", {
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".button-next-desk",
        prevEl: ".button-prev-desk",
      },
    },
  },
});

var myHeaderSwiper = new Swiper(".swiper-header", {
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});
