var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('h','yes');
    localStorage.setItem('six','yes')
}
var six = localStorage.getItem('six') || '';
    if ((six != 'yes') &&(visited=='yes')){
     if (confirm("There's a new blog entry!")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('six','yes');
      localStorage.removeItem("five");
}

var h = localStorage.getItem('h') || '';
    if ((h != 'yes')&&(visited == 'yes')) {
     if (confirm("There's a new update!")==true) {
        location.href="https://www.terminatevader.com/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('h','yes');
      localStorage.removeItem("g");
}
 if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    window.location = 'microsoft-edge:' + window.location;
    setTimeout(function() {
      window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
    }, 1);
  }

if( /CrOs/i.test(navigator.userAgent) ) {
 alert("Your experience may be impacted"); 
}
