function menuButton() {
  var theMenu = document.getElementById("menu");
  if (theMenu.className != "show") {
    theMenu.className = theMenu.className + "show";
  } else {
    theMenu.className = "";
  }
}
