var two = localStorage.getItem('two') || '';
    if (two != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('two','yes');
      localStorage.removeItem("one");
    }
