 var twenty = localStorage.getItem('twenty') || '';
    if (twenty != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twenty','yes');
      localStorage.removeItem("eighteen");
    }
