//menu responsive
const header = document.querySelector("header");

const up_arrow = document.querySelector(".up-arrow");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};

//single-product
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};

smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};
