let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector("ul");
let logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
    ul.classList.toggle('show');
});