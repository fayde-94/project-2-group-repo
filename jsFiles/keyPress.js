document.querySelector("body").addEventListener("keydown", function (event) {
  anyKeyPressToLoadMainPage();
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (event.key) {
    case "ArrowLeft":
      // Left pressed
      //   console.log("Left pressed");
      leftArrowPress();
      break;
    case "ArrowRight":
      // Right pressed
      //   console.log("right pressed");
      rightArrowPress();
      break;
    case "ArrowUp":
      // Up pressed
      //   console.log("up pressed");
      upArrowPress();
      break;
    case "ArrowDown":
      // Down pressed
      //   console.log("down pressed");
      downArrowPress();
      break;
    case "Enter":
      // Down pressed
      //   console.log("down pressed");
      enterKeyPress();
      break;
  }
});

const leftArrowPress = () => {
  document.querySelectorAll(".w3-animate-right").forEach((e) => {
    // console.log(e.classList);
    e.classList.remove("w3-animate-right");
    e.classList.add("w3-animate-left");
  });
  document.getElementById("audio").play();
  plusSlides(-1);
  console.log("Left pressed");
  setTimeout(pressHorizontalNavButton("<"), 10);
};
const rightArrowPress = () => {
  document.querySelectorAll(".w3-animate-left").forEach((e) => {
    console.log(e.classList);
    e.classList.remove("w3-animate-left");
    e.classList.add("w3-animate-right");
  });
  document.getElementById("audio").play();
  plusSlides(1);
  console.log("right pressed");
  pressHorizontalNavButton(">");
};
const upArrowPress = () => {
  console.log("up pressed");
};
const downArrowPress = () => {
  console.log("down pressed");
};

const anyKeyPressToLoadMainPage = () => {
  if (!document.getElementById("mainPage").innerHTML) {
        $(".Landingpage")[0].innerHTML="";
    $("#mainPage").load(
      "navMainCarousel.html",
      function (responseTxt, statusTxt, xhr) {
        showSlides(5);
      }
    );
  }
};
const enterKeyPress = () => {
  console.log("Hi form enter");
  const selectedElement = document.getElementsByClassName("verticalCardActive");
  if (selectedElement.length > 0) {
    if (selectedElement[0].classList.contains("smartLightOFF")) {
      onEnterOfSmartSwitch(selectedElement, 0);
    }
  }
  callForHelpToServer();
};
function resetHorizontalIcons() {
  document.getElementsByClassName("prev")[0].innerHTML = `
  <img src="../images/horizontalNavPrevIconShadow.svg" alt="<" />`;
  document.getElementsByClassName("next")[0].innerHTML = `
  <img src="../images/horizontalNavNextIconShadow.svg" alt=">" />`;
}

function pressHorizontalNavButton(direction) {
  document.getElementsByClassName("prev")[0].innerHTML = `
    <img src="../images/horizontalNavPrevIconPressed.svg" alt=">" />`;
  document.getElementsByClassName("next")[0].innerHTML = `
    <img src="../images/horizontalNavNextIconPressed.svg" alt="<" />`;
  if (direction == "<") {
    console.log("PRESSED < ALREADY");
  } else if (direction == ">") {
    console.log("PRESSED > ALREADY");
  } else {
    console.log("ERROR UNKNOWN DIRECTION");
  }
  setTimeout(resetHorizontalIcons(), 5000);
}
