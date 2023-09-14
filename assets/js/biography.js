const toggler = document.querySelector('.navbar-toggler');
var navbar = document.querySelector('.navbar');
var prevScroll = window.pageYOffset;

window.onscroll = function () {
    var currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        navbar.style.top = "0";
        navbar.style.background = "rgba(0, 0, 0, .8)";
    } else {
        navbar.style.top = "-50%";
        navbar.style.transition = ".5s";
        navbar.style.background = "transparent";
    }
    prevScroll = currentScroll;
}