// Desktop
// const dropdown = document.querySelector("li.drop");
// const dropdownArrow = document.querySelector("li.drop > i");

// dropdown.addEventListener("mouseover", (e) => {
//   dropdownArrow.classList.toggle("rotate_180");
// });

// todos: Start snow drops
// // Sayfadaki maksimum kar tanesi sayısı
// const maxDrops = 10;
// let currentDrops = 0;
// let snowing = false; // Kar yağışı durumunu takip etmek için bir flag
// let snowInterval; // Kar tanesi yaratma intervali
// let musicTimeout; // Müzik için zamanlayıcı
// let snowTimeout; // Kar için zamanlayıcı

// // Müzik elementini alıyoruz
// const music = document.getElementById("backgroundMusic");

// // Kar tanesi yaratma fonksiyonu
// function createDrop() {
//   if (currentDrops >= maxDrops) return; // Sayıyı sınırlıyoruz

//   currentDrops++;
//   const drop = document.createElement("img");
//   drop.classList.add("mydrop");
//   drop.src = "/static/assets/images/theme/snowflake.png";
//   drop.style.left = Math.random() * window.innerWidth + "px";
//   drop.style.animationDuration = Math.random() * 2 + 2 + "s";

//   document.getElementById("mydrops").appendChild(drop);

//   setTimeout(() => {
//     drop.remove();
//     currentDrops--;
//   }, 7000); // Kar tanesi 7 saniye sonra kaldırılır
// }

// // Kar yağışı başlatma fonksiyonu
// function startSnowing() {
//   if (snowing) return; // Eğer kar yağışı zaten aktifse bir şey yapma
//   snowing = true;

//   snowInterval = setInterval(createDrop, 1000); // Her saniyede bir kar tanesi yarat
//   console.log("Kar yağışı başladı");

//   // Kar yağışını 2.5 saniye sonra durdur
//   snowTimeout = setTimeout(() => {
//     stopSnowing();
//   }, 7000);
// }

// // Kar yağışını durdurma fonksiyonu
// function stopSnowing() {
//   clearInterval(snowInterval); // Interval'i durdur
//   snowing = false;

//   // Eklenmiş kar tanelerini temizle
//   const drops = document.querySelectorAll(".mydrop");
//   drops.forEach((drop) => drop.remove());
//   currentDrops = 0;

//   console.log("Kar yağışı durduruldu");
// }

// // Müzik çalma fonksiyonu
// function startMusic() {
//   if (music.paused) {
//     music
//       .play()
//       .then(() => {
//         console.log("Müzik başladı");
//       })
//       .catch((error) => {
//         console.error("Müzik çalma hatası:", error);
//       });

//     // Müzik 1.5 saniye sonra durdurulacak
//     musicTimeout = setTimeout(() => {
//       music.pause();
//       music.currentTime = 0; // Müziği başa sar
//       console.log("Müzik durduruldu");
//     }, 10000);
//   }
// }

// // Scroll eventini dinleyerek işlemi başlatma
// let scrolled = false; // Scroll kontrolü için flag
// window.addEventListener("scroll", () => {
//   if (!scrolled) {
//     // İlk scroll olduğunda işlemleri başlat
//     scrolled = true; // Tekrar tetiklenmesin

//     startSnowing(); // Kar yağışı başlat
//     startMusic(); // Müzik başlat
//   }
// });

// ?----------------------------------- Test Section ------------------------------------------------
const maxDrops = 10;
let currentDrops = 0;
let snowing = false; // Kar yağışı durumu
let snowInterval; // Kar tanesi yaratma intervali
// let musicTimeout; // Müzik için zamanlayıcı
let snowTimeout; // Kar için zamanlayıcı
// const music = document.getElementById("backgroundMusic");

