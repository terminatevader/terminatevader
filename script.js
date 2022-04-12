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








   
    

    document.onkeydown = function(evt) {
    evt = evt || window.event;
	
   
	   
   if ( evt.keyCode == 36) {
        location.href = "https://www.terminatevader.com/";
    }
	    
	
    
}					
    
    
   
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

	r = Math.floor(Math.random() * 10001); 


	

			
	



    

