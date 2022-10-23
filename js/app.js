const themeicon = document.querySelector(".themeicon");
const body = document.querySelector('body');
themeicon.addEventListener("click", function () {
  body.classList.toggle('lighttheme');
});
