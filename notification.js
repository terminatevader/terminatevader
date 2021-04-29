Notification.requestPermission(
  function(status){
    console.log('Notification permission status:', status);
  });

function displayNotification() {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration()
    .then(function(reg){
      var options = {
  body: 'Go Check It Out'
  icon: 'TNV.jpg'
  vibrate: [100,50,100]
  
  data: {primaryKey: 1}
};
      reg.showNotification('New Blog Entry')
    });
  }
}
