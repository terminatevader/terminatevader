var twentythree = localStorage.getItem('twentythree') || '';
    if (twentyone != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentythree','yes');
      localStorage.removeItem("twentytwo");
    }
