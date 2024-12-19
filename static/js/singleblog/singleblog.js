var swiper = new Swiper(".review-swiper-content", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  easing: "ease-in-out",
  navigation: {
    nextEl: ".previoustBtn",
    prevEl: ".nextBtn",
  },
});
