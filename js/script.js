
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

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    topnav.style.display = "none";
    topnav1.style.display = "none";
    bottomnav.style.display = "none";
    
}

else{
    dropdown.style.display = "none";
    bottomnav1.style.display = "none";
    dropbtn.style.display = "none";
}
