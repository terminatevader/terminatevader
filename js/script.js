
if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
}

localStorage.setItem("experiment", "no");
var experiment = localStorage.getItem("experiment"); 

/* if (confirm("Press OK to enable experimental mode. Press Cancel to turn off experimental mode")) {
     localStorage.setItem("experiment","yes");
if(experiment == "yes"){     
document.getElementById("TNV").style.display = "none";
document.getElementById("experiment").style.display = "block";
}
 }
else{
    localStorage.getItem("experiment", "no");
if (experiment == "no")
{
document.getElementById("experiment").style.display = "none";
document.getElementById("TNV").style.display = "block";

}
}*/

var topnav = document.getElementById('topnav');
var topnav1 = document.getElementById('topnav1');
var bottomnav = document.getElementById('bottomnav');
var bottomnav1 = document.getElementById('bottomnav1');
var dropdown = document.getElementById('dropdown');
var dropbtn = document.getElementById('dropbtn');
var i = document.getElementById('i');

if (/Xbox/i.test(navigator.userAgent)){
    location.href = "https://www.terminatevader.com/unavailable.txt"

}

else if (/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|Windows Phone|Mobile Safari|Nokia/i.test(navigator.userAgent)){
    topnav.style.display = "none";
    topnav1.style.display = "none";
    bottomnav.style.display = "none";
    i.style.width = "100%"
	
    
    
    
}


else if (/Windows|Mac|Thunderstorm|i686|Ubuntu|CrOS/i.test(navigator.userAgent)){
    dropdown.style.display = "none";
    bottomnav1.style.display = "none";
    dropbtn.style.display = "none";
    document.onkeydown = function(event) {
    
    document.onkeydown = function(evt) {
    evt = evt || window.event;
   if ( evt.keyCode == 36) {
        location.href = "https://www.terminatevader.com/"
    }
};
};
    document.onclick = hideMenu;
		document.oncontextmenu = rightClick;

		function hideMenu() {
			document.getElementById("contextMenu").style.display = "none"
		}

		function rightClick(e) {
			e.preventDefault();

			if (document.getElementById("contextMenu").style.display == "block")
				hideMenu();
			else {
				var menu = document.getElementById("contextMenu")
					
				menu.style.display = 'block';
				menu.style.left = e.pageX + "px";
				menu.style.top = e.pageY + "px";
			}
		}
	

}



    else {
location.href = "https://www.terminatevader.com/unavailable.txt"

}

r = Math.floor(Math.random() * 10001); 

if (r==1)
{
	location.href = "https://www.ravbug.com/bsod/bsod7/";
}

if (r==2)
{
	location.href = "https://www.ravbug.com/bsod/booterror7/";
}

if (r==3)
{
	location.href = "https://www.ravbug.com/bsod/bsod8/";
}

if (r==4)
{
	location.href = "https://www.ravbug.com/bsod/bsod10/";
}

if (r==5)
{
	location.href = "https://www.ravbug.com/bsod/bsod10/?g";
}

