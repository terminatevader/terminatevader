window.addEventListener("online", function() {
  
	
})

window.addEventListener("offline", function() {
  
})


    

	



	console.log(navigator.userAgent);
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
			
	const topnav = document.getElementById("topnav");
	let today = new Date();
if (today.getMonth() == 11 && today.getDate() == 25) {
	topnav.textContent = "🎄&#xFE0E;";
	document.body.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm12Ym5lazZjMm01NGY4Yjl5ZDAzNm1udWR3bWsxbzdpOXBjM2xxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tIHktzgRi8yjIplFVI/giphy.gif')"; 
}
if (today.getMonth() == 10 && today.getDate() == 23) {
	topnav.textContent = "🦃&#xFE0E;";
}
if (today.getMonth() == 0 && today.getDate() == 1) {
	topnav.textContent = "📅&#xFE0E;";
}
	if (today.getMonth() == 1 && today.getDate() == 14) {
	topnav.textContent = "❤️&#xFE0E;";
}


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

