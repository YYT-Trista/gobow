/* 幻燈片輪播邏輯 */
let currentIndex = 0; 
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (!slides.length) return;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentIndex = (n + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentIndex + n);
}

function currentSlide(n) {
    showSlide(n);
}

let autoTimer = setInterval(() => {
    changeSlide(1);
}, 5000);
