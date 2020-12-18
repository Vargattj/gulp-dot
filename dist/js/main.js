/*! teste-dot v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
const accordion = document.querySelectorAll(".accordion-container");

accordion.forEach((element) => {
  let accordion = element.querySelector(".accordion");
  let accordionIcon = element.querySelector(".accordion-icon");
  var accordionContent = element.lastElementChild;

  accordion.addEventListener("click", () => {
    accordionContent.classList.toggle("active");
    accordion.classList.toggle("active-accordion");

    accordionIcon.classList.toggle("rotate");
  });
});

const links = document.querySelectorAll(".scrollToSection");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

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
