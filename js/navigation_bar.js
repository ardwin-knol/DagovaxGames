/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu-bar") {
        x.className += " responsive";
    } else {
        x.className = "menu-bar";
    }
}