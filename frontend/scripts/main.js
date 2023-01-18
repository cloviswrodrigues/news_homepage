const btnMenu = document.querySelector(".btn-menu");
const body = document.querySelector("body");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuClose = document.querySelector(".icon-menu-close");
const menuMobile = document.querySelector(".header__nav-links");

function openMenu(event) {
  body.classList.toggle("darken");
  iconMenu.classList.toggle("d-none");
  iconMenuClose.classList.toggle("d-none");
  menuMobile.classList.toggle("active-menu");
}

btnMenu.addEventListener("click", openMenu);
