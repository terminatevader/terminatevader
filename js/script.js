var thirtyone = localStorage.getItem('thirtyone') || '';
    if (thirtyone != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('thirtyone','yes');
      localStorage.removeItem("thirty");
    }
