// When the user scrolls down 20px from the top of the document, slide down the navbar
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			for (let i = 0; i < document.getElementById("navbar").children.length; i++) {
		      document.getElementById("navbar").children[i].style.color = "#111111";
			  //document.getElementById("navbar").children[i].style.fontSize = "26px";
			  document.getElementById("navbar").children[i].classList.add("change-underline");
			}			
			document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255,1)";
			document.getElementById("navbar").style.padding = "1.50em 0 0 0";
			document.getElementById("respon-button").style.opacity="1";
		  } else {
		    document.getElementById("navbar").style.padding = "0 0 0 0";
			document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255,.1)";
			document.getElementById("respon-button").style.opacity="0.5";
			for (let i = 0; i < document.getElementById("navbar").children.length; i++) {
		      document.getElementById("navbar").children[i].style.color = "#c9b465";
			  //document.getElementById("navbar").children[i].style.fontSize = "24px";
			  document.getElementById("navbar").children[i].classList.remove("change-underline");
			}		
		  }
		  
		}
		
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}