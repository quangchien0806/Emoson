const mobi_togglers = document.querySelector(".header-menu-toggler");
const menu_mobi = document.querySelector(".menu-mobi");

mobi_togglers.addEventListener("click", () => {
  menu_mobi.classList.toggle("active");
});

const search = document.querySelector(".search");
const input_search = document.querySelector(".input-search");
search.addEventListener("click", () => {
  input_search.classList.toggle("active");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    500: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1440: {
      items: 3,
    },
    1920: {
      items: 3,
    },
  },
});