// Kar tanesi yaratma fonksiyonu
function createDrop() {
  if (currentDrops >= maxDrops) return; // Sayıyı sınırlıyoruz

  currentDrops++;
  const drop = document.createElement("img");
  drop.classList.add("mydrop");
  drop.src = "/static/assets/images/theme/snowflake.png";
  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = Math.random() * 2 + 2 + "s";

  document.getElementById("mydrops").appendChild(drop);

  setTimeout(() => {
    drop.remove();
    currentDrops--;
  }, 4000); // Kar tanesi 7 saniye sonra kaldırılır
}

// Kar yağışı başlatma fonksiyonu
function startSnowing() {
  if (snowing) return; // Eğer kar yağışı zaten aktifse bir şey yapma
  snowing = true;

  snowInterval = setInterval(createDrop, 500); // Her 500 millisaniyede bir kar tanesi yarat
  console.log("Kar yağışı başladı");

  // Kar yağışını 7 saniye sonra durdur
  snowTimeout = setTimeout(() => {
    stopSnowing();
  }, 12000);
}

// Kar yağışını durdurma fonksiyonu
function stopSnowing() {
  clearInterval(snowInterval); // Interval'i durdur
  snowing = false;

  // Eklenmiş kar tanelerini temizle
  const drops = document.querySelectorAll(".mydrop");
  drops.forEach((drop) => drop.remove());
  currentDrops = 0;

  console.log("Kar yağışı durduruldu");
}

// Müzik çalma fonksiyonu
// function startMusic() {
//   if (music.paused) {
//     music
//       .play()
//       .then(() => {
//         console.log("Müzik başladı");
//       })
//       .catch((error) => {
//         console.error("Müzik çalma hatası:", error);
//       });

//     // Müzik 10 saniye sonra durdurulacak
//     musicTimeout = setTimeout(() => {
//       music.pause();
//       music.currentTime = 0; // Müziği başa sar
//       console.log("Müzik durduruldu");
//     }, 7000);
//   }
// }

// Sayfa yüklendiğinde scroll durumunu kontrol et
window.addEventListener("load", () => {
  // Sayfa yenilendiğinde scroll en üstteyse
  if (window.scrollY === 0) {
    // Scroll sıfırdayken, ve kullanıcı kaydırma yaparsa
    let hasScrolled = false;

    window.addEventListener("scroll", () => {
      if (!hasScrolled && window.scrollY > 0) {
        // Eğer kullanıcı sayfayı kaydırmaya başlarsa
        hasScrolled = true; // Bu sadece ilk kaydırma için geçerli
        startSnowing(); // Kar yağışı başlat
        // startMusic(); // Müzik başlat
      }
    });
  }
});

// ?----------------------------------- Test Section ------------------------------------------------

// Bars Menu
const btnHidden = document.querySelector("i.fa-solid.fa-bars");
const headerTrialBtn = document.querySelector(".headerTrialBtn");
const tabletMenu = document.getElementById("tabletMenu");
const dropdownMenu = document.querySelector(".dropdownBody");
const dropdownBtn = document.querySelector(".dropdownLink");
const popup = document.getElementById("hiddenTabletMenu");
const headerNavbar = document.getElementById("headerNavbar");
const class_arrow = document.querySelector(".dropdownLink i");

btnHidden.addEventListener("click", (e) => {
  btnHidden.classList.toggle("fa-xmark");
  // alert(tabletMenu);
  tabletMenu.classList.toggle("show");
  // headerTrialBtn.classList.toggle("hidden");
});

dropdownBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("active");
});

class_arrow.addEventListener("click", (e) => {
  console.log("+++");
  class_arrow.classList.toggle("rotate_180");
});

function clickOutside(e) {
  if (
    !e.composedPath().includes(headerNavbar) &&
    tabletMenu.classList.contains("show")
  ) {
    tabletMenu.classList.toggle("show");
    btnHidden.classList.toggle("fa-xmark");
  }
}
// document.addEventListener("click", clickOutside);

