// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika burger menu di klik
document.querySelector("#burger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk mengembalikan menu
const burger = document.querySelector("#burger-menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
