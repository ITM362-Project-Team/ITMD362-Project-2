$(document).ready(function(){
  $(".dropdown").hover(function(){
     $(this).children(".dropdown-content").slideDown(200);
  }, function(){
     $(this).children(".dropdown-content").slideUp(200);
  });
 });
//slider
var slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}