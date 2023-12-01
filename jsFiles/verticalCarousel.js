document.querySelector("body").addEventListener("keydown", function (event) {
  if (
    event.key == "ArrowUp" &&
    document.getElementsByClassName("verticalCardActive").length > 0
  ) {
    event.preventDefault();
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    console.log(verticalCardActive);
    if (verticalCardActive.previousElementSibling)
      verticalCardActive.previousElementSibling.classList.add(
        "verticalCardActive"
      );
    verticalCardActive.classList.remove("verticalCardActive");
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    console.log(verticalCardActive);
    $(".verticalCarousel").scrollTo(
      verticalCardActive.previousElementSibling,
      800
    );
    return false;
  }
  if (
    event.key == "ArrowDown" &&
    document.getElementsByClassName("verticalCardActive").length > 0
  ) {
    event.preventDefault();
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    $(".verticalCarousel").scrollTo(".verticalCardActive", 800);
    if (verticalCardActive.nextElementSibling)
      verticalCardActive.nextElementSibling.classList.add("verticalCardActive");
    verticalCardActive.classList.remove("verticalCardActive");
    return false;
  } else if (event.key == "ArrowDown") {
    event.preventDefault();
    element[0].classList.add("verticalCardActive"); //If nothing is selected, use element[element.legth − 1] for the last element]
    return false;
  }
});
