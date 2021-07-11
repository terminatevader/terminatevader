var ten = localStorage.getItem('ten') || '';
    if (ten != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('ten','yes');
      localStorage.removeItem("nine");
    }
