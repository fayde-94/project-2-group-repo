const movementDelay = 400; //movementDelay variable

//When detecting keypresses:
document.querySelector("body").addEventListener("keydown", function (event) {
  //I) If the keypress is up
  if (
    event.key == "ArrowUp" &&
    document.getElementsByClassName("verticalCardActive").length > 0
  ) {
    updateAdjCardsBefore(); // II) Update adjacent card class (sizes)
    console.log("$$$:2");
    event.preventDefault(); // II.5) Prevent normal scrolling
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];

    // III) If it is the top, call for help, otherwise assign the previous sibling as the next active card
    if (verticalCardActive.previousElementSibling) {
      verticalCardActive.previousElementSibling.classList.add(
        "verticalCardActive"
      );
    } else {
      callForHelp();
    }
    console.log("$$$:3");

    // IV) Relocate where the active card is
    verticalCardActive.classList.remove("verticalCardActive");
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];
    console.log("$$$:4");

    // V) If the active card has a legitimate previous element, scroll to it
    try {
      var verticalCardAdj = verticalCardActive.previousElementSibling;
      if (verticalCardAdj.previousElementSibling) {
        $(".verticalCarousel").scrollTo(
          verticalCardAdj.previousElementSibling,
          movementDelay
        );
      }
    } catch (err) {
      console.log("UpKey; not enough previous siblings");
    }
    console.log("$$$:5");

    updateAdjCardsAfter(); // VI) Update adjacent card class (sizes)
    console.log("$$$:6");

    return false;
  }
  //I) If Pressing down
  if (
    event.key == "ArrowDown" &&
    document.getElementsByClassName("verticalCardActive").length > 0
  ) {
    updateAdjCardsBefore(); // II) Update adjacent card class (sizes)
    event.preventDefault(); // II.5) Prevent default scrolling
    var verticalCardActive =
      document.getElementsByClassName("verticalCardActive")[0];

    // III) If it is the bottom, call for help, otherwise assign the next sibling as the next active card
    var verticalCardAdj = verticalCardActive.nextElementSibling;
    if (verticalCardAdj) {
      verticalCardAdj.classList.add("verticalCardActive");
    } else {
      callForHelp();
    }

    // IV) Relocate where the active card is
    verticalCardActive.classList.remove("verticalCardActive");
    // V) If the active card has a legitimate previous element, scroll to it
    try {
      var verticalCardAdj = verticalCardActive.nextElementSibling;
      if (verticalCardAdj)
        $(".verticalCarousel").scrollTo(
          verticalCardActive.previousElementSibling,
          movementDelay
        );
    } catch (err) {
      console.log("Down Key not enough next next siblings");
    }
    updateAdjCardsAfter(); // VI) Update adjacent card class (sizes)

    return false;
  }
  //I) If you are in the help button mode
  if (
    (event.key == "ArrowDown" || event.key == "ArrowUp") &&
    $(".helpActive").length > 0
  ) {
    // II) Escape to the first card
    makeFirstCardActive();
  }
  // else if(event.key=="ArrowDown") {
  //   event.preventDefault();
  //   element[0].classList.add("verticalCardActive"); //If nothing is selected, use element[element.legth − 1] for the last element]
  //   return false;
  // };
});

//Code to make the first
const makeFirstCardActive = () => {
  document
    .getElementsByClassName("verticalCarousel")[0]
    .children[0].classList.add("verticalCardActive");
  $(".verticalCarousel").scrollTo(".verticalCardActive", movementDelay);
  $("#helpImg")[0].classList.remove("helpActive");

  updateAdjCardsAfter();
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
