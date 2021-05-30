
var twentynine = localStorage.getItem('twentynine') || '';
    if (twentynine != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentynine','yes');
      localStorage.removeItem("twentyeight");
    }
