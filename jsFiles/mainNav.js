let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(n);
  let i;
  let slides = document.getElementsByClassName("navSlideimg");
  let dots = document.getElementsByClassName("dot");
  //console.log(slides)
  if(slides.length!==0){
 if (n > slides.length ) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotActive", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dotActive";
}
loadMainCategoties(n);
}
function loadMainCategoties(slideIndex){
  const mainCategoriesSwitch=(slideIndex)=>({
    "1":"smartLoft.html",
    "10":"smartLoft.html",
    "2":"schedule.html",
    "3":"gallery.html",
    "4":"services.html",
    "5":"settings.html",
    "6":"notifications.html",
    "7":"entertainment.html",
    "8":"contacts.html",
    "9":"communities.html",
    "0":"communities.html"

  })[slideIndex]
  $("#mainCategoties").load(mainCategoriesSwitch(slideIndex));

}