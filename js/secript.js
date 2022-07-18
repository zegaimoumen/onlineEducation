let navbar = document.querySelector(".nav-item");

window.onscroll = () => {
  //   menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

const swiper = new Swiper(".courses-swiper", {
  spaceBetween: 20,
  grabCursur: true,
  loop: true,
  pagination: {
    el: ".courses-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".teacher-swiper", {
  spaceBetween: 20,
  grabCursur: true,
  loop: true,
  pagination: {
    el: ".teacher-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
