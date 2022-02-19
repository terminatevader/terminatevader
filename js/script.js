

if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
}
localStorage.setItem("experiment", "no");
var experiment = localStorage.getItem("experiment"); 

 if (confirm("Press OK to enable experimental mode")) {
document.getElementById("TNV").style.display = "none";
document.getElementById("experiment").style.display = "block";
 }
else{
if (experiment == "no")
{
document.getElementById("experiment").style.display = "none";
document.getElementById("TNV").style.display = "block";
}
}
