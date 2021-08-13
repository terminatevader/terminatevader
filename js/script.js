var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
}
var twelve = localStorage.getItem('twelve') || '';
    if (twelve != 'yes') {
     if (confirm("There's a new blog entry!")==true) {
  location.href = "http://www.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('twelve','yes');
      localStorage.removeItem("ten");
}

var b = localStorage.getItem('b') || '';
    if ((b != 'yes')&&(visited == 'yes')) {
     if (confirm("There's a new update!")==true) {
        location.href="https://github.com/terminatevader/terminatevader.github.io/blob/main/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('b','yes');
      localStorage.removeItem("a");
}
