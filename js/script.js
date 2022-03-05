
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
var platform = document.getElementById('platform')


if (/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|Windows Phone|Mobile Safari|Nokia/i.test(navigator.userAgent)){
    topnav.style.display = "none";
    topnav1.style.display = "none";
    bottomnav.style.display = "none";
    platform.innerHTML = 'Mobile';
    
    
}


else if (/Windows|Mac|Thunderstorm|i686|Ubuntu|CrOS/i.test(navigator.userAgent)){
    dropdown.style.display = "none";
    bottomnav1.style.display = "none";
    dropbtn.style.display = "none";
}



    else {
location.href = "https://www.terminatevader.com/unavailable.txt"

}


