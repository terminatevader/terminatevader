var twentytwo = localStorage.getItem('twentytwo') || '';
    if (twentyone != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentytwo','yes');
      localStorage.removeItem("twentyone");
    }
