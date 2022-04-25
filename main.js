const mobi_togglers = document.querySelector(".header-menu-toggler");
const header_menu = document.querySelector(".header-menu");

mobi_togglers.addEventListener("click", () => {
  header_menu.classList.toggle("active");
});

const search = document.querySelector(".search");
const input_search = document.querySelector(".input-search");
search.addEventListener("click", () => {
  input_search.classList.toggle("active");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    100: {
      item: 1,
    },
    500: {
      item: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1920: {
      items: 2,
    },
  },
});
