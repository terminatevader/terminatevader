
var twentyfour = localStorage.getItem('twentyfour') || '';
    if (twentyfour != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentyfour','yes');
      localStorage.removeItem("twentythree");
    }
