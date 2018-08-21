// Carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dots image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.setInterval(nextSlide, 5000)

function nextSlide() {
  plusSlides(1)
}

// linking prev and next buttons with jquery
$('a.prev').on('click', function(e) {
  plusSlides(-1)
})
$('a.next').on('click', function(e) {
  plusSlides(1)
})

// dot buttons with jquery
$('span.dot').on('click', function(e){
  currentSlide(this.attributes.value.nodeValue)
})