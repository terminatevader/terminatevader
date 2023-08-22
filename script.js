
if(/Android/i.test(navigator.userAgent) && !/wv/i.test(navigator.userAgent)){
	window.location.replace("https://github.com/terminatevader/terminatevader.github.io/releases/tag/App")
	

}
const topnav = document.getElementById("topnav");

	topnav.textContent = "TermiNateVader";



	console.log(navigator.userAgent);
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
	




	}
			
	










