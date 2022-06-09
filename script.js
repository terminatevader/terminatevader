if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
   .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
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
	
	else if(event.keyCode == 49){
		location.href = "https://www.terminatevader.com/myplanforaftercollege";
	}

	else if(event.keyCode == 50){
		location.href = "https://www.terminatevader.com/cooldogs";
	}
	
	else if(event.keyCode == 51){
		location.href = "https://www.terminatevader.com/myexperienceatlegolandflorida";
	}
	
	else if(event.keyCode == 52){
		location.href = "https://www.terminatevader.com/myfirsttimeingatlinburgandpigeonforge";
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


    

