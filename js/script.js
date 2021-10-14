var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('f','yes');
    localStorage.setItem('four','yes')
}
var four = localStorage.getItem('four') || '';
    if ((four != 'yes') &&(visited=='yes')){
     if (confirm("There's a new blog entry!")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('four','yes');
      localStorage.removeItem("three");
}

var f = localStorage.getItem('f') || '';
    if ((f != 'yes')&&(visited == 'yes')) {
     if (confirm("There's a new update!")==true) {
        location.href="https://www.terminatevader.com/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('f','yes');
      localStorage.removeItem("e");
}
