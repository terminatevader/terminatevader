var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('h','yes');
    localStorage.setItem('five','yes')
}
var five = localStorage.getItem('five') || '';
    if ((five != 'yes') &&(visited=='yes')){
     if (confirm("There's a new blog entry!")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('five','yes');
      localStorage.removeItem("four");
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
if (/Trident/i.test(navigator.userAgent)) {
  location.href("https://support.microsoft.com/en-us/topic/this-website-works-better-in-microsoft-edge-160fa918-d581-4932-9e4e-1075c4713595?ui=en-us&rs=en-us&ad=us");
}
