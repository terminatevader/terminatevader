var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('g','yes');
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

var g = localStorage.getItem('g') || '';
    if ((g != 'yes')&&(visited == 'yes')) {
     if (confirm("There's a new update!")==true) {
        location.href="https://www.terminatevader.com/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('g','yes');
      localStorage.removeItem("f");
}
