const cookieImage = document.getElementById("cookieImage");
const openOtherCookie = document.getElementById("openOtherCookie");
const cookieMessage1 = document.querySelector(".cookieMessage1");
const cookieMessage2 = document.querySelector(".cookieMessage2");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

function cookieImageClick() {
    toogleScreen();
};

function openOtherLuckyCookie() {
    cookieMessage1.classList.toggle("cookieHide");
    toogleScreen();
    cookieMessage2.classList.toggle("cookieHide");
}

function toogleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

cookieImage.addEventListener("click", cookieImageClick);
openOtherCookie.addEventListener("click", openOtherLuckyCookie);