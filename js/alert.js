
var twentyone = localStorage.getItem('twentyone') || '';
    if (twentyone != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentyone','yes');
      localStorage.removeItem("twenty");
    }
