var twentyseven = localStorage.getItem('twentyseven') || '';
    if (twentyseven != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twentyseven,'yes');
      localStorage.removeItem("twentysix");
    }