// ? Footer
const footer_nav = document.querySelector(
  ".footer__col:nth-child(1) .footer__category"
);
const footer_nav__icon = document.querySelector(
  ".footer__col:nth-child(1) .footer__category i"
);
const footer_menu = document.querySelector(".footer__menu ul");

footer_nav.addEventListener("click", (e) => {
  footer_menu.classList.toggle("active");
  footer_nav__icon.classList.toggle("rotate");
});

// Chnage Theme
const toggle_button = document.getElementById("dark-change");
const light_images = document.querySelectorAll(".some-icon-light");
const dark_images = document.querySelectorAll(".some-icon-dark");

toggle_button.addEventListener("click", function () {
  document.body.classList.add("dark");
  toggle_button.classList.toggle("active");
});

function hidden_all_item(items) {
  items.forEach((element) => {
    element.style.display = "none";
  });
}

function show_all_item(items) {
  items.forEach((element) => {
    element.style.display = "block";
  });
}

// Dark / light mode
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

toggle_button.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  // add change theme effect
  document.body.classList.add("fade-out");

  setTimeout(() => {
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }

    document.body.classList.remove("fade-out");
  }, 200);
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  toggle_button.classList.add("active");

  localStorage.setItem("theme", "dark");
  hidden_all_item(light_images);
  show_all_item(dark_images);
}

function setLightMode() {
  document.body.removeAttribute("theme");
  toggle_button.classList.remove("active");
  localStorage.setItem("theme", "light");
  hidden_all_item(dark_images);
  show_all_item(light_images);
}

//
document
  .querySelector(".button_arrow_bottom")
  .addEventListener("click", function () {
    const footer = document.getElementById("main_footer");
    const footerPosition = footer.offsetTop; // Footer'ın dikey pozisyonu
    const scrollStep = 100; // Her adımda kaydırılacak piksel
    const delay = 15; // Adımlar arasındaki süre (ms)

    const interval = setInterval(() => {
      // Mevcut kaydırma pozisyonunu al
      const currentScroll = window.scrollY;

      // Eğer footer'a ulaşıldıysa durdur
      if (
        currentScroll + window.innerHeight >= document.body.scrollHeight ||
        currentScroll >= footerPosition
      ) {
        clearInterval(interval);
      } else {
        // Her adımda kaydırmayı artır
        window.scrollBy(0, scrollStep);
      }
    }, delay);
  });

//? Send Message Form Code
// Handle form submission via Fetch API
const baseMailForms = document.querySelectorAll(".footer_subs_form");
baseMailForms.forEach((element) => {
  element.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const csrfToken = document.querySelector(
      "[name=csrfmiddlewaretoken]"
    ).value; // CSRF token

    // Send form data using Fetch API
    fetch("http://127.0.0.1:8000/sendmail/", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken, // Include CSRF token in the request header
        Accept: "application/json",
      },
      body: formData, // Send the form data
    })
      .then((response) => response.json())
      .then((data) => {
        const messageDiv = document.querySelector(
          `#${element.id} ~ .result_email_msg`
        );
        messageDiv.classList.add("active");
        if (data.status === "success") {
          messageDiv.innerHTML = `<p style="color:green;">${data.message}</p>`;
          element.reset(); // Reset the form on success
        } else {
          messageDiv.innerHTML = `<p style="color:red;">${data.message}</p>`;
        }

        setTimeout(() => {
          messageDiv.classList.remove("active");
        }, 1500);
      })
      .catch((error) => {
        const messageDiv = document.querySelector(
          `#${element.id} ~ .result_email_msg`
        );

        messageDiv.innerHTML = "";
        messageDiv.classList.add("active");
        messageDiv.innerHTML = `<p style="color:red;">There was an error. Please try again.</p>`;
        setTimeout(() => {
          messageDiv.classList.remove("active");
        }, 1500);
      });
  });
});

// swiper cards in navbar
var swiper = new Swiper(".swiper_content_navbar", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
