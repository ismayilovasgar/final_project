// ! Swiper - 1
let swiper_programs = new Swiper(".programs_swiper", {
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  easing: "ease-in-out",
  navigation: {
    nextEl: ".programs_next_btn",
    prevEl: ".programs_prev_btn",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
