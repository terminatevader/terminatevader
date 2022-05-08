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
topnav.textContent = 'Happy Mother's Day'; 

	

			
	



    

