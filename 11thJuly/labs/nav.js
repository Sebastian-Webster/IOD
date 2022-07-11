/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showHideNavBar() {
    var navBar = document.getElementById("sebNavBar");
    if (navBar.classList.contains("responsive")) {
      navBar.classList.remove("responsive");
    } else {
        navBar.classList.add("responsive");
    }
}