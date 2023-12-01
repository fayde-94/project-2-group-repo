const onEnterOfSmartSwitch = (selectedElement, switchId) => {
  let smartSwithState = triggerLightSwitch(0);

  if (smartSwithState) {
    document.getElementsByClassName(
      "verticalCardActive"
    )[0].children[2].style.backgroundColor = "#FEC341";
    document.getElementsByClassName(
      "verticalCardActive"
    )[0].children[2].innerHTML = "ON";
    document.getElementsByClassName("verticalCardActive")[0].children[0].scr =
      "../images/LightON.png";
  } else {
    document.getElementsByClassName(
      "verticalCardActive"
    )[0].children[2].style.backgroundColor = "#D9D9D9";
    document.getElementsByClassName(
      "verticalCardActive"
    )[0].children[2].innerHTML = "OFF";
  }
};
