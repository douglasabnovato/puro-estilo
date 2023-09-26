//scroll header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

//menu responsive
let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};

//single product
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

//details single product 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//botão sacola favoritos myIcon

//details modal sacola favoritos class modalSacola [modal] e id myModalSacola [myModal]

//details sacola favoritos
var modalFav = document.getElementById("myModalSacola");

// Get the button that opens the modal
var btnFav = document.getElementById("myBtnIcon");

// Get the <span> element that closes the modal
var spanFav = document.getElementsByClassName("closeFav")[0];

// When the user clicks the button, open the modal 
btnFav.onclick = function() {
  modalFav.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFav.onclick = function() {
  console.log("fechar")
  modalFav.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFav) {
    modalFav.style.display = "none";
  }
}

