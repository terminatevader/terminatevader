

if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
}

if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
var r = Math.floor((Math.random() * 101)+1);

if (r == 1)
{
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
}


if(/TV|PlayStation|Xbox|Nintendo/i.test(navigator.userAgent))
{
   
  document.getElementById("TNV").style.display = "none";
  alert("This website is not yet available for your device");
}
