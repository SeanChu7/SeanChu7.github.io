var slideIndex = -1;
var timer;
showSlides();

// Next/previous controls
function plusSlides(n) {
  window.clearTimeout(timer);
  showSlides(slideIndex += n-1);
}

// Thumbnail image controls
function currentSlide(n) {
  window.clearTimeout(timer);
  showSlides(slideIndex = n-1);
}

function showSlides() {
    var i;
    slideIndex++;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0){ slideIndex = slides.length-1}
    slides[slideIndex].style.display = "block";
    timer = setTimeout(showSlides, 5000); 
  }