var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('c','yes');
}
var ten = localStorage.getItem('ten') || '';
    if (ten != 'yes') {
     if (confirm("There's a new blog entry!")==true) {
  location.href = "http://www.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('ten','yes');
      localStorage.removeItem("nine");
}

var c = localStorage.getItem('c') || '';
    if ((c != 'yes')&&(visited == 'yes')) {
     if (confirm("There's a new update!")==true) {
        location.href="https://github.com/terminatevader/terminatevader.github.io/blob/main/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('c','yes');
      localStorage.removeItem("b");
}
