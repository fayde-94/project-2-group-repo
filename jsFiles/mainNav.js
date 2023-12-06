let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  $('#helpImg').removeClass("helpActive");
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
  if (slides.length !== 0) {
    if (n > slides.length) {
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
function loadMainCategoties(slideIndex) {
  const mainCategoriesSwitch = (slideIndex) =>
    ({
      1: "notifications.html",
      10: "notifications.html",
      2: "entertainment.html",
      3: "contacts.html",
      4: "communities.html",
      5: "smartLoft.html",
      6: "schedule.html",
      7: "gallery.html",
      8: "services.html",
      9: "settings.html",
      0: "settings.html",
    }[slideIndex]);
  $("#mainCategoties").load(mainCategoriesSwitch(slideIndex));
}
showSlides(5);
//    "1":"smartLoft.html",
// "10":"smartLoft.html",
// "2":"schedule.html",
// "3":"gallery.html",
// "4":"services.html",
// "5":"settings.html",
// "6":"notifications.html",
// "7":"entertainment.html",
// "8":"contacts.html",
// "9":"communities.html",
// "0":"communities.html"
