 var sixteen = localStorage.getItem('sixteen') || '';
    if (sixteen != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('sixteen','yes');
      localStorage.removeItem("store");
    }
