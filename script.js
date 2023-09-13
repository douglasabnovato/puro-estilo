//botão do menu
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

/* botão voltar ao topo */
var btn = document.querySelector("#up-arrow");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});