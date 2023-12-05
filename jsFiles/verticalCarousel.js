const movementDelay = 400; //movementDelay variable

//When detecting keypresses:
document.querySelector("body").addEventListener("keydown", function (event) {
  //If the keypress is up
  if (
    event.key == "ArrowUp" &&
    document.getElementsByClassName("verticalCardActive").length > 0
  ) {
    updateAdjCardsBefore(); //Update adjacent card class (sizes)
    event.preventDefault();
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    console.log(verticalCardActive);
    // If it is the top, call for help, otherwise assign the previous sibling as the next active card
    if (verticalCardActive.previousElementSibling) {
      verticalCardActive.previousElementSibling.classList.add(
        "verticalCardActive"
      );
    } else {
      callForHelp();
    }
    //Relocate where the active card is
    verticalCardActive.classList.remove("verticalCardActive");
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    console.log(verticalCardActive);
    //If the active card has a legitimate previous element, scroll to it
    if (verticalCardActive.previousElementSibling)
      $(".verticalCarousel").scrollTo(
        verticalCardActive.previousElementSibling,
        movementDelay
      );

    updateAdjCardsAfter(); //Update adjacent card class (sizes)
    return false;
  }
  //If Pressing down
  if (
    event.key == "ArrowDown" &&
    document.getElementsByClassName("verticalCardActive").length > 0
  ) {
    updateAdjCardsBefore(); //Update adjacent card class (sizes)
    event.preventDefault();
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    $(".verticalCarousel").scrollTo(".verticalCardActive", movementDelay);
    if (verticalCardActive.nextElementSibling) {
      verticalCardActive.nextElementSibling.classList.add("verticalCardActive");
    } else {
      makeFirstCardActive();
    }
    verticalCardActive.classList.remove("verticalCardActive");
    updateAdjCardsAfter(); //Update adjacent card class (sizes)

    return false;
  }
  if (
    (event.key == "ArrowDown" || event.key == "ArrowUp") &&
    $(".helpActive").length > 0
  ) {
    makeFirstCardActive();

    updateAdjCardsAfter(); //Update adjacent cards
  }
  // else if(event.key=="ArrowDown") {
  //   event.preventDefault();
  //   element[0].classList.add("verticalCardActive"); //If nothing is selected, use element[element.legth − 1] for the last element]
  //   return false;
  // };
});

const makeFirstCardActive = () => {
  document
    .getElementsByClassName("verticalCarousel")[0]
    .children[0].classList.add("verticalCardActive");
  $(".verticalCarousel").scrollTo(".verticalCardActive", movementDelay);
  $("#helpImg")[0].classList.remove("helpActive");
};

//Update the first portion
const updateAdjCardsBefore = () => {
  var thisIsCurrent = document.getElementsByClassName("verticalCardActive")[0];
  //General use case
  try {
    thisIsCurrent.nextElementSibling.classList.remove("vCardAdj");
  } catch (err) {
    console.log("updateAdjCardBefore failed to detect next sibling");
  }
  //General use case
  try {
    thisIsCurrent.previousElementSibling.classList.remove("vCardAdj");
  } catch (err) {
    console.log("updateAdjCardBefore failed to detect previous sibling");
  }
};

//Update the latter portion
const updateAdjCardsAfter = () => {
  var thisIsCurrent = document.getElementsByClassName("verticalCardActive")[0];
  //General use case
  try {
    thisIsCurrent.nextElementSibling.classList.add("vCardAdj");
  } catch (err) {
    console.log("updateAdjCardAfter failed to detect next sibling");
  }
  //General use case
  try {
    thisIsCurrent.previousElementSibling.classList.add("vCardAdj");
  } catch (err) {
    console.log("updateAdjCardAfter failed to detect previous sibling");
  }
};
