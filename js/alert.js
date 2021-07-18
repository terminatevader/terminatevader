var seventeen = localStorage.getItem('seventeen') || '';
    if (sixteen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('fifteen,'yes');
      localStorage.removeItem("sixteen");
    }
