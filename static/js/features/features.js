//
var swiper = new Swiper(".clients_swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: "fraction",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  easing: "ease-in-out",

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

var swiper = new Swiper(".review-swiper-content", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".previoustBtn",
    prevEl: ".nextBtn",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  easing: "ease-in-out",
});

// ? advantages list
var swiper = new Swiper(".swiper_content_advantageslist", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  easing: "ease-in-out",
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
