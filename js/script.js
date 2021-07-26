var twentyfive = localStorage.getItem('twentyfive') || '';
    if (twentyfive != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentyfive,'yes');
      localStorage.removeItem("twentyfour");
    }
