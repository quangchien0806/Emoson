const mobi_togglers = document.querySelector(".header-menu-toggler");
const menu_mobi = document.querySelector(".menu-mobi");

mobi_togglers.addEventListener("click", () => {
  menu_mobi.classList.toggle("active");
});
