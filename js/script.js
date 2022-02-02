if (window.document.documentMode) {
    alert("Internet Explorer is no longer supported");
    document.getElementById("TNV").style.display = "none";
    window.location = 'microsoft-edge:' + window.location;
    setTimeout(function() {
      window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
    }, );
  }

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
