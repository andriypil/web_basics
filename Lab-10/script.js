/*let isOn = true;

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

arrowLeft.addEventListener("click", (event) => {

    if (isOn) {
        document.querySelector(".left1").style.opacity = "0";
        isOn = true;
    } else {
        document.querySelector(".left1").style.opacity = "1";
        isOn = false;
    }

});*/


let offset = 0;
const sliderLine = document.querySelector('.sliderline');

document.querySelector('.right').addEventListener('click', function () {
    offset = offset + 1347;
    if (offset > 3892) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';

});

document.querySelector('.left').addEventListener('click', function () {
    offset = offset - 1347;
    if (offset < 0) {
        offset = 2700
    }
    sliderLine.style.left = -offset + 'px';

});

