var eleven = localStorage.getItem('eleven') || ('');
    if (eleven != 'eleven') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('eleven','yes');
      localStorage.removeItem("ten");
    }
