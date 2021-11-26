if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    window.location = 'microsoft-edge:' + window.location;
    setTimeout(function() {
      window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
    }, 1);
  }

if ('serviceWorker' in navigator){
navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch(() => console.log('service worker not registered'))
}
