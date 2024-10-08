let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//responsive
// burger = document.querySelector('.burger')
// navbar = document.querySelector('.navbar')
// resp = document.querySelector('.resp')
// burger.addEventListener('click', ()=>{
//   resp.classList.toggle('v-class');
//   navbar.classList.toggle('h-nav');
// })

// const commanpg = document.querySelector('.commonclass')
// fetch('/red.html')
// .then(res=>res.text())
// .then(data=>{
//   commanpg.innerHTML = data
// })