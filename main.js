
const body = document.querySelector("body");
const toggle = document.querySelector("div");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};