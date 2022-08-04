	  let x = 0;
	  let y = 0;
	  window.onscroll = function() {newScroll()};
	  function showDotArrow() {
	    if(window.innerWidth > 800) {
	      let j = document.getElementById("dot-arrow");
		    if(document.documentElement.scrollTop > 5) {
		      j.style.opacity = "1";
		    }
		}
	  }
	  function hideDotArrow() {
	    let j = document.getElementById("dot-arrow");
		j.style.opacity = "0";
	  }
	  function newScroll(){
	    let change = 95;
		let changeSml = 200;
		let scrollValue = document.documentElement.scrollTop;
		let shapeStyle = document.getElementById("shape").style;
		let shapeInnerStyle = document.getElementById("shape-inner").style;
		let procBtnStyle = document.getElementById("proceed-btn").style
		if(document.documentElement.scrollTop < 3000){
	      change += scrollValue/64;
		  changeSml += scrollValue/64;
		  procBtnStyle.opacity = (scrollValue/800);
		  if(procBtnStyle.opacity > 1.0) {
		    procBtnStyle.opacity = 1.0;
		  }
		}
		if(window.innerWidth > 800){
		    shapeInnerStyle.width = (-1*change)+"vw";
		    shapeInnerStyle.margin = (-1*(scrollValue/2048))+"vw";
		    shapeStyle.width = change+"vw";
		    shapeStyle.margin = (-1*(scrollValue/100))+"vw "+(-1*(scrollValue/130))+"vw";
		  }
		else if(window.innerWidth < 800){
			let units = "vw";
		    shapeInnerStyle.width = (-1*changeSml)+units;
		    shapeInnerStyle.margin = (-1*(scrollValue/2048))+units;
			document.getElementById("shape-img").style.width = changeSml+units;
		    shapeStyle.width = changeSml+units;
		    shapeStyle.margin = (-1*(scrollValue/100))+"vw "+(-1*(scrollValue/150))+"vw";
		}
	  }
	