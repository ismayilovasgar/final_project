var swiper = new Swiper(".swiper", {
  // slidesPerView: 2,
  spaceBetween: 32,
  // loopAdditionalSlides: 2,

  sliderPerGroup: 3,
  // centerSlide: "true",
  fade: "true",
  // grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },

  loop: true, // Slider'ın döngüsel olmasını sağlar
  autoplay: {
    delay: 3000, // 3 saniyede bir kaydırır
    disableOnInteraction: false, // Kullanıcı etkileşimi olsa da otomatik kaydırma devam eder
  },
  speed: 800, // Hareketin hızını ayarlar (ms cinsinden). 800 ms daha yavaş, daha yumuşak geçiş sağlar
  easing: "ease-in-out", // Yumuşak geçiş efekti ekler (diğer seçenekler: ease, ease-out vb.)
  // Sayfalama ve navigasyon eklemek için

  navigation: {
    nextEl: ".slickNext",
    prevEl: ".slickPrev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
