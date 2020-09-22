var isMenuOpen = false;
function menuToggle(x) {
  document.getElementById("dd_menu").classList.toggle("show");
  x.classList.toggle("change");
}
window.onclick = function(event) {
  if (!event.target.matches('.dd_btn, .bar1, .bar2, .bar3')) {
    var dropdowns = document.getElementsByClassName("dd_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
		document.getElementById("dd_button").classList.toggle("change");
      }
    }
  }
}
