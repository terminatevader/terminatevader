if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
   .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
}



    document.onkeydown = function(evt) {
    evt = evt || window.event;
	
   
	   
   if ( evt.keyCode == 36) {
        location.href = "https://www.terminatevader.com/";
    }
	    
	
    
}					
    
    

   
const topnav = document.getElementById("topnav");
/*topnav.textContent = "Happy Mother's Day";*/

	

			
	
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

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


    

