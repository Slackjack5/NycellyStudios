// Add event handler functions here

function setup() {
  //declaring variables
  var roundButton = document.querySelector("#roundButton");
  var flyoutMenu = document.querySelector("#flyoutMenu");
  var flyoutMenu2 = document.querySelector("#flyoutMenu2");
  var flyoutMenu3 = document.querySelector("#flyoutMenu3");
//variables for button 1 and slideout menu
  roundButton.addEventListener("click", showMenu, false)
  flyoutMenu.addEventListener("click", hideMenu, false)
  flyoutMenu2.addEventListener("click", hideMenu, false)
  flyoutMenu3.addEventListener("click", hideMenu, false)
//when show menu true
  function showMenu(e) {
      flyoutMenu.classList.add("show");
      flyoutMenu2.classList.add("show");
      flyoutMenu3.classList.add("show");
      document.body.style.overflow = "hidden";
  }

//when hide menu true
  function hideMenu(e) {
      flyoutMenu.classList.remove("show");
      flyoutMenu2.classList.remove("show");
      flyoutMenu3.classList.remove("show");
      e.stopPropagation();

      document.body.style.overflow = "auto";
  }

}


$(document).ready(setup);
