var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("MySlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length / 2; i++) {
        slides[i].style.display = "none";
        slides[i + 3].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length / 2) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex + 2].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}