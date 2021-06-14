var thirteen = localStorage.getItem('thirteen') || '';
    if (thirteen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('thirteen','yes');
      localStorage.removeItem("twelve");
    }
