
var twentysix = localStorage.getItem('twentysix') || '';
    if (twentysix != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentysix','yes');
      localStorage.removeItem("twentyfive");
    }
