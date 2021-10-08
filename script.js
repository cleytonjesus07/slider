let totalimagens = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;
document.querySelector(".slider--width").style.width = "calc(100vw * " + totalimagens + " )";
document.querySelector(".slider--controls").style.height = document.querySelector(".slider").clientHeight + "px";

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalimagens - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalimagens - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let slideItemrWidth = document.querySelector(".slider--item").clientWidth;
    let newMargin = (currentSlide * slideItemrWidth);
    document.querySelector(".slider--width").style.marginLeft = "-" + newMargin + "px";
}
let timer = 5000;
let intervalId = setInterval(goNext,timer);

document.querySelector(".slider").addEventListener("mouseover",() => clearInterval(intervalId))
document.querySelector(".slider").addEventListener("mouseout",() => intervalId = setInterval(goNext,timer))