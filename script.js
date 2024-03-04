let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}



let slideIndexs = 0;
      showSlidess();

      function showSlidess() {
        let i;
        let slides = document.getElementsByClassName("mySlidess");
        let dots = document.getElementsByClassName("dotst");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndexs++;
        if (slideIndexs > slides.length) {
          slideIndexs = 1;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" actives", "");
        }
        slides[slideIndexs - 1].style.display = "block";
        dots[slideIndexs - 1].className += " actives";
        setTimeout(showSlidess, 4000); // Change image every 2 seconds
      }








/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("buttonClick").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-lang')) {
    var dropdowns = document.getElementsByClassName("nav-down-language");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


