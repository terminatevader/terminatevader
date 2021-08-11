var ten = localStorage.getItem('ten') || '';
    if (ten != 'yes') {
     if (confirm("There's a new blog entry!")==true) {
  location.href = "http://beta.terminatevader.com/blog";
} 
    else{
      alert("Understandable, have a great day!");
    }
      localStorage.setItem('ten','yes');
      localStorage.removeItem("eight");
}

var ten = localStorage.getItem('ten') || '';
    if (ten != 'yes') {
     if (confirm("There's a new update!")==true) {
        location.href="https://github.com/terminatevader/terminatevader.github.io/blob/main/patchnotes.txt";
} 
        else{
     alert("Understandable, have a great day!");
    }
      localStorage.setItem('ten','yes');
      localStorage.removeItem("");
}
