
var twentytwo = localStorage.getItem('twentythree') || '';
    if (twentythree != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentythree','yes');
      localStorage.removeItem("twentytwo");
    }
