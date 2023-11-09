$(document).ready(function(){
  $(".dropdown").hover(function(){
     $(this).children(".dropdown-content").slideDown(200);
  }, function(){
     $(this).children(".dropdown-content").slideUp(200);
  });
 });
//slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
slides[currentIndex].style.opacity = 0;
    currentIndex = index;
    slides[currentIndex].style.opacity = 1;
}

function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
}

// Run nextSlide function every 3 seconds
setInterval(nextSlide, 3000);