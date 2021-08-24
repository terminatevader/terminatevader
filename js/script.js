var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('c','yes');
}
var one = localStorage.getItem('one') || '';
    if ((one != 'yes') &&(visited=='yes')){
     if (confirm("There's a new blog entry!")==true) {
  location.href = "http://beta.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('one','yes');
      localStorage.removeItem("ten");
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
