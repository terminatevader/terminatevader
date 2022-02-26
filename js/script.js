
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

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
document.getElementsByClassName('topnav')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav1')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav a')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav1 a')[0].style.visibility = 'hidden';
document.getElementsByClassName('bottomnav')[0].style.visibility = 'hidden';
document.getElementsByClassName('bottomnav a')[0].style.visibility = 'hidden';
document.getElementsByClassName('dropdown')[0].style.visibility = 'visible';
document.getElementsByClassName('dropbtn')[0].style.visibility = 'visible';
document.getElementsByClassName('topnav')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav1')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav a')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav1 a')[0].style.visibility = 'hidden';
document.getElementsByClassName('bottomnav')[0].style.visibility = 'hidden';
document.getElementsByTagName('img')[0].style.min-width = '100%';
document.getElementsByTagName('img')[0].style.min-height = '100%';
}

else{
 document.getElementsByClassName('dropdown')[0].style.visibility = 'hidden';
document.getElementsByClassName('dropbtn')[0].style.visibility = 'hidden';
document.getElementsByClassName('topnav')[0].style.visibility = 'visible';
document.getElementsByClassName('topnav1')[0].style.visibility = 'visible';
document.getElementsByClassName('topnav a')[0].style.visibility = 'visible';
document.getElementsByClassName('topnav1 a')[0].style.visibility = 'visible';
document.getElementsByClassName('bottomnav')[0].style.visibility = 'visible';
document.getElementsByClassName('bottomnav a')[0].style.visibility = 'visible';
}
