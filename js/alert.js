var fourteen = localStorage.getItem('fourteen') || '';
    if (fourteen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('fourteen','yes');
      localStorage.removeItem("twelve");
    }
