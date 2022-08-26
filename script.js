console.log(navigator.userAgent);
if(/Firefox/i.test(navigator.userAgent)){
	window.location("https://www.terminatevader.com/experimentalmode");
	node.rel = 'https://www.terminatevader.com/experimentalmode.css';
	if(window.location.href = "https://www.terminatevader.com/index.html")
	{
	window.location.replace("https://www.terminatevader.com/experimentalmode")
	 if (confirm("I would like to hear your feedback") == true)
	 {
		 window.location("https://docs.google.com/forms/d/e/1FAIpQLSeA-6ko6ivasc6LnMX_RBvBSql2oIFOsXe37UQ4bu1o4WvC8A/viewform?usp=sf_link");
	 }
	else
	{
		text = "That's alright";
	}
	}
}
else{
	if (window.location.href = "https://www.terminatevader.com/experimentalmode")
	{
		window.location.replace("https://www.terminatevader.com/index.html");
	}
}
  if (typeof(Storage) !== "undefined") {
    if (localStorage.visitcount) {
      localStorage.visitcount = Number(localStorage.visitcount)+1;
    } 
else {
      localStorage.visitcount = 1;
    }
  } 
 
const topnav = document.getElementById("topnav");
topnav.textContent = "TermiNateVader";


			
	
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        plusDivs(-1)
    }
    else if(event.keyCode == 39) {
        plusDivs(1)
    }
	else if(event.keyCode == 36){
		location.href = "https://www.terminatevader.com/";
	}
	
	
	




});



function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


