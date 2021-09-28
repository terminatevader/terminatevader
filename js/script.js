var visited = localStorage.getItem('visited') || '';
if(visited != 'yes'){
    localStorage.setItem('visited','yes');
    localStorage.setItem('f','yes');
    local.setItem('one','yes')
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
