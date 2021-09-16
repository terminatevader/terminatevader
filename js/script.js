var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('d','yes');
    local.setItem('eight','yes')
}
var nine = localStorage.getItem('nine') || '';
    if ((nine != 'yes') &&(visited=='yes')){
     if (confirm("There's a new blog entry!")==true) {
  location.href = "http://beta.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('nine','yes');
      localStorage.removeItem("eight");
}

var e = localStorage.getItem('e') || '';
    if ((e != 'yes')&&(visited == 'yes')) {
     if (confirm("There's a new update!")==true) {
        location.href="https://github.com/terminatevader/terminatevader.github.io/blob/main/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('e','yes');
      localStorage.removeItem("d");
}
