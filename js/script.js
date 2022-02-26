
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
document.getElementsByClassName('topnav').style.display = 'none';
document.getElementsByClassName('topnav1').style.display = 'none';
document.getElementsByClassName('topnav a').style.display = 'none';
document.getElementsByClassName('topnav1 a').style.display = 'none';
document.getElementsByClassName('bottomnav').style.display = 'none';
document.getElementsByClassName('bottomnav a').style.display = 'none';
document.getElementsByTagName('img').style.min-width = '100%';
document.getElementsByTagName('img').style.min-height = '100%';
}

else{
 document.getElementsByClassName('dropdown').style.display = 'none';
document.getElementsByClassName('dropbtn').style.display = 'none';

}
