// JavaScript Document
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');


function showSlide(index) {
  const totalSlides = slides.length;
  currentIndex = (index + totalSlides) % totalSlides;
  document.querySelector('.slider').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}