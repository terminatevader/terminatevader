var eight = localStorage.getItem('eight') || '';
    if (eight != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('eight','yes');
      localStorage.removeItem("seven");
    }
